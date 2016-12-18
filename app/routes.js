// @flow
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './views/body';
import HomePage from './views/home/home';
import AdjectivesPage from './views/adjectives/adjectives';
import ItemsPage from './views/items/items';
import MonstersPage from './views/monsters/monsters';
import ReadmesPage from './views/readmes/readmes';
import TitlePage from './views/title/title';
import ConfigurePage from './views/configure/configure';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/adjectives" component={AdjectivesPage} />
    <Route path="/items" component={ItemsPage} />
    <Route path="/monsters" component={MonstersPage} />
    <Route path="/readmes" component={ReadmesPage} />
    <Route path="/title" component={TitlePage} />
    <Route path="/configure" component={ConfigurePage} />
  </Route>
);
