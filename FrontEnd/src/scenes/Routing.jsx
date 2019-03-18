
import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Header from '../components/header/header';
import EventSingle from '../scenes/EventSingle/EventsSingle';
import Contactpage from './Contacts/Contact_page'
import Blog from './Blog/blogPage';
import BlogSingle from './BlogSingle/BlogSingle';
import ProjectsMain from './Projects/ProjectsMain';
import EventMain from "./Events/EventsMain";
import AboutUs from "./About_us/AboutUs";

// import BlogSingle from './BlogSingle/BlogSingle';
// import Contact from '../pages/Contacts';
// import EventPage from '../pages/Event';

class Routing extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Header />
                    <div>
                        <Route path="/" component={EventSingle} exact />
                        {/* {/* <Route path="/Event" component={EventPage} /> */}
                        <Route path="/Events" component={EventSingle} />
                        <Route path="/Contact" component={Contactpage} />
                        <Route path="/Blog" component={Blog} />
                        <Route path="/BlogSingle" component={BlogSingle} />
                        <Route path="/Projects" component={ProjectsMain} />
                        <Route path="/AboutUs" component={AboutUs} />
                        <Route path="/EventsMain" component={EventMain} />
                        {/* <Route path="/EventSingle" component={EventSingle} /> */}
                    </div>
            </div>
         );
    }
>>>>>>> upstream/master
}

export default Routing;
