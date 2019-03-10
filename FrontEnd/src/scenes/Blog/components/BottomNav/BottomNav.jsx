import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, styles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import BrushIcon from '@material-ui/icons/Brush';
import WebIcon from '@material-ui/icons/Web';
import SmartphoneIcon from '@material-ui/icons/Smartphone';
import * as myTheme from './styles/theme';


class LabelBottomNavigation extends React.Component {
  state = {
    value: 'recents',
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
        <MuiThemeProvider theme={myTheme.tabPink}>
            <BottomNavigation value={value} onChange={this.handleChange} className={classes.root}>
                <BottomNavigationAction label="All" value="recents" icon={<AllInclusiveIcon />} />
                <BottomNavigationAction label="Web Design" value="favorites" icon={<BrushIcon />} />
                <BottomNavigationAction label="Web Development" value="nearby" icon={<WebIcon />} />
                <BottomNavigationAction label="App Development" value="nearby1" icon={<SmartphoneIcon />} />
            </BottomNavigation>
      </MuiThemeProvider>
    );
  }
}

LabelBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LabelBottomNavigation);