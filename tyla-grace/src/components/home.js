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

                                {/**FaceBook */}
                                <a href="http://facebook.com" rel="noopener noreferrer" target="_blank">
                                <i class="fa fa-facebook-square" aria-hidden="true"></i>
                                </a>

                                {/**InstaGram */}
                                <a href="http://instagram.com" rel="noopener noreferrer" target="_blank">
                                <i class="fa fa-instagram" aria-hidden="true"></i>
                                </a>

                                {/**Google */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i class="fa fa-google" aria-hidden="true"></i>
                                </a>

                                {/**YouTube */}
                                <a href="http://youtube.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-youtube-square" aria-hidden="true" />
                                </a>

                                {/**Twitter */}
                                <a href="http://twitter.com" rel="noopener noreferrer" target="_blank">
                                <i class="fa fa-twitter-square" aria-hidden="true"></i>
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