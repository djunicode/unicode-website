import React, { Component } from 'react';
import '../../css/nav.css';
import MyTab from '../NavTab/NavTab';
import {Button} from '@material-ui/core'

class NavBar extends Component {
    state = { 
        one: true,
        two: false,
        three: false,
        four: false
     }
    handleChange1 = () => {
        // console.log(this.state);
        this.props.setCategory("ALL")
        if(this.state.one===false){
            this.setState({
                one: true,
                two: false,
                three: false,
                four: false
            });
            // console.log(this.state);
        }
      };
      handleChange2 = () => {
        // console.log(this.state);
        this.props.setCategory("WEB DESIGN")
        if(this.state.two===false){
            this.setState({
                one: false,
                two: true,
                three: false,
                four: false
            });
            // console.log(this.state);
        }
      };
      handleChange3 = () => {
        // console.log(this.state);
        this.props.setCategory("WEB DEVELOPMENT")
        if(this.state.three===false){
            this.setState({
                one: false,
                two: false,
                three: true,
                four: false
            });
            // console.log(this.state);
        }
      };
      handleChange4 = () => {
        // console.log(this.state);
        this.props.setCategory("APP DEVELOPMENT")
        if(this.state.four===false){
            this.setState({
                one: false,
                two: false,
                three: false,
                four: true
            });
            // console.log(this.state);
        }
      };
    render() { 
        console.log(this.state)
        return ( 
            <div style={{marginBottom:"10%",marginTop: "2%"}} >

                <Button onClick={this.handleChange1}
                style={
                    {
                        opacity: `${this.state.one ? "1.0" : "0.5"}`,
                        marginRight: "2%"
                    }
                }
                >
                    <MyTab isActive={this.state.one} title="All" />
                    All
                </Button>

                <Button onClick={this.handleChange2}
                style={
                    {
                        opacity: `${this.state.two ? "1.0" : "0.5"}`,
                        marginRight: "2%"
                    }
                }
                >
                    <MyTab isActive={this.state.two} title="Web Design" />
                    Web Design
                </Button>

                <Button onClick={this.handleChange3}
                style={
                    {
                        opacity: `${this.state.three ? "1.0" : "0.5"}`,
                        marginRight: "2%"
                    }
                }
                >
                    <MyTab isActive={this.state.three} title="Web Develpment" />
                    Web Development
                </Button>
                
                <Button onClick={this.handleChange4}
                style={
                    {
                        opacity: `${this.state.four ? "1.0" : "0.5"}`,
                        marginRight: "2%"
                    }
                }
                >
                    <MyTab isActive={this.state.four} title="App Development" />
                    App Development
                </Button>
            </div>
         );
    }
}
 
export default NavBar;