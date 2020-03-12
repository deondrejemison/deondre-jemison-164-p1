import React from 'react';
import './App.css';
import { Layout, Drawer, Header, Content, Navigation } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom'

function App() {
  return (
    /* Uses a header that scrolls with the text, rather than staying locked at the top */
      <div className="demo-big-content">
          <Layout>
              <Header className="header-color" title="Tyla Grace" scroll>
                  <Navigation>
                      <Link to="/home">Home</Link>
                      <Link to="/books">Books</Link>
                      <Link to="/events">Events</Link>
                      <Link to="/contact">Contact</Link>
                  </Navigation>
              </Header>
              <Drawer title="Tyla Grace">
                  <Navigation>
                      <Link to="/home">Home</Link>
                      <Link to="/books">Books</Link>
                      <Link to="/events">Events</Link>
                      <Link to="/contact">Contact</Link>
                  </Navigation>
              </Drawer>
              <Content>
              <Main>
                  <div className="page-content" />
                  </Main>
              </Content>
          </Layout>
      </div>
  );
}

export default App;
