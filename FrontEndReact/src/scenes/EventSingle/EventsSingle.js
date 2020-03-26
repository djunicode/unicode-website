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
    data: []
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

  getSlug=(url)=>{
    if(url){
    var slug =url.split("/")
    slug=slug[slug.length-1]
    console.log(slug)
    return slug
    }
    else{
      console.log(slug)
        return ""
    }
}

getDate=(date)=>{
  var year=date.split("-")[0]
  var month=date.split("-")[1]
  var day=date.split("-")[2].split('T')[0]
  switch(month){
      case "01":
          month="Jan"
          break

      case "02":
          month="Feb"
          break
              
      case "03":
          month="Mar"
          break
              
      case "04":
          month="Apr"
          break
              
      case "05":
          month="May"
          break
              
      case "06":
          month="Jun"
          break
              
      case "07":
          month="Jul"
          break
              
      case "08":
          month="Aug"
          break
              
      case "09":
          month="Sept"
          break
              
      case "10":
          month="Oct"
          break
              
      case "11":
          month="Nov"
          break
              
      case "12":
          month="Dec"
          break
      default:
        break;
  }
  return `${month} ${day}, ${year}`
}

  getData=()=>{
      axios.get(`/api/events/detail/${this.getSlug(this.props.location.pathname)}`)
      .then(response=>{
        console.log(response.data)
        this.setState({
          data: response.data
        })
    })
      .catch(error=>console.log(error))
    }

    componentWillMount=()=>{
      console.log(this.state)
    }

    componentDidMount=()=>{
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
                      title={this.state.data.title?this.state.data.title:""}
                      body={this.state.data.description?this.state.data.description:""}
                      category={this.state.data.technologies?this.state.data.technologies[0]:""}
                      tech={this.state.data.stack?this.state.data.stack:""}
                      date={`Date : ${this.state.data.date?this.getDate(this.state.data.date):""}`}
                      price={this.state.data.event_amount?this.state.data.event_amount:""}
                    />
                </Grid>

                <Grid item xs={12} sm={11} md={9} lg={5} xl={4} >
                  <Reg
                  tName={this.state.data.title?this.state.data.title:""}
                  id={this.state.data.id?this.state.data.id:""}
                  postUrl={this.state.data.url?this.state.data.url:""}
                  />
                </Grid>

              </Grid>
            </Grid>

                <Grid item xs={12} xl={5} >
                  <Grid container direction="row" justify="center" >
                    <Grid item xs={11}>
                      <Lower content={this.state.data.description?this.state.data.description:""}/>
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
