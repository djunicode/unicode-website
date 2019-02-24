import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
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
                width: 300
                
            }
            
        }
    }

});


class SelectOption extends Component {

    state = {
        age: '',
        name: 'hai',
        labelWidth: 0,
      };
    
      componentDidMount() {
        this.setState({
          labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
        });
      }
    
      handleChange = name => event => {
        this.setState({ [name]: event.target.value });
      };
    

    render() {
        const { classes } = this.props;
        return (
            <Paper style={stylesSelect.paper}>
            <Grid container justify="center" direction="row" spacing={24}>
            <MuiThemeProvider theme={theme}>
                <Grid item xs={7}>
                <FormControl variant="outlined" fullWidth >
                    <InputLabel
                        ref={ref => {
                        this.InputLabelRef = ref;
                        }}
                        htmlFor="outlined-age-native-simple"
                    >
                        TECHNOLIGIES
                    </InputLabel>
                    <Select
                    native
                    value={this.state.age}
                    onChange={this.handleChange('age')}
                    input={
                    <OutlinedInput
                        name="age"
                        labelWidth={this.state.labelWidth}
                        id="outlined-age-native-simple"
                    />
                    }
                >
                    <option value="" />
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                </Select>
                </FormControl>
                </Grid>
                </MuiThemeProvider>

                <Grid item xs={3} style={{padding: 0}}> 
                <FormControl variant="outlined" fullWidth >
                    <InputLabel
                        ref={ref => {
                        this.InputLabelRef = ref;
                        }}
                        htmlFor="outlined-age-native-simple"
                    >
                        YEAR
                    </InputLabel>
                    <Select
                    native
                    value={this.state.age}
                    onChange={this.handleChange('age')}
                    input={
                    <OutlinedInput
                        name="age"
                        labelWidth={this.state.labelWidth}
                        id="outlined-age-native-simple"
                    />
                    }
                >
                    <option value="" />
                    <option value={10}>2018</option>
                    <option value={20}>2019</option>
                    {/* <option value={30}>Thirty</option> */}
                </Select>
                </FormControl>  
        
              </Grid>
            </Grid>
            </Paper>
        );
    }

}

export default SelectOption;