import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import { profile } from '../images/profile.jpg';
//import { baby } from '../images/baby.jpg';
//import { second } from '../images/second.jpg';
//import { profile } from '../images/profile.jpg';
//import { profile } from '../images/profile.jpg';

class Home extends Component {
    render() {
        return(
            <div className="home-container" >
                <body className="home-body">
                <Grid className="home-grid">
                    <Cell col={12}>
                        <img
                        src="https://www.bing.com/th?id=OIP.A2cHovPiNnpLgeYWdEI7ggHaHa&pid=Api&rs=1"
                        alt="tylagrace"
                        className="tyla-img"
                        />

                        <div className="banner-text">
                            <h1>TylaGrace.com</h1>

                            <hr/>

                            <p>Author | Entrepeneur | Actress | Model</p>

                            <div className="social-links">

                                {/**FaceBook */}
                                <a href="http://facebook.com" rel="noopener noreferrer" target="_blank">
                                <i class="fa fa-facebook-square" aria-hidden="true" ></i>
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
                    <div className="profile">
                        <img src={profile} alt="profile pic" style={{height: '800px', width: '800px'}} />
                        <section className="home-sec">
                    <h1 className="site-title">Meet TylaGrace EdgeComb</h1>
                    <article className="catch">
                        <p className="start">I am a young entrepeneur with a penchant for reading. I love to draw, explore, create, play, and study. I like to encourage my friends to be creative and discover
                         their interests. My hobbies include reading, drwaing, and playing with my best friends.
                        </p>
                    </article>

                </section>
                    </div>
                    
                </Grid>
                
                <article className="public-article">
                    
                    <Link to="/mission"><img className="mission" src="https://lh3.googleusercontent.com/-MHtJTZ557b7sknhY_80TseLbB3C59xN87FQnmzpVs6wmURv3ntdx7dWqu_KnsRS4TWjM2XKBnBReIF37sERoIRkLfcMQMz9qH4rsdVj3Tms9u0K1IAL1SoaCa78yOBCHFFs7KZGlAJ92dWo9Lxi2fRwyg2b_KsPMuuGqJ1n_2F61uOyAGIiwwQbk0Y9lFWG69_GD5hfMBuHu_6nwwYufJ77sjd1Nh6hzbBCsf1r3257eGaNhl54NXaI91-PhIJ7Zu-bhP1xl98NN2m3mKHEXTdu7scmYKcBZ48e07fsiWGbpCarfKtG2rNcdOZOlFSdkhgd5Njfu47k4kEvtL1bnAK5-mHgjVDQwzzAIHJw8yDSVhD8vgZft4Clv998Nhfi3JwuGf-5UNiJkGNblApacbXiuT5tSGmrVZZ-U8fBAqSvBdCDWp3y72Xta8LgPUAp3jwtUskxuTO6etQnE_h0t-QVZjRVpH2rndXJdGPnAM6AZq4z-er99R6q8e3_PXmf31DR3_7J_ZYpjxkpqFH1yeaxHy6xelYYLMA3LNHU5TjBlznijJRDSKNOeGVLwU7i1YSfdPhC7cKiD9cBjOiYwKzvOFtwuvQIWCRWeyubQ-oKEIh_ocKvvQykXnRCqpSdR5Upop2i-6tn0oncmQhKRJrfE5aFLfmAd7yTWbCawYCMst4D6_r1Kx0aUGjD=w450-h300-no?authuser=0"
                    alt="classrom" width="200" height="200"/>
                    </Link>
                        <Link to="/mission"><h3>Learn About Our Mission To Promote Reading </h3></Link>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                              when an unknown printer took a galley of type and scrambled it to make a
                               type specimen book. It has survived not only five centuries, but also
                                the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                </article>
                <article className="personal-article">
                    
                    <Link to="/story">
                        <img className="story" src="https://lh3.googleusercontent.com/vME40Gx_x6iDUT1_A0fVKaLDm6MbUxdcZ0xk_KwtozyFCTLoMLKfmeGm9uwb6Gn-fQQdXZiHbdHnYilqhHnl1Zv14idchn0NCa4pByBktKLkGQW5BXkCnFb92bPdm90BvqfZX7MVAtCfOBPRNsNEi-qUdkWdfbXMjF5B9dPOHXCr_eNc-R2bnM6atJTzjrwUDMBVZ8Gd_6FqbkZtetmJPIvw14UyD-arg6DZDSAp19SQBYY28o_idAapVVYU0YaNtDybJv2fJmWJRa9iAPqNN0HlVEG7S0fgKapfPKlPxtQML05y51O7DyuiUoo_6dNQQExuAbEA1oJosF4c6K3S-BbE5tWPTKdEHUJS7l8hOmF7c1A73TDZ1SyV4tB6v5uQ00TgCdUWXAxnspt3jp4s_IdY7nORlbCwXF3_s8I3lsGbNQPUoNqbI_dcKV0xylg7Nw4SlcV4Nm7OgY1NLaIZljTLHXw2LyDu9RbalmI23QvI548I4jvmdI5fROwYwpZs2uSyatQoG5dwJPvLX40Qu8TR0RsYolNhnqtr6SFunYm6iV066e_DAQBzvIEPbA0kmCVBqAZiptDcYVCK6zCtpgCpSJGvNH3jYd643SRsCbEtX8lDmXmYAvqm2GGk9KxjdzqVpUCHskaZwmQLr53FwnT5uEnXGXMuD8ePxyFkCRHSw3RCOM_W8vqidvSl=w632-h625-no?authuser=0"
                    alt="baby" width="200" height="200"/>
                    </Link>
                        <Link to="/story"><h3>Read My Story and Why I Love to Read</h3></Link>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                              when an unknown printer took a galley of type and scrambled it to make a
                               type specimen book. It has survived not only five centuries, but also
                                the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                </article>
                <article className="public-article">
                    
                    <Link to="/book">
                        <img className="book" src="https://lh3.googleusercontent.com/IKdD1sldk-NH5Tn7mryOl7a41_SWYrywTDdolArIsuPcYtyUbVTf40e4qo4N5w02N9IQioDUukXVIKHmfEaqQjUDwh-fEUIZd0niF46FrlFdo09kRdzAp-C_XmcilQBT3yJIBsVCT83Qtft3EBR03VdyMpnLb62VX39uvdobPtuRiohsrT4s75S0gJ4PO3JmJ7Lj-lnWxqstW-_ANhC8E_qp56prDfFP9r-WD4GR598SuqWX8rVPJvwfduP_fzMfmmhLSI2jRkg4RkDoZCge6bEDHiAKpO0yYZ12QnHSYMM0HLCp_QA42FbVeriZ-h9VS3uDIhRVOYelpywU1oMTHQa_-kxTf0LGZj6Oxuo_JOcMKhZvHy98lv3zfrbkmZvlu27BPEh74ICZJoWCknYX17puOxDwYWNdDxY2vocPSJQ05cTnvXArfSfjMMJLjfAhR1pMMdGWLkS8DrKrb0rMA61nsqyPwIuNB0Z3KblH72IylR2O29Iyca--hJVF1hIWfW7qT5liAgxjOA7JvfmQLmaSBcExj76kLXwExx26o6L_5s-3UMYr-wSSUUBiqIhQSsL4gPwVMe4GzhAFYXQBR3ZomQtKYpFVmQSM2qluqn9X-dAGbPkX-ey0BhVnc1joNhGWYvZDLn61Vy5Ub6qCn9S8hvmH2b9gpGVaphfyJvzJQv7pmLr8xQqYs5Sh=w469-h625-no?authuser=0"
                    alt="book" width="200" height="200"/>
                    </Link>
                        <Link to="/book"><h3>Crack Open My Second Book "Tyla and the Bully Ballerina"</h3></Link>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                              when an unknown printer took a galley of type and scrambled it to make a
                               type specimen book. It has survived not only five centuries, but also
                                the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                </article>
                <article className="personal-article">
                    
                    <Link to="/crew"><img src="https://lh3.googleusercontent.com/DKrr4bhukm-B0IUhGrnsL_VD9g2OLQioNdhG8j1s1toLU24LHGoS1rEsTVU0zuPb_plIRXDJ4dS-B1XBITh4w_FcYkLSYDinf5l-vv5GJasjxH_nitg1aRaXA7cg7z-6XFA6NnoqpJnBkDnDCpLXlilo-juznllU0rVST4TYyY_1BBZiZSiArwWkTK-ssxpJjd-kppgiMRU4Z9ieXd2FchXzNx63R2LEDQvurX__TLwKq0C7eFHJh3Rshigwyv-Cz8wHOJIeELeHN1rl4RpeSYgjPvlJ2iRq5f8cphNko0FM_t4Hmq92ngriIq9Ovrq0CF4FX9IO8sSYwQGB3Ldzdvk882aMXtxVYNB6KZkNEwzF3WDU2OC_NAu7ur0_6_M3SJ-vEigENmqJ4-LuDlkLHZCaB4K76duT2xd1EK2eicb_r5CFUGAZG_NIt3P0zGZa4CFjLGqRS2zJzqS4Xb_ZDDfCZHTY8t7K102sjktOXqVfEjOF6exPehOvSakpJu2MXUo8sAq7HIHohGGJUoB1N22T52rjb8fxv6siQIbrq_tS9m_B4bxxj02gUkP72nOfLN-q9d-LxfQ-c5bdHxklMlRU0CzDOUv0w-DBiqMVdTiUK4mc1hab2vejeqqdhVvpS9EOwZHJzm5wdFFB3QTcXHpYbBMdylNon1J6gw6YGV58HX3VADAMvmDsqp8O=w469-h625-no?authuser=0"
                    alt="mother" width="200" height="200"/>
                    </Link>
                        <Link to="/crew"><h3>Meet The People That Helped Me Become Great</h3></Link>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                              when an unknown printer took a galley of type and scrambled it to make a
                               type specimen book. It has survived not only five centuries, but also
                                the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                </article>
                
                
                <section>
                <Card shadow={0} style={{width: '812px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', backgroundImage: 'url(./images/profile.jpg) center / cover'}}>Welcome</CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris sagittis pellentesque lacus eleifend lacinia...
                    </CardText>
                    <CardActions border>
                        <Button colored>Get Started</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                </section>
                </body>
            </div>
        )    
    }
}

export default Home;