import React, { Component } from 'react';

class NavTab extends Component {
    state = { 
        active: this.props.isActive
     }
    styles={
        box:{
            height:10,
            width: 10,
            background: "#FF7171",
            marginRight: 12
        }
    }
    render() { 
        return ( 
                <div style={this.styles.box} ></div>
         );
    }
}
 
export default NavTab;