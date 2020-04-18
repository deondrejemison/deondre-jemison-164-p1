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
                    <HeaderRow className="nav-title" title="Tyla'Grace">
                    <i class="fa fa-search"><Textfield
                            value=""
                            onChange={() => {}}
                            label="Search2"
                            expandable
                            expandableIcon="fa fa-search"
                            
                        /></i>
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
                <Drawer className="title-color" title="Welcome">
                    <Navigation className="">
                        <Link to="/home">Visit Us!</Link>
                        <Link to="/books">Check Our Clothing Line</Link>
                        <Link to="/events">Twitter</Link>
                        <Link to="/news">Search</Link>
                    </Navigation>
                </Drawer>
                <Content>
                    <Main>
                  <div className="page-content" />
                  </Main>
                  <Footer size="mini">
    <FooterSection type="left" logo="Tyla'Grace">
        <FooterLinkList>
            <a href="#">Help</a>
            <a href="#">Privacy & Terms</a>
        </FooterLinkList>
    </FooterSection>
</Footer>
                </Content>
            </Layout>
        </div>
        // **************************************************************************************************************
    /*  Uses a header that scrolls with the text, rather than staying locked at the top 
      <div className="demo-big-content">
          <Layout>
              <Header className="header-color" title="Tyla Grace" scroll>
                  <Navigation>
                      <Link to="/home">Home</Link>
                      <Link to="/books">Books</Link>
                      <Link to="/news">News</Link>
                      <Link to="/events">Events</Link>
                      <Link to="/contact">Contact</Link>
                      
                  </Navigation>
              </Header>
              <Drawer className="title-color" title="Tyla Grace">
                  <Navigation>
                      <Link to="/home">Visit Us!</Link>
                      <Link to="/books">Check Our Clothing Line</Link>
                      <Link to="/events">Twitter</Link>
                      <Link to="/news">Search</Link>
                  </Navigation>
              </Drawer>
              <Content>
              <Main>
                  <div className="page-content" />
                  </Main>
              </Content>
          </Layout>
      </div> */
  );
}

export default App;
