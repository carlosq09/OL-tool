import { Route, Switch, withRouter } from "react-router-dom";
import React, { useEffect, useState } from 'react'
//Pages
import OmpaDetails from "./pages/OmpaDetails";
import OmpaList from "./pages/OmpaList";
//components
import Navbar from "./components/Navbar";
//styles
import './App.scss'

function App() {
  return <>
    <Navbar />
    <Switch>
      <Route exact path="/oompa-loompas" render={() => <OmpaList />} />
      <Route exact path="/oompa-loompas/:id" render={() => <OmpaDetails />} />
      <Route component={OmpaList} />
    </Switch>


  </>

}

export default withRouter(App)
