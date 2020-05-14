import React from 'react';
import { Switch, Route} from 'react-router-dom';

import home from './home';
import events from './events';
import contact from './contact';
import books from './books';
import news from './news';
import contactForm from './contactForm';
import search from './search';
import faq from './faq';

const Main = () => (
    <Switch>
        <Route exact path="/" component={home} />
        <Route exact path="/home" component={home} />
        <Route path="/contact" component={contact} />
        <Route path="/books" component={books} />
        <Route path="/events" component={events} />
        <Route path="/news" component={news} />
        <Route path="/contactForm" component={contactForm} />
        <Route path="/search" component={search} />
        <Route path="/faq" component={faq} />
    </Switch>
)

export default Main;