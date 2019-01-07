import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FilledInput from '@material-ui/core/FilledInput';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  
  formControl: {
    margin: theme.spacing.unit,
  },
  paper:{
    width: "536px",
    height: "599px",
    padding: "106px 276px 105px 276px",
    boxShadow: "#d6d6d6 4px 4px 16px",
    borderRadius: 10,
    color: "#FFFFFF"
    

},
});


  

class ComposedTextField extends React.Component {
    state = {
      name: '',
    };
    
    
    
    componentDidMount() {
      this.forceUpdate();
    }
  
    handleChange = event => {
      this.setState({ name: event.target.value });
    };

    
  
    render() {
      const { classes } = this.props;
      return (
          
            <div className={classes.paper}>

                <div className={classes.container}>
                    <FormControl className={classes.formControl} variant="outlined">
                    <InputLabel
                    ref={ref => {
                    this.labelRef = ReactDOM.findDOMNode(ref);
                    }}
                    htmlFor="component-outlined"
                >
                    Name
                </InputLabel>
                <OutlinedInput
                    id="component-outlined"
                    value={this.state.name}
                    onChange={this.handleChange}
                    labelWidth={this.labelRef ? this.labelRef.offsetWidth : 0}
                />
                </FormControl>
                </div>

                <div className={classes.container}>
                    <FormControl className={classes.formControl} variant="outlined">
                    <InputLabel
                    ref={ref => {
                    this.labelRef = ReactDOM.findDOMNode(ref);
                    }}
                    htmlFor="component-outlined"
                >
                    Email

                </InputLabel>
                <OutlinedInput
                    id="component-outlined"
                    value={this.state.name}
                    onChange={this.handleChange}
                    labelWidth={this.labelRef ? this.labelRef.offsetWidth : 0}
                />
                </FormControl>
                </div>


                <div className={classes.container}>
                    <FormControl className={classes.formControl} variant="outlined">
                    <TextField
                        id="outlined-multiline-static"
                        label=""
                        multiline
                        rows="7"
                        defaultValue="Enter text here"
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                        />
                        </FormControl>
                </div>

                <div>
                    <Fab
                    variant="extended"
                    size="medium"
                    color="primary"
                    aria-label="Add"
                    className={classes.margin}
                    >
                    
                    SUBMIT
                    </Fab>
                </div>
            </div>

                
            
    );
  }
}

ComposedTextField.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(ComposedTextField)