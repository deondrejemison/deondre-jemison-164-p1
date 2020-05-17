import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardText, Button, CardMenu, IconButton } from 'react-mdl';
import mystery from '../images/mystery.jpg'; // gives image path

class Books extends Component {
    constructor(props) {
        super(props);
        this.state = {activeTab: 0}
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return(
                <div className="books-grid">
                    <h2>Come Enjoy One of Our Books</h2>
                    <ul>

                        <li>
                            <section className="card">
                            {/**Book 1 */}
                            <Card shadow={5} style={{minWidth: '800', margin: 'auto'}}>
                                <CardTitle style={{color: '#000', height: '176px', background:
                                
                                'url(https://static.wixstatic.com/media/c1688e_77fabdcf81644749b41b0bbab7298d8b~mv2.jpg/v1/crop/x_0,y_0,w_699,h_700/fill/w_172,h_172,al_c,q_80,usm_0.66_1.00_0.01/29573352_608197869528305_312858892090177.jpg)center / cover'}} >Tyla Loves Being Brown</CardTitle>

                                <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan convallis.
                                </CardText>
                                <CardActions border>
                                <Button colored><a href="https://www.amazon.com">Amazon</a></Button>
                                    <Button colored>Ebay</Button>
                                    <Button colored>Add To Cart</Button>
                                </CardActions>
                                <CardMenu style={{color: '#fff'}}>
                                    <IconButton name="share" />
                                </CardMenu>
                            </Card>
                        </section>
                        <section>
                            <p className="review">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </section>
                    </li>

                    <li>
                            <section className="card">
                            {/**Book 3 */}
                <Card shadow={5} style={{minWIdth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#000', height: '176px', background:
                    'url(https://static.wixstatic.com/media/c1688e_f3926e7f5cfe4eb8bf99f890144e21ef~mv2.jpg/v1/fill/w_191,h_191,al_c,q_80,usm_0.66_1.00_0.01/512t2sbcdOL__SX258_BO1%2C204%2C203%2C200_.jpg)center / cover'}} >Tyla And The Bully Ballerina</CardTitle>
                    <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan convallis.
                    </CardText>
                    <CardActions border>
                    <Button colored><a href="https://www.amazon.com">Amazon</a></Button>
                        <Button colored>Ebay</Button>
                        <Button colored>Add To Cart</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                </section>
                <section>
                    <p className="review">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </section>
                        </li>

                    </ul>
                    
                      </div>
                

                
            )
        } else if(this.state.activeTab === 1) {
            return (
                <div className="books-grid">
                    <h2>First Book</h2>
                    <ul>

                        <li>
                            <section className="card">
                            {/**Book 1 */}
                            <Card shadow={5} style={{minWidth: '800', margin: 'auto'}}>
                                <CardTitle style={{color: '#000', height: '176px', background:
                                
                                'url(https://static.wixstatic.com/media/c1688e_77fabdcf81644749b41b0bbab7298d8b~mv2.jpg/v1/crop/x_0,y_0,w_699,h_700/fill/w_172,h_172,al_c,q_80,usm_0.66_1.00_0.01/29573352_608197869528305_312858892090177.jpg)center / cover'}} >Tyla Loves Being Brown</CardTitle>

                                <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan convallis.
                                </CardText>
                                <CardActions border>
                                <Button colored><a href="https://www.amazon.com">Amazon</a></Button>
                                    <Button colored>Ebay</Button>
                                    <Button colored>Add To Cart</Button>
                                </CardActions>
                                <CardMenu style={{color: '#fff'}}>
                                    <IconButton name="share" />
                                </CardMenu>
                            </Card>
                        </section>
                        <section>
                            <p className="review">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </section>
                    </li>

                
                            
                        

                        
                    </ul>
                    
                      </div>
                
                
            )
        } else if(this.state.activeTab === 2) {
            return (
                <div className="books-grid">
                    <h2>Second Book</h2>
                    <ul>
                        <li>
                            <section className="card">
                            {/**Book 3 */}
                <Card shadow={5} style={{minWIdth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#000', height: '176px', background:
                    'url(https://static.wixstatic.com/media/c1688e_f3926e7f5cfe4eb8bf99f890144e21ef~mv2.jpg/v1/fill/w_191,h_191,al_c,q_80,usm_0.66_1.00_0.01/512t2sbcdOL__SX258_BO1%2C204%2C203%2C200_.jpg)center / cover'}} >Tyla And The Bully Ballerina</CardTitle>
                    <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan convallis.
                    </CardText>
                    <CardActions border>
                    <Button colored><a href="https://www.amazon.com">Amazon</a></Button>
                        <Button colored>Ebay</Button>
                        <Button colored>Add To Cart</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                </section>
                <section>
                    <p className="review">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </section>
                        </li>
                    </ul>
                </div>
            )
        } else if(this.state.activeTab === 3) {
            return (
                <div className="books-grid">
                    <h2>Mystery Third Book???</h2>
                    <ul>
                        <li>
                            <img src={mystery} alt="mystery" />
                            <p>Check back in the future for our soon-to-be-released third book.</p>
                        </li>
                        
                    </ul>
                    
                      </div>
            )
        }
    }

    

    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
                    <Tab>All Books</Tab>
                    <Tab>First Book</Tab>
                    <Tab>Second Book</Tab>
                    <Tab>Third Book</Tab>
                </Tabs>

                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
            </div>
        )
    }
}

export default Books;