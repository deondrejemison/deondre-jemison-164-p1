import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Rubie Mizell</h2>
                        <img
                            src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                            alt="avatar"
                            style={{height: '250px'}}
                            
                        />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Founder and CEO of'Grace Publishing
                        Author and Co-Author of Tyla Grace Loves Being Brown. Mother of two beautiful children.</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className="content-list">
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                    <i className="fa fa-phone-square" aria-hidden="true"/>
                                    (414) 867-5309
                                    </ListItemContent>
                            </ListItem>
                            
                            <ListItem>
                                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                    <i className="fa fa-envelope" aria-hidden="true"/>
                                    someone@example.com
                                    </ListItemContent>
                            </ListItem>
                            
                        </List>
                        </div>
                        
                    </Cell>
                </Grid>
                
            </div>
        )
    }
}

export default Contact;