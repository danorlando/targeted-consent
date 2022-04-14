import * as React from 'react';
import {Route, Routes} from 'react-router-dom';
import {Home} from './Home';
import {Discover} from './Discover';

const Routes = () => (
  <Routes>
    <Route exact path="/home" component={Home} />
    <Route exact path="/discover" component={Discover} />
    <Route exact path="/" component={() => <Redirect to="/home" />} />
  </Routes>
);

export default Routes;
