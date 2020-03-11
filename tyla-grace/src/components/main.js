import React from 'react';
import { Switch, Route} from 'react-router-dom';

import home from './home';
import events from './events';
import contact from './contact';
import books from './books';

const Main = () => (
    <Switch>
        <Route exact path="/" component={home} />
        <Route path="/contact" component={contact} />
        <Route path="/books" component={books} />
        <Route path="/events" component={events} />
    </Switch>
)

export default Main;