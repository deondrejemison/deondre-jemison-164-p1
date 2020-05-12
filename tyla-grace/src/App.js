import React from 'react';
import './App.css';
import { Layout, Drawer, Header, Content, Navigation, HeaderRow, Textfield, Footer, FooterLinkList, FooterSection } from 'react-mdl';
import Main from './components/main'; 
import { Link } from 'react-router-dom';
import search from '..//src/images/search.png';


function App() {
  return (
        /* Uses a header that contracts as the page scrolls down. */
        <div className="demo-big-content">
            <Layout>
                <Header className="header-color" title="Tyla Grace" waterfall>
                    <HeaderRow className="nav-title" title="Tyla Grace">
                    <Textfield
                            value=""
                            onChange={() => {}}
                            label="Search2"
                            expandable
                            expandableIcon="T" //{search}
                            class="searchField"
                            // expandableIcon="fa fa-search"
                            
                        />
                    </HeaderRow>
                    <HeaderRow>
                        <Navigation>
                            <Link to="/home">Home</Link>
                            <Link to="/books">Books</Link>
                            <Link to="/news">News</Link>
                            <Link to="/events">Events</Link>
                            <Link to="/contact">Contact</Link>
                        </Navigation>
                    </HeaderRow>
                </Header>
                <Drawer className="title-color" title="Menu">
                    <Navigation className="">
                        <Link to="/home">Home</Link>
                        <a href="https://www.yelp.com/biz/tylagrace-world-of-slime-and-fun-milwaukee" target="_blank">Order Books</a>
                        <a href="https://shopwithtylagrace.square.site/" target="_blank">Check Our Swag</a>
                        <Link to="/events">Blog</Link>
                        <Link to="/news">Search</Link>
                    </Navigation>
                </Drawer>
                <Content>
                    <Main>
                  <div className="page-content" />
                  </Main>
                    <Footer size="mini">
                        <FooterSection type="left" logo="Tyla Grace">
                            <FooterLinkList>
                                <a href="#">Help</a>
                                <a href="#">Privacy & Terms</a>
                            </FooterLinkList>
                        </FooterSection>
                    </Footer>
                </Content>
            </Layout>
        </div>
  );
}

export default App;
