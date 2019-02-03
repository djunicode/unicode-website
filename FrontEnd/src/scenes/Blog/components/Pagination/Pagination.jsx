import React, { Component } from 'react';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import './sample.css'

class MyPagination extends Component {
    state = {
        current: 1,
      };
      onChange = (page) => {
        console.log(page);
        this.setState({
          current: page,
        });
      }
      render() {
        return (
            // <div className="position" >
                <div className="position2" >
                    <Pagination onChange={this.onChange} current={this.state.current} total={30} />
                </div>
            // </div>
        );
      }
}
 
export default MyPagination;