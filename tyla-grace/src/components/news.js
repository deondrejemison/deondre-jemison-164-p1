import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import nature from '../images/nature-background.jpg'


class News extends Component {
    render() {
        return(
            <div className="news-container"  >
                <h1 className="news-title">Status Updates</h1>
                <article className="news-article">
                    
                    <Link to="/events"><img src="http://www.mylittledoc.com/uploads/1/0/7/7/10772424/5544462.jpg?479"
                    alt="pancakes" width="200" height="200"/>
                    </Link>
                        <Link to="/events"><h3>Books On Hold Amid COVID-19 Outbreak</h3></Link>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                              when an unknown printer took a galley of type and scrambled it to make a
                               type specimen book. It has survived not only five centuries, but also
                                the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                </article>

                <article className="news-article">
                    
                    <Link to="/events"><img src="https://s.abcnews.com/images/Business/gty_07_heidi_klum_kids_clothing_nt_131007_ssh.jpg"
                    alt="pancakes" width="200" height="200"/>
                    </Link>
                        <Link to="/events"><h3>Celebrate With Us For The Launch of Our Fashion Line</h3></Link>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                              when an unknown printer took a galley of type and scrambled it to make a
                               type specimen book. It has survived not only five centuries, but also
                                the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                </article>

                <article className="news-article">
                    
                    <Link to="/events"><img src="https://images.all-free-download.com/images/graphicthumb/books_311384.jpg"
                    alt="pancakes" width="200" height="200"/>
                    </Link>
                        <Link to="/events"><h3>Third Tyla'Grace Book Will Be Released</h3></Link>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a
                                type specimen book. It has survived not only five centuries, but also
                                    the leap into electronic typesetting, remaining essentially unchanged.
                            </p>
                </article>

                <article className="news-article">
                    
                        <Link to="/events"><img src="https://www.okbu.edu/news/2016/11/images/jillian-murphy-book-signing.jpg"
                        alt="pancakes" width="200" height="200"/>
                        </Link>
                        <Link to="/events"><h3>Meet Face-to-Face with Authors and Publishers</h3></Link>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                              when an unknown printer took a galley of type and scrambled it to make a
                               type specimen book. It has survived not only five centuries, but also
                                the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                </article>

                <article className="news-article">
                    
                        <Link to="/events"><img src="https://inspirelle.com/wp-content/uploads/2016/06/Boy-thinking.jpg"
                        alt="pancakes" width="200" height="200"/>
                        </Link>
                        <Link to="/events"><h3>Delve Into My Mind With Tyla's Blog</h3></Link>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                              when an unknown printer took a galley of type and scrambled it to make a
                               type specimen book. It has survived not only five centuries, but also
                                the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                </article>

                <article className="news-article">
                    
                        <Link to="/events"><img src="http://st1.thehealthsite.com/wp-content/uploads/2017/05/shutterstock_613579745-1-655x353.jpg"
                        alt="pancakes" width="200" height="200"/>
                        </Link>
                        <Link to="/events"><h3>TylaGrace World of Slime And Fun Opening</h3></Link>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                              when an unknown printer took a galley of type and scrambled it to make a
                               type specimen book. It has survived not only five centuries, but also
                                the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                </article>
            </div>
        )
    }
}

export default News;