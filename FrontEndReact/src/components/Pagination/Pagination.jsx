import React, { Component } from 'react';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import './css/sample.css';

class MyPagination extends Component {
    state = {
        current: 1,
        width: 40
      };
      handleUpdate=()=>{
        // this.forceUpdate()
        window.scrollTo(0,0)
      }
      onChange = (page) => {
        console.log(page);
        this.props.getData(page)
        // this.props.setPage(page)
        this.setState({
          current: page,
        });
        setTimeout(()=>{
          this.handleUpdate()
        }, 200);
      }
      onresize = ()=> {
        let width = document.body.clientWidth;
        let screen = width
        console.log(screen)
        let w = document.getElementById("one").children[0].childElementCount
        w=w*5
        let percent = (w/100)*screen
        console.log(percent)
        w=percent+40
        this.setState({width: w})
        console.log(w)
        console.log(document.getElementById("one").children[0].childElementCount)
     }
      componentDidMount=()=>{
        let screen = document.body.clientWidth
        console.log(screen)
        let w = document.getElementById("one").children[0].childElementCount
        w=w*5
        let percent = (w/100)*screen
        console.log(percent)
        w=percent+40
        this.setState({width: w})
        console.log(w)
        console.log(document.getElementById("one").children[0].childElementCount)
      }
      render() {
        window.addEventListener("resize", this.onresize);
        return (
                <div className="position2" style={{width: `${this.state.width}px`}} id="one" >
                    <Pagination onChange={this.onChange} current={this.state.current} total={100} />
                </div>
        );
      }
}
 
export default MyPagination;