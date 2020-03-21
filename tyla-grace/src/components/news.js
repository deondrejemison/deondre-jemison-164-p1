import React, { Component } from 'react';
import { Switch, Route, Link} from 'react-router-dom';

class News extends Component {
    render() {
        return(
            <div>
                <h1 className="page-title">Status Updates</h1>
                <section className="article">
                    
                        <Link to="/events"><img src="https://www.bing.com/th?id=AMMS_0c4328f0edd81bec816993ff0f92429c&w=200&h=160&c=7&rs=1&qlt=80&cdv=1&pid=16.1"
                        alt="pancakes" width="400" height="400"/>
                        </Link>
                        <Link to="/events"><h3>New Pancake Line Coming Soon...</h3></Link>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                              when an unknown printer took a galley of type and scrambled it to make a
                               type specimen book. It has survived not only five centuries, but also
                                the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                </section>
            </div>
        )
    }
}

export default News;