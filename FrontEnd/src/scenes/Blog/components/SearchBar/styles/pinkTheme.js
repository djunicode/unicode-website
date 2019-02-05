import { createMuiTheme } from '@material-ui/core';

export const myTheme=createMuiTheme(
    {
        overrides:{
            MuiInputBase:{
                input:{
                    fontSize: 20,
                    fontFamily: "'Open Sans', sans-serif",
                    fontWeight: 400,
                    color: "#707070",
                    opacity: "0.3",
                    flex: 1
                }
            }
        },
    }
);
