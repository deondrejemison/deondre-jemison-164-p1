import React, { Component } from 'react';
import { Switch, Route, Link} from 'react-router-dom';

class News extends Component {
    render() {
        return(
            <div>
                <h1 className="page-title">Status Updates</h1>
                <section>
                    
                        <Link to="/events">Events</Link>
                    
                
                </section>
                
            </div>
        )
    }
}

export default News;