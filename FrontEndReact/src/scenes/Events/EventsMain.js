import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import MyText from "./components/MyText/MyText";
import EventCards2 from "./components/EventCards/EventCards2";
import Home from "../Events/components/EventsImg/home.png";
// import Home1 from "./components/EventsImg/small.png";
import Footer from "../../components/footer/footer";
import axios from 'axios';
import MediaQuery from 'react-responsive';

class MyApp extends Component {
  state = {
    data: []
  };

  getData=()=>{
    axios.get("/api/events/")
    .then(response=>{
      console.log(response.data)
      this.setState({data: response.data})
  })
    .catch(error=>console.log(error))
  }

  componentDidMount=()=>{
    this.getData()
  }

  render() {
    console.log(this.state)
    const renderCard=this.state.data.map(card=>{
      return(
        <Grid item xs={12} sm={12} md={6} lg={4} alignItems="center">
          <EventCards2
          link={card.url}
          title={card.title}
          desc={card.description}
          date={card.date}
          price={card.event_amount}
          />
        </Grid>
      )
    })
    return (
      <div>
        <Grid container direction="row" justify="center">
          <Grid item xs={12}>
            <div style={{display: 'flex',justifyContent: 'center', background: '#c1d37f'}} >
            <MediaQuery maxWidth={768} >
              <img
                  src="/static/frontend/568640b8bf2f641847ef3258546e2ea0.png"
                  alt={""}
                  style={{padding: '14% 0%', width: "100%", height: "auto" }}
                />
            </MediaQuery>
            <MediaQuery minWidth={769} >
              <img
                src="/static/frontend/568640b8bf2f641847ef3258546e2ea0.png"
                alt={""}
                style={{ width: "60%", height: "auto" }}
              />
            </MediaQuery>
            </div>
          </Grid>
          <Grid item xs={12}>
            <Grid container direction="row" justify="center">
              <Grid item xs={9}>
                <MyText />
              </Grid>
              {/* <Grid container spacing={24} justify="center" alignItems="center">
                <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
                  <EventCards2 />
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
                  <EventCards2 />
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
                  <EventCards2 />
                </Grid>
              </Grid> */}
            </Grid>
          </Grid>
        </Grid>
        <Grid container justify="center">
          <Grid item xs={10} sm={11} md={8} lg={10}>
            <Grid container justify="center" alignContent="center" spacing={24}>
              {renderCard}
            </Grid>
          </Grid>
        </Grid>
        <br />
        <br />
        <br />
        <br />
        <br />

        <Footer />
      </div>
    );
  }
}

export default MyApp;
