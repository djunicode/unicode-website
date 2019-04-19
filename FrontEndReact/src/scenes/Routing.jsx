import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Header from '../components/header/header';
import EventSingle from '../scenes/EventSingle/EventsSingle';
import Contactpage from './Contacts/Contact_page'
import Blog from './Blog/blogPage';
import BlogSingle from './BlogSingle/BlogSingle';
import ProjectsMain from './Projects/ProjectsMain';
import Home from './Home/HomePage';
// import BlogSingle from './BlogSingle/BlogSingle';
// import Contact from '../pages/Contacts';
// import EventPage from '../pages/Event';
import ProjectSingle from './ProjectSingle/ProjectSingle';

class Routing extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Header />
                    <div>
                        <Route path="/" component={Home} exact />
                        {/* {/* <Route path="/Event" component={EventPage} /> */}
                        <Route path="/Events" component={EventSingle} />
                        <Route path="/Contact" component={Contactpage} />
                        <Route path="/Blog" component={Blog} />
                        <Route path="/BlogSingle" component={BlogSingle} />
                        <Route path="/Projects" component={ProjectsMain} />
                        <Route path="/ProjectSingle" component={ProjectSingle} />
                        {/* <Route path="/EventSingle" component={EventSingle} /> */}
                    </div>
            </div>
         );
    }
}
 
export default Routing;