import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent, DialogActions, DialogContent, Dialog, DialogTitle, Button } from 'react-mdl';
import { useAlert } from 'react-alert'



class Contact extends Component {

    //Dialog code
    constructor(props) {
        super(props);
        this.state = {};
        this.handleOpenDialog = this.handleOpenDialog.bind(this);
        this.handleCloseDialog = this.handleCloseDialog.bind(this);
      }
    
      handleOpenDialog() {
        this.setState({
          openDialog: true
        });
      }
      
      handleCloseDialog() {
        this.setState({
          openDialog: false
        });
    }
      handleMessageSent() {
        this.setState({
          openDialog: false
        });
        alert("Message Sent!");
      }

    //sent message alert
    sent() {
        
        this.setState({
            openDialog: false
        });
      }

      

    //render method
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
                                    (123) 867-5309
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
                                    <Button colored onClick={this.handleOpenDialog} raised ripple>Send Message</Button>
                                        <Dialog open={this.state.openDialog}>
                                        <DialogTitle>Allow data collection?</DialogTitle>
                                        <DialogContent>
                                            <p>Allowing us to collect data will let us get you the information you want faster.</p>
                                        </DialogContent>
                                        <DialogActions>
                                            <Button type='button' onClick={this.handleCloseDialog}>Send Email</Button>
                                            <Button type='button' onClick={this.handleCloseDialog}>Go Back</Button>
                                        </DialogActions>
                                        </Dialog>
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