import React from 'react';
import './assets/styles/style.css';
import Header from './components/header/Header';
import Home from './pages/Home';

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from "./redux/reducers";
import thunk from 'redux-thunk';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const Layout = props => (
  <>
      <Header/>
      <div className="container mt-5">
          {props.children}
      </div>
  </>
)

const store = createStore(reducers, applyMiddleware(thunk));

const routes = [
  {
      path: '/',
      exact: true,
      main: () => <Layout>
          <Home/>
      </Layout>
  },
  // {
  //     path: '/favorite',
  //     exact: false,
  //     main: () => <Layout>
  //         <Favorite/>
  //     </Layout>
  // },
  // {
  //     path: '/gallery',
  //     exact: false,
  //     main: () => <Layout>
  //         <Movies/>
  //     </Layout>
  // },
  // {
  //     path: '/popularmovies',
  //     exact: true,
  //     main: () => <Layout>
  //         <MovieList/>
  //     </Layout>
  // },
  // {
  //     path: '/moviedetails/:id',
  //     exact: false,
  //     main: () => <Layout>
  //         <MovieDetails/>
  //     </Layout>
  // }

]

const getRoutes = () => {
  return routes.map((route, index) => {
      return <Route
          exact={route.exact} 
          key={index}
          path={route.path}>
          {route.main}
      </Route>
  })
}

function App() {
  return <Provider store={store}>
  <Router>
      <Switch>
          {getRoutes()}
      </Switch>
  </Router>
</Provider>
}

export default App;
