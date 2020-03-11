import React from 'react';
import './App.css';
import { Layout, Drawer, Header, Content, Navigation }from 'react-mdl';

function App() {
  return (
    /* Uses a header that scrolls with the text, rather than staying locked at the top */
      <div className="demo-big-content">
          <Layout>
              <Header title="Tyla Grace" scroll>
                  <Navigation>
                      <a href="/books.html">Books</a>
                      <a href="/events.html">Events</a>
                      <a href="/home.html">Home</a>
                      <a href="/contact.html">Contact</a>
                  </Navigation>
              </Header>
              <Drawer title="Tyla Grace">
                  <Navigation>
                      <a href="#">Link</a>
                      <a href="#">Link</a>
                      <a href="#">Link</a>
                      <a href="#">Link</a>
                  </Navigation>
              </Drawer>
              <Content>
                  <div className="page-content" />
              </Content>
          </Layout>
      </div>
  );
}

export default App;
