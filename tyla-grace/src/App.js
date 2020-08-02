import React from 'react';
import './App.css';
import { Layout, Drawer, Header, Content, Navigation, HeaderRow, Textfield, Footer, FooterLinkList, FooterSection } from 'react-mdl';
import Main from './components/main'; 
import { Link } from 'react-router-dom';
//import { useAlert } from 'react-alert'
//import search from '..//src/images/search.png';


function App() {
  return (
        /* Uses a header that contracts as the page scrolls down. */
        <div className="demo-big-content">
            <Layout>
                <Header className="header-color" title="Tyla Grace" waterfall>
                    {/* NavBartitle */}
                    <HeaderRow className="nav-title" title="TylaGrace.com">
                    <Textfield
                            value=""
                            onChange={() => {}}
                            label="Search2"
                            expandable
                            expandableIcon="" //{search}
                            class="fa fa-search"
                            
                            
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
                        <Link to="/books">Order Books</Link>
                        <a href="https://shopwithtylagrace.square.site/" target="_blank" rel="noreferrer noopener">Check Our Swag</a>
                        <Link to="/news">My Blog</Link>
                        <Link to="/search">Search</Link>
                    </Navigation>
                </Drawer>
                <Content>
                    <Main>
                  <div className="page-content" />
                  </Main>
                    <Footer size="mini">
                        <FooterSection type="left" logo="Tyla Grace">
                            <FooterLinkList>
                                <Link to="/faq">Help</Link>
                                <Link to="/eula">Privacy & Terms</Link>
                                <Link to="/contactForm">Contact Us</Link>
                            </FooterLinkList>
                        </FooterSection>
                    </Footer>
                </Content>
            </Layout>
        </div>
  );
}

export default App;
