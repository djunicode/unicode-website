import React, { Component } from 'react';
import Info from './components/InfoCard/infoCard';
import Reg from './components/RegCard/regCard';
import EventN from './components/EventName/EventName';
import Lower from './components/LowerText/lowerText';
import Footer from '../../components/footer/footer';
import { Grid } from '@material-ui/core';
import axios from 'axios';

class App extends Component {

  state={
    title: "",
    userId: "",
    id: "",
    body: ""
  }

  styles={
    grid:{
        margin: 0,
        marginTop: 117,
        width: "100%"
    },
    background:{
      background: "#F8F8F8"
    },
    width:{
      width: 700
    }
  }

  getData=()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts?userId=1&id=2")
    .then(response=>{
      console.log(response.data[0].title)
      this.setState({
          title: response.data[0].title,
          userId: response.data[0].userId,
          id: response.data[0].id,
          body: response.data[0].body
    })
  })
    .catch(error=>console.log(error))
  }

  componentWillMount=()=>{
    console.log(this.state)
  }

  componentDidMount=()=>{
    console.log("Component mounted....")
    console.log("Getting data....")
    this.getData()
  }

  render() {
    console.log(this.state)
    return (
    <div style={this.styles.background}>
      <EventN />
          <Grid 
            container 
            spacing={24}
            direction="row"
            justify="center"
            style={this.styles.grid}
          >
            <Grid item xs={11} >
              <Grid container direction="row" justify="center" spacing={24} >
                <Grid item xs={12} sm={11} md={9} lg={5} xl={4} >
                      {/* <Info 
                      title="Info"
                      about=""
                      category="APP DEVELOPMENT"
                      tech="Techonologies: Java"
                      date="Date: Dec 28, 2018"
                      price="50"
                    /> */}
                    <Info 
                      title={this.state.title===""?()=>"":this.state.title}
                      body={this.state.body===""?()=>"":this.state.body}
                      category="APP DEVELOPMENT"
                      tech="Techonologies: Java"
                      date="Date: Dec 28, 2018"
                      price="50"
                    />
                </Grid>

                <Grid item xs={12} sm={11} md={9} lg={5} xl={4} >
                  <Reg />
                </Grid>

              </Grid>
            </Grid>

                <Grid item xs={12} xl={5} >
                  <Grid container direction="row" justify="center" >
                    <Grid item xs={11}>
                      <Lower content=""/>
                    </Grid>
                  </Grid>
                </Grid>
          </Grid>
          <Footer />
  </div>
    );
  }
}

export default App;
