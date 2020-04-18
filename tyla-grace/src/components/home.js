import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Home extends Component {
    render() {
        return(
            <div className="home-container" /*style={{width: '100', margin: 'auto'}}*/>
                <body>
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
                                <i class="fa fa-facebook-square" className="facebook"></i>
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
                <h1 className="site-title">Welcome to Tyla'Grace.com</h1>
                <p className="start">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                     when an unknown printer took a galley of type and scrambled it to make a type 
                     specimen book. It has survived not only five centuries, but also the leap into 
                     electronic typesetting, remaining essentially unchanged. It was popularised in 
                     the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                     and more recently with desktop publishing software like Aldus PageMaker including 
                     versions of Lorem Ipsum.</p>
                </body>
                
            </div>
        )    
    }
}

export default Home;