import {createMuiTheme} from '@material-ui/core';

export const tabPink=createMuiTheme(
    {
        overrides:{
            MuiBottomNavigation:{
                root:{
                    height: 70
                }
            }
        },
        palette:{
            primary:{
                main: "#FF7171"
            },
            secondary:{
                main: "#FF7171"
            }
        }
    }
);