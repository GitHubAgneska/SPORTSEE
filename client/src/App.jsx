import React from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import UserProfile from './components/containers/UserProfile'
import NotFoundPage from './components/containers/404'
import NavSide from './components/layout/Nav_side';
import Header from './components/layout/Header';
import { GlobalStyle } from './style/global_style';
import Footer from './components/layout/Footer'

const App = () => {

  return (

    <div className='App'>
        <div className="container" style={{height:'100%', width:'100%'}}>
          <GlobalStyle />
            <BrowserRouter>
              <Header /> {/* INSIDE router because contains NAV with 'LINK TO'  */}
             {/*  <NavSide /> */} {/* same  */}
              <Switch>
                  <Route exact path="/" render={() => <Redirect to="/userProfile/12" />} />
                  <Route exact path="/userProfile/:id" component={UserProfile} />
                  <Route component={NotFoundPage} />
              </Switch>
            </BrowserRouter>
            <Footer />
        </div>
    </div>
  );
}
export default App;
