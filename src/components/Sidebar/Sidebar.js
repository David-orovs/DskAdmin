import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import FontAwesome from 'react-fontawesome';
import './sidebar.css'
import Tete from '../../images/Tete Logo.svg'

export default function Sidebar() {
    let [sidebarVisibility, setsidebarVisibility] = useState(false);

    function ChangeSidebarVisibility() {
        setsidebarVisibility(!sidebarVisibility);
    }

    function getCollapseClass() {
        return (sidebarVisibility) ? "" : "collapsed";
        // a class 
    }

    return (
        <Fragment>
            <div className="toggle-area">
                <button className="toggle-button" onClick={() => ChangeSidebarVisibility()}>
                    hii
                </button>
            </div>
            <div className={`sidebar navbar-nav ${getCollapseClass()}`}
                id="collapseMenu">
                <div className="tete__box">
                    <Link className="tete__logo" to="/">
                      <div className="title">DSKADMIN</div>
                    </Link>
                </div>                
                <div className="nav-item active">
                    <Link className="nav-link" to="/">
                        <div style={{width:'20%'}}>
                          <FontAwesome  className='menu-icon' name='book' />
                        </div>
                        <div style={{width:'60%'}}>
                          <span>Dashboard</span>
                        </div>
                    </Link>
                </div>
                <div className="nav-item">
                    <Link className="nav-link" to={`/fees`}>
                        <div style={{width:'20%'}}>
                          <FontAwesome  className='menu-icon' name='money' />
                        </div>
                        <div style={{width:'60%'}}>
                          <span className='nav__text'>Fees</span>
                        </div>
                    </Link>
                </div>

                <div className="nav-item">
                    <Link className="nav-link" to={`/users`}>
                        <div style={{width:'20%'}}>
                          <FontAwesome  className='menu-icon' name='group' />
                        </div>
                        <div style={{width:'60%'}}>
                          <span>Users</span>
                        </div>
                    </Link>
                </div>
                <div className="nav-item">
                    <Link className="nav-link" to={`/transaction`}>
                        <div style={{width:'20%'}}>
                          <FontAwesome  className='menu-icon' name='car' />
                        </div>
                        <div style={{width:'60%'}}>
                          <span>Cars</span>
                        </div>
                    </Link>
                </div>
                <div className="nav-item">
                    <Link className="nav-link" to={`/auditlogs`}>
                        <div style={{width:'20%'}}>
                          <FontAwesome  className='menu-icon' name='gear' />
                        </div>
                        <div style={{width:'60%'}}>
                          <span>Audit Logs</span>
                        </div>
                    </Link>
                </div>
            </div>
        </Fragment>
        
    )
}
