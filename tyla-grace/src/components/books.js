import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardText, Button, CardMenu, IconButton } from 'react-mdl';

class Books extends Component {
    constructor(props) {
        super(props);
        this.state = {activeTab: 0}
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return(
                <div className="books-grid">
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
                                    <Button colored>Amazon</Button>
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
                            {/**Book 2 */}
                <Card shadow={5} style={{minWIdth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#000', height: '176px', background:
                    'url(https://static.wixstatic.com/media/c1688e_0d38ac626c3d43b38966b7340f379c8a~mv2.jpg/v1/fill/w_195,h_184,al_c,q_80,usm_0.66_1.00_0.01/c1688e_0d38ac626c3d43b38966b7340f379c8a~mv2.jpg)center / cover'}} > Javan Adventures</CardTitle>
                    <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan convallis.
                    </CardText>
                    <CardActions border>
                        <Button colored>Amazon</Button>
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
                        <Button colored>Amazon</Button>
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
                            {/**Book 4 */}
                <Card shadow={5} style={{minWIdth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#000', height: '176px', background:
                    'url(https://static.wixstatic.com/media/c1688e_80122619c99b4f8bb1adaf27e301bd32~mv2.jpg/v1/fill/w_146,h_190,al_c,q_80,usm_0.66_1.00_0.01/IMG_9052.jpg)center / cover'}} >Ricky Overcomes Fear</CardTitle>
                    <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan convallis.
                    </CardText>
                    <CardActions border>
                        <Button colored>Amazon</Button>
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
                            {/**Book 5 */}
                <Card shadow={5} style={{minWIdth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#000', height: '176px', background:
                    'url(https://static.wixstatic.com/media/c1688e_b828c1eeafce477ca68766c0af63549b~mv2.jpg/v1/crop/x_0,y_12,w_616,h_616/fill/w_171,h_171,al_c,q_80,usm_0.66_1.00_0.01/IMG_9053.jpg)center / cover'}} >Lizzy Bee The Busy Bee: "It's Okay To Tell"</CardTitle>
                    
                    <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan convallis.
                    </CardText>
                    <CardActions border>
                        <Button colored>Amazon</Button>
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
                            {/**Book 6 */}
                            <Card shadow={5} style={{minWIdth: '450', margin: 'auto'}}>
                                <CardTitle style={{color: '#000', height: '176px', background:
                                'url(https://static.wixstatic.com/media/c1688e_c72fdbdfa1d84f888763e637b409c717~mv2.jpg/v1/fill/w_168,h_169,al_c,q_80,usm_0.66_1.00_0.01/IMG_9054.jpg)center / cover'}} >Lizzy Bee The Busy Bee: "I'm Not For Sale"</CardTitle>
                                <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan convallis.
                                </CardText>
                                <CardActions border>
                                    <Button colored>Amazon</Button>
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
                    <h2>Popular Reads</h2>
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
                                    <Button colored>Amazon</Button>
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
                            {/**Book 2 */}
                <Card shadow={5} style={{minWIdth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#000', height: '176px', background:
                    'url(https://static.wixstatic.com/media/c1688e_0d38ac626c3d43b38966b7340f379c8a~mv2.jpg/v1/fill/w_195,h_184,al_c,q_80,usm_0.66_1.00_0.01/c1688e_0d38ac626c3d43b38966b7340f379c8a~mv2.jpg)center / cover'}} > Javan Adventures</CardTitle>
                    <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan convallis.
                    </CardText>
                    <CardActions border>
                        <Button colored>Amazon</Button>
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
                        <Button colored>Amazon</Button>
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
                    <h2>Personal Favorites</h2>
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
                        <Button colored>Amazon</Button>
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
                            {/**Book 4 */}
                <Card shadow={5} style={{minWIdth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#000', height: '176px', background:
                    'url(https://static.wixstatic.com/media/c1688e_80122619c99b4f8bb1adaf27e301bd32~mv2.jpg/v1/fill/w_146,h_190,al_c,q_80,usm_0.66_1.00_0.01/IMG_9052.jpg)center / cover'}} >Ricky Overcomes Fear</CardTitle>
                    <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan convallis.
                    </CardText>
                    <CardActions border>
                        <Button colored>Amazon</Button>
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
                    <h2>Choose Your Favorite</h2>
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
                                    <Button colored>Amazon</Button>
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
                            {/**Book 2 */}
                <Card shadow={5} style={{minWIdth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#000', height: '176px', background:
                    'url(https://static.wixstatic.com/media/c1688e_0d38ac626c3d43b38966b7340f379c8a~mv2.jpg/v1/fill/w_195,h_184,al_c,q_80,usm_0.66_1.00_0.01/c1688e_0d38ac626c3d43b38966b7340f379c8a~mv2.jpg)center / cover'}} > Javan Adventures</CardTitle>
                    <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan convallis.
                    </CardText>
                    <CardActions border>
                        <Button colored>Amazon</Button>
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
                        <Button colored>Amazon</Button>
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
                            {/**Book 4 */}
                <Card shadow={5} style={{minWIdth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#000', height: '176px', background:
                    'url(https://static.wixstatic.com/media/c1688e_80122619c99b4f8bb1adaf27e301bd32~mv2.jpg/v1/fill/w_146,h_190,al_c,q_80,usm_0.66_1.00_0.01/IMG_9052.jpg)center / cover'}} >Ricky Overcomes Fear</CardTitle>
                    <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan convallis.
                    </CardText>
                    <CardActions border>
                        <Button colored>Amazon</Button>
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
                            {/**Book 5 */}
                <Card shadow={5} style={{minWIdth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#000', height: '176px', background:
                    'url(https://static.wixstatic.com/media/c1688e_b828c1eeafce477ca68766c0af63549b~mv2.jpg/v1/crop/x_0,y_12,w_616,h_616/fill/w_171,h_171,al_c,q_80,usm_0.66_1.00_0.01/IMG_9053.jpg)center / cover'}} >Lizzy Bee The Busy Bee: "It's Okay To Tell"</CardTitle>
                    
                    <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan convallis.
                    </CardText>
                    <CardActions border>
                        <Button colored>Amazon</Button>
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
                            {/**Book 6 */}
                            <Card shadow={5} style={{minWIdth: '450', margin: 'auto'}}>
                                <CardTitle style={{color: '#000', height: '176px', background:
                                'url(https://static.wixstatic.com/media/c1688e_c72fdbdfa1d84f888763e637b409c717~mv2.jpg/v1/fill/w_168,h_169,al_c,q_80,usm_0.66_1.00_0.01/IMG_9054.jpg)center / cover'}} >Lizzy Bee The Busy Bee: "I'm Not For Sale"</CardTitle>
                                <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan convallis.
                                </CardText>
                                <CardActions border>
                                    <Button colored>Amazon</Button>
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
        }
    }

    

    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
                    <Tab>New Books</Tab>
                    <Tab>Best Selling</Tab>
                    <Tab>Author's Picks</Tab>
                    <Tab>All Books</Tab>
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