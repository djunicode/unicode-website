import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Header from '../components/header/header';
import EventSingle from './EventSingle/EventsSingle';
import Event from './Events/EventsMain';
import Contactpage from './Contacts/Contact_page'
import Blog from './Blog/blogPage';
import AboutUs from './About_us/AboutUs';
import BlogSingle from './BlogSingle/BlogSingle';
import ProjectsMain from './Projects/ProjectsMain';
import Home from './Home/HomePage';
import ProjectSingle from './ProjectSingle/ProjectSingle';

class Routing extends Component {
    state = { 
        headerValue: '0'
     }
    headerUpdate=()=>{
        this.setState({headerValue: '0'})
    }
    updateParent=(value)=>{
        this.setState({headerValue: value})
    }
    render() { 
        return ( 
            <div>
                <Header updateParent={this.updateParent} headerValue={this.state.headerValue} />
                    <div>
                        <Route path="/" render={(props)=><Home {...props} updateHeader={this.headerUpdate} />} exact />
                        <Route path="/Events" component={Event} />
                        <Route path="/EventSingle" component={EventSingle} />
                        <Route path="/AboutUs" component={AboutUs} />
                        <Route path="/Contact" component={Contactpage} />
                        <Route path="/Blog" component={Blog} />
                        <Route path="/BlogSingle" component={BlogSingle} />
                        <Route path="/Projects" component={ProjectsMain} />
                        <Route path="/ProjectSingle" component={ProjectSingle} />
                    </div>
            </div>
         );
    }
}
 
export default Routing;