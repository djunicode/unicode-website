import React, { Component } from 'react';
import { Paper, List } from '@material-ui/core';
import Img from '../Images/img1.jpg';
import InnerItem from './innerItem';

class DropDownAbout extends Component {
    state = {
        data:this.props.data||[]
     }
    //  componentDidUpdate=(prevProps,prevState)=>{
    //      if(prevProps!==this.props){
    //          this.setState({data:this.props.data})
    //      }
    //  }
    render() { 
        console.log(this.state.data)
        const renderStudent = this.state.data.map(s=>{
            return(
                <React.Fragment>
                    <InnerItem divider={s.divider} position={s.position} project={s.project} name={s.name} img={`https://storage.googleapis.com/unicode-data/static/frontend/profiles/`+s.img} />
                </React.Fragment>
            )
        })
        return ( 
            <React.Fragment>
                <Paper>
                    <List component="nav" aria-label="Main mailbox folders">
                        {renderStudent}
                    </List>
                </Paper>
            </React.Fragment>
         );
    }
}
 
export default DropDownAbout;