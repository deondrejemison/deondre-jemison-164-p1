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
                            src="https://1.bp.blogspot.com/-vH_QuE2cdy8/Uh6vrniFOHI/AAAAAAAADpo/UsFv1J1YjV0/s1600/Second_Life_female_Avatar_black_hair.jpg"
                            alt="avatar"
                            style={{height: '250px'}}
                            
                        />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Founder and CEO of Tyla'Grace Publishing
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

                            <ListItem>
                                <ListItemContent className="button">
                                    <button onclick="activateLasers()">
                                        Send A Message
                                    </button>
                                </ListItemContent>
                            </ListItem>
                                {/* <ListItem>
                                <form>
                                    <label for="fname">First name:</label><br>
                                    <input type="text" id="fname" name="fname" value="John"><br>
                                    <label for="lname">Last name:</label><br>
                                    <input type="text" id="lname" name="lname" value="Doe"><br><br>
                                    <input type="submit" value="Submit">
                                </form>
                            </ListItem> */}
                            
                            
                        </List>
                        </div>
                        
                    </Cell>
                </Grid>
                
            </div>
        )
    }
}

export default Contact;