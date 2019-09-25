import React, { Component } from 'react';
import { Grid, Avatar } from '@material-ui/core';
import {styles} from './styles/styles';
import avatar from './image/avatar.jpg';
import DialogBox from '../Dialog/Dialog';


class Mentors extends Component{
    state={
        open: false,
        data:[],
        mentors:[],
        dialogData:[]
    }
    showModal=(event)=>{
        console.log("modal")
        console.log(event.target.id)
        this.setState({open: true,dialogData:[this.state.mentors[event.target.id]]})
    }
    componentDidUpdate=(prevProps,prevState)=>{
        if(prevProps!=this.props){
            var array=[]
            var counter=0
            this.props.fe.forEach(e=>{
                e['id'] = counter;
                counter++
                array.push(e)
            })
            this.props.te.forEach(e=>{
                e['id'] = counter;
                counter++
                array.push(e)
            })
            console.log(array)
            this.setState({mentors: array})
        }
    }
    render(){
        console.log(this.state.dialogData)
        const renderMentor=this.state.mentors.map((data)=>{
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
                    Mentors
                </Grid>
                <Grid item xs={12}>
                </Grid>
                <DialogBox 
                open={this.state.open}
                data={this.state.dialogData} 
                name={this.state.dialogData[0]?this.state.dialogData[0].username:""}
                text={this.state.dialogData[0]?this.state.dialogData[0].bio:""}
                gitHub={this.state.dialogData[0]?this.state.dialogData[0].github_link:""}
                pic={this.state.dialogData[0]?this.state.dialogData[0].profile_pic:""}
                linkedIn={this.state.dialogData[0]?this.state.dialogData[0].linkedin_link:""}
                />
                <Grid item xs={9} sm={6} md={7} lg={10} xl={10}>
                <Grid container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={32}>
                   {renderMentor}
                </Grid>
                </Grid>
            
            </Grid>
        );
    }
}
export default Mentors;