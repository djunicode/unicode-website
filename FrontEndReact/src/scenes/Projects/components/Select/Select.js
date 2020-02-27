import React, {Component} from 'react';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { createMuiTheme ,MuiThemeProvider, Grid , Paper} from '@material-ui/core';
import {stylesSelect} from './styles/styles';

const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    formControl: {
      margin: theme.spacing.unit,
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing.unit * 2,
    },
  });

  const theme=createMuiTheme({
    
    palette:{
        primary:{
            main: "#445DFF"
        },
        secondary:{
            main: "#C1D37F"
        }

    },
    overrides: {
        MuiSelect: {
            root: {
                width: "100%"
                
            }
            
        }
    }

});


class SelectOption extends Component {

    state = {
        tech: '',
        year: ''
      };

      handleChange = name => event => {
        this.setState({ [name]: event.target.value });
      };
    

    render() {
        const { classes } = this.props;
        return (
            <Paper style={stylesSelect.paper}>
            <Grid container justify="center" direction="row" spacing={24}>
            <MuiThemeProvider theme={theme}>
                <Grid item xs={10} sm={7} md={7} lg={7} xl={7} >
                <FormControl variant="outlined" fullWidth id="inp-lbl-tech" >
                    <InputLabel>
                        TECHNOLOGIES
                    </InputLabel>
                    <Select
                    native
                    value={this.state.age}
                    onChange={this.handleChange('tech')}
                    input={
                    <OutlinedInput
                        name="tech"
                        labelWidth={120}
                        id="tech"
                    />
                    }
                >
                    <option value="" />
                    <option value={10}>Java</option>
                    <option value={20}>Web Development</option>
                    <option value={30}>Android</option>
                </Select>
                </FormControl>
                </Grid>
                </MuiThemeProvider>
                    <Grid item xs={12} sm={1} ></Grid>
                    
                <Grid item xs={10} sm={3} md={3} lg={3} xl={3}  style={{padding: 0}}> 
                <FormControl variant="outlined" fullWidth >
                    <InputLabel>
                        YEAR
                    </InputLabel>
                    <Select
                    native
                    value={this.state.age}
                    onChange={this.handleChange('year')}
                    input={
                    <OutlinedInput
                        name="year"
                        labelWidth={40}
                        id="year"
                    />
                    }
                >
                    <option value="" />
                    <option value={10}>1999</option>
                    <option value={20}>2018</option>
                    <option value={30}>2019</option>
                </Select>
                </FormControl>  
        
              </Grid>
            </Grid>
            </Paper>
        );
    }

}

export default SelectOption;