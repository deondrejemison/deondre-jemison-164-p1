import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Home extends Component {
    render() {
        return(
            <div style={{width: '100', margin: 'auto'}}>
                <Grid className="home-grid">
                    <Cell col={12}>
                        <img
                        src="https://www.bing.com/th?id=OIP.A2cHovPiNnpLgeYWdEI7ggHaHa&pid=Api&rs=1"
                        alt="tylagrace"
                        className="tyla-img"
                        />

                        <div className="banner-text">
                            <h1>Tyla Grace Publishing</h1>

                            <hr/>

                            <p>Author | Entrepeneur | Baker | Actress</p>

                            <div className="social-links">

                                {/**Linkedin */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                                {/**GitHub */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                                {/**FreecodeCamp */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                                {/**YouTube */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                                {/**Instagram */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                            </div>
                        </div>
                    </Cell>
                </Grid>
                <h1>New Books</h1>
            </div>
        )    
    }
}

export default Home;