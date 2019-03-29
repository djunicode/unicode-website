import React, { Component } from 'react';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import './css/sample.css';

class MyPagination extends Component {
    state = {
        current: 1,
        width: 40
      };
      onChange = (page) => {
        console.log(page);
        this.setState({
          current: page,
        });
      }
      componentDidMount=()=>{
        let w = document.getElementById("one").children[0].childElementCount
        w=w*5
        this.setState({width: w})
        console.log(w)
        console.log(document.getElementById("one").children[0].childElementCount)
      }
      render() {
        return (
                <div className="position2" style={{width: `${this.state.width}%`}} id="one" >
                    <Pagination onChange={this.onChange} current={this.state.current} total={100} />
                </div>
        );
      }
}
 
export default MyPagination;