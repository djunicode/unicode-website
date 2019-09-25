import React, { Component } from 'react';
import {styles} from '../Mentors/styles/styles';
import { Grid, Avatar } from '@material-ui/core';
import avatar from '../Mentors/image/avatar.jpg';

class Mentees extends Component{
    state={
        open: false,
        data:[],
        mentors:[],
        dialogData:[]
    }
    showModal=(event)=>{
        console.log("modal")
        console.log(event.target.id)
        this.setState({open: true,dialogData:[1]})
    }
    componentDidUpdate=(prevProps,prevState)=>{
        if(prevProps!=this.props){
            var array=[]
            var counter=0
            this.props.se.forEach(e=>{
                e['id'] = counter;
                counter++
                array.push(e)
            })
            console.log(array)
            this.setState({mentors: array})
        }
    }
    render(){
        console.log(this.state.mentors)
        const renderMentee=this.state.mentors.map((data)=>{
            return(
                <Grid item xs={5} sm={4} md={3} lg={1} xl={1}>
                    <Avatar imgProps={{id: data.id}} onClick={this.showModal} alt={data.username} src={`http://127.0.0.1:8000${data.profile_pic}`} style={styles.avatar} />
                </Grid>
                )
        }
        )
        return(
            <Grid container
            direction="row"
            justify="center"
            alignItems="center">
                <Grid item xs={12} sm={2} md={1} lg={1} xl={1} style={styles.text} className="openSans-26-600">
                    Mentees
                </Grid>
                <Grid item xs={12}>
                </Grid>
                <Grid item xs={9} sm={6} md={7} lg={11} xl={11}>
                <Grid container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={32}
                style={{marginBottom:131,width:"100%",margin: "0 0 131px 0"}}>
                    {renderMentee}
                </Grid>
                </Grid>
            
            </Grid>
        );
    }
}

export default Mentees;