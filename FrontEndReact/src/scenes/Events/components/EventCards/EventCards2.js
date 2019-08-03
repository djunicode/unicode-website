import React, { Component } from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import cardImg from "./Images/cardImg.jpg";
import PriceBtn from "../../../../components/buttons/priceButton/priceButton";

class EventCards2 extends Component {
  state = {};
  styles = {
    subFont: {
      //   fontSize: 16,
      //   fontFamily: "'Open Sans', sans-serif",
      //   fontWeight: 200,
      //   letterHeight: 22,
      //   color: "hsla(0, 0%, 0%, 1)"
      marginTop: "2%",
      marginBottom: "0%"
    },
    card: {
      boxShadow: "12px 12px 16px #d6d6d6",
      maxWidth: 500,
      borderRadius: "6px 6px 6px 0px",
      margin: "auto"
      //   marginBottom: "16%",
      // margin: 10
    },
    boldFont: {
      fontSize: 26,
      fontFamily: "'Open Sans', sans-seri",
      fontWeight: 600,
      letterHeight: 36
    },
    boldFont2: {
      fontSize: 16,
      fontFamily: "'Open Sans', sans-seri !important",
      fontWeight: 600,
      letterHeight: 22
    },
    topFont: {
      fontSize: 16,
      fontFamily: "'Roboto', sans-serif !important",
      fontWeight: 200,
      letterHeight: "19 !important",
      opacity: "1",
      color: "#445DFF",
      marginTop: "8px",
      marginBottom: "8px",
      letterSpacing: "1px"
    },
    dateFont: {
      fontSize: 16,
      fontFamily: "'Roboto', sans-serif !important ",
      fontWeight: 400,
      letterHeight: 19,
      opacity: "1",
      color: "hsla(0, 0%, 0%, 1)",
      marginTop: "0px !important",
      //   marginBottom: "8px",
      letterSpacing: "2px",
      position: "relative",
      bottom: "19px"
    },
    dateInfo: {
      fontSize: 16,
      fontFamily: "'Roboto', sans-serif !important ",
      fontWeight: 400,
      letterHeight: 19,
      opacity: "1",
      color: "hsla(0, 0%, 0%, 1)",
      marginTop: "0px !important",
      //   marginBottom: "8px",
      letterSpacing: "2px",
      position: "relative",
      bottom: "6px"
    },

    regFont: {
      fontSize: 26,
      fontFamily: "'Open Sans', sans-serif !important",
      fontWeight: 600,
      opacity: "1",
      color: "rgba(68, 93, 255, 1)",
      letterHeight: 36,
      marginTop: "1%"
    },
    buttonPosition: {
      marginLeft: "60% !important"
    },
    link: {
      textDecoration: "none",
      color: "#000"
    }
  };
  handleUpdate = () => {
    // this.forceUpdate()
    window.scrollTo(0, 0);
  };
  render() {
    return (
      <Card style={this.styles.card}>
        <NavLink
          style={this.styles.link}
          to="/Events"
          onClick={this.handleUpdate}
        >
          <CardActionArea>
            <CardMedia
              style={{ height: 275 }}
              image={cardImg}
              title="Blog image"
            />
            <CardContent style={{ padding: "4% 2% 8% 5%" }}>
              <div style={this.styles.topFont}>WEB DEVELOPMENT</div>

              <Typography component="p" style={this.styles.regFont}>
                What makes a great landing page?
              </Typography>

              <Typography variant="subtitle2" style={this.styles.subFont}>
                Explore the design process behind some great landing page
                examples. Lorem ipsum lorem ispum...
              </Typography>
              <PriceBtn price="50" />
              <div style={this.styles.dateFont}>DATE:</div>
              <div style={this.styles.dateInfo}>DEC 28, 2018</div>
            </CardContent>
          </CardActionArea>
        </NavLink>
      </Card>
    );
  }
}

export default EventCards2;
