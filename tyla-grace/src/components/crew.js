import React, { Component } from 'react';
//import { Switch, Route, Link} from 'react-router-dom';

class Crew extends Component {
    render() {
        return(
            <div>
                <h1>Cast &amp; Crew</h1>
                <p>Behind every great person, is a team that helps them along the way. I have many amazing people in
                     my life, but there are a few that stand out the most.
                </p>
                <ul>
                    <li>
                        <h2>My Mother; Rubie Mizell</h2>
                        <p>The woman who gave me life; I wouldn't be anything without her.</p>
                    </li>
                    <li>
                        <h2>My Teachers</h2>
                        <p>The ones who inspired me to read and find my passion.</p>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Crew;