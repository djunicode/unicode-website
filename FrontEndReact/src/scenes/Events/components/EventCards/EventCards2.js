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
      }
      return `${month} ${day}, ${year}`
  }

  alterContent=(content)=>{
      var newContent=""
      var count=0
      content.split(" ").forEach((word)=>{
          if(count!==30){
              newContent+=word+" "
              count++;
          }
      })
      return newContent
  }
  getSlug=(url)=>{
      if(url){
      var slug =url.split("/")
      slug=slug[slug.length-1]
      console.log(slug)
      return slug
      }
      else{
          return ""
      }
  }
  handleUpdate = () => {
    // this.forceUpdate()
    window.scrollTo(0, 0);
  };
  render() {
    return (
      <Card style={this.styles.card}>
        <NavLink
          style={this.styles.link}
          to={`/EventSingle/${this.getSlug(this.props.link)}`}
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
                {this.props.title}
              </Typography>

              <Typography variant="subtitle2" style={this.styles.subFont}>
                {this.props.desc}
              </Typography>
              <PriceBtn price={this.props.price} />
              <div style={this.styles.dateFont}>DATE:</div>
              <div style={this.styles.dateInfo}>{this.getDate(this.props.date)}</div>
            </CardContent>
          </CardActionArea>
        </NavLink>
      </Card>
    );
  }
}

export default EventCards2;
