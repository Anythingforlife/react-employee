import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import Notfound from './shared/not-found';
const LoginComponent = lazy(() => import('./anoymous/login'));
const RegisterComponent = lazy(() => import('./anoymous/register'));
const HomeComponent = lazy(() => import('./authenticated/home'));


export default function App() {
  return (
    <div className="app">
      <ToastContainer />
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Switch>
            <Route exact path="/" component={HomeComponent} />
            <Route path="/login" component={LoginComponent} />
            <Route path="/register" component={RegisterComponent} />
            <Route component={Notfound} />
          </Switch>
        </Router>
      </Suspense>
    </div>
  )
};