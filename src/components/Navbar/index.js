import React from 'react'
import { withRouter } from "react-router-dom";
//Styles
import './index.scss'

const NAVBAR_LOGO = 'https://s3.eu-central-1.amazonaws.com/napptilus/level-test/imgs/logo-umpa-loompa.png'

const Navbar = ({ history }) =>
    <nav className="navbar">
        <div className="navbar__container">
            <img src={NAVBAR_LOGO} onClick={() => history.push('/oompa-loompas')} />
            <h3>Oompa Loompa's Crew</h3>
        </div>

    </nav>


export default withRouter(Navbar)