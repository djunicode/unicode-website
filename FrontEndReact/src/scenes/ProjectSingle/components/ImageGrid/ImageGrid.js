import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import Image1 from './image/image1.jpg';
import Image2 from './image/image2.jpg';
class ImageGrid extends Component{
    render() {
        return(
            <Grid 
            container
            direction="row"
            spacing={24}>
                <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
                    <img src="https://picsum.photos/730.05/360" width="100%"/>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                    <Grid container
                    direction="row"
                    justify="center"
                    spacing={24}>
                        <Grid item xs={12} md={6} lg={12}>
                            <Grid container
                            direction="row"
                            justify="center"
                            spacing={24}>
                            <Grid item xs={6} lg={6}>
                                <img src="https://picsum.photos/211.05/211.05" width="100%" />
                            </Grid>
                            <Grid item xs={6} lg={6}>
                                <img src="https://picsum.photos/211.05/211.05" width="100%" />
                            </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={6} lg={12}>
                        <Grid container
                        direction="row"
                        justify="center"
                        spacing={24}>
                            <Grid item xs={6} lg={6}>
                                <img src="https://picsum.photos/211.05/211.05" width="100%" />
                            </Grid>
                            <Grid item xs={6} lg={6}>
                                <img src="https://picsum.photos/211.05/211.05" width="100%" />
                            </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        );
    }
}
export default ImageGrid;