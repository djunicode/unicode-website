import React, { Component } from 'react';
import ProjTile from '../Projects/components/ProjTile/ProjTile';
import { Grid } from '@material-ui/core';

class Pagination extends Component {
    state = { 
        todos: ['1','2','3','4'],
        currentPage: 1,
        todosPerPage: 1,
        checked: false
     }
     handleClick=(event)=>{
        console.log(event.target)
        this.setState({
          currentPage: Number(event.target.id),
          checked: false
        });
      }
      handleNext=(pageNumbers)=>{
        const indexOfLastTodo = this.state.currentPage * this.state.todosPerPage;
        if(this.state.currentPage!==pageNumbers){
          this.setState({currentPage: this.state.currentPage+1})
        }
        else{
          this.setState({currentPage: 1})
        }
      }
      componentDidMount() {
        setInterval(() => {
           this.handleNext(4)
        }, 8000)
      }
    render() { 
        const { todos, currentPage, todosPerPage } = this.state;
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

        const renderTodos = currentTodos.map((todo, index) => {
            return (
              <ProjTile id={todo} checked={this.state.checked} />
            );
        });

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
            pageNumbers.push(i);
        }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        // <li
        //   key={number}
        //   id={number}
        //   style={{textAlign: "center"}}
        //   onClick={this.handleClick}
        // >
          <div 
          id={number}
          onClick={this.handleClick}
          // #7FC4FD
          style={{
            width: 20,
            float: "left",
            height: 20,
            background: `${number===this.state.currentPage?"#fff":"#cccccc"}`,
            opacity: `${number===this.state.currentPage?"0.8":"0.5"}`,
            transition: "linear 0.2s",
            borderRadius: 100,
            margin:10}} >
          </div>
        // </li>
      );
    });


        return ( 
            <React.Fragment>
                {/* <div style={{textAlign: "center"}} >
                    <ul>
                    {renderTodos}
                    </ul>
                    <br/>
                    <ul id="page-numbers"
                    style={{marginLeft: "50%",transform: "translateX(-80%)"}}
                    >
                    {renderPageNumbers}
                    </ul>
                </div> */}
                <Grid item xs={12}>
                  {renderTodos}
                </Grid>
                <Grid item style={{padding: 10}} >
                  {renderPageNumbers}
                </Grid>
            </React.Fragment>
         );
    }
}
 
export default Pagination;