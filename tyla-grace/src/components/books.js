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
                    {/**Project 1 */}
                <Card shadow={5} style={{minWIdth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background:
                    'url(https://static.wixstatic.com/media/c1688e_0d38ac626c3d43b38966b7340f379c8a~mv2.jpg/v1/fill/w_195,h_184,al_c,q_80,usm_0.66_1.00_0.01,blur_2/c1688e_0d38ac626c3d43b38966b7340f379c8a~mv2.jpg)center / cover'}} > Javan Adventures</CardTitle>
                    <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan convallis.
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                {/**Project 2 */}
                <Card shadow={5} style={{minWIdth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background:
                    'url(https://static.wixstatic.com/media/c1688e_0d38ac626c3d43b38966b7340f379c8a~mv2.jpg/v1/fill/w_195,h_184,al_c,q_80,usm_0.66_1.00_0.01,blur_2/c1688e_0d38ac626c3d43b38966b7340f379c8a~mv2.jpg)center / cover'}} > Javan Adventures</CardTitle>
                    <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan convallis.
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                {/**Project 3 */}
                <Card shadow={5} style={{minWIdth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background:
                    'url(https://static.wixstatic.com/media/c1688e_0d38ac626c3d43b38966b7340f379c8a~mv2.jpg/v1/fill/w_195,h_184,al_c,q_80,usm_0.66_1.00_0.01,blur_2/c1688e_0d38ac626c3d43b38966b7340f379c8a~mv2.jpg)center / cover'}} > Javan Adventures</CardTitle>
                    <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan convallis.
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                </div>
                

                
            )
        } else if(this.state.activeTab === 1) {
            return (
                <div><h1>This is Angular</h1></div>
            )
        } else if(this.state.activeTab === 2) {
            return (
                <div><h1>This is VueJS</h1></div>
            )
        } else if(this.state.activeTab === 3) {
            return (
                <div><h1>This is MongoDB</h1></div>
            )
        }
    }

    

    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
                    <Tab>React</Tab>
                    <Tab>Angular</Tab>
                    <Tab>VueJS</Tab>
                    <Tab>MongoDB</Tab>
                </Tabs>

                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                    {this.toggleCategories()}
                <h1>New Books</h1>
            </div>
        )
    }
}

export default Books;