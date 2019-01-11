import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from '../components/header';
import EventSingle from '../pages/EventsSingle';

class Routing extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Header />
                    <div>
                        <Route path="/" component={EventSingle} exact />
                        <Route path="/Event" component={EventSingle} />
                        {/* <Route path="/EventSingle" component={EventSingle} /> */}
                    </div>
            </div>
         );
    }
}
 
export default Routing;