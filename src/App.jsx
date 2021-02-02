import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './pages/Home'
import Water from './pages/Water'
import Nature from './pages/Nature'
import Wallpaper from './pages/Wallpaper'
import People from './pages/People'
import Inscription from './pages/Inscription'
import Connexion from './pages/Connexion'
import ProtectedRoutes from './ProtectedRoutes'



function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/" exact component={Inscription} />
          <Route path="/connexion" exact component={Connexion} />
          <ProtectedRoutes path="/home" exact component={Home} />
          <ProtectedRoutes path="/water" exact component={Water} />
          <ProtectedRoutes path="/wallpaper" exact component={Wallpaper} />
          <ProtectedRoutes path="/nature" exact component={Nature} />
          <ProtectedRoutes path="/people" exact component={People} />
          <Route component={Connexion} />
        </Switch>
      </Router>
    </React.Fragment>
  )
}

export default App
