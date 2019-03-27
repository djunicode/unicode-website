import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import BlogCard from '../../../Blog/components/BlogCard/BlogCard';
import Responses from '../Responses/Responses';

class LowerSection extends Component {
    state = {  }
    styles={
        heading:{
            fontSize:24,
            padding: "6px 0px 14px 0px",
            fontFamily: "'Open Sans', sans-seri",
            fontWeight: 600,
            lineHeight: "33px",
            marginTop: "8%",
            textAlign: "center"
        }
    }
    render() { 
        return ( 
            <React.Fragment>
                <Grid
                container
                direction="row"
                justify="center"
                style={{marginBottom: "10%"}}
                >
                    <Grid item xs={12}>
                    <div style={this.styles.heading} >You might be interested in</div>
                    </Grid>
                    <Grid 
                    container 
                    direction="row" 
                    justify="center" 
                    spacing={24} 
                    style={{width: "100%",margin: 0}}
                    >
                        <BlogCard heading="WEB DESIGN" subHeading="What makes a great landing page?" content="Explore the design process behind some great landing page examples..." author="Jon Snow" date="Jun 6, 1999" />
                        <BlogCard heading="WEB DESIGN" subHeading="What makes a great landing page?" content="Explore the design process behind some great landing page examples..." author="Jon Snow" date="Jun 6, 1999" />
                        <BlogCard heading="WEB DESIGN" subHeading="What makes a great landing page?" content="Explore the design process behind some great landing page examples..." author="Jon Snow" date="Jun 6, 1999" />
                        <Grid item xs={12}>
                            <Responses />
                        </Grid>
                    </Grid>
                </Grid>
            </React.Fragment>
         );
    }
}
 
export default LowerSection;