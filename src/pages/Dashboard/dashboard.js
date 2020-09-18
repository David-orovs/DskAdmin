import React from 'react'
import { Switch, Route } from "react-router-dom";
import Sidebar from '../../components/Sidebar/Sidebar';
import Topnav from '../../components/Topnav/Topnav';
import General from '../General/General';
import Fees from '../Fees';
import Users from '../Users'
import Auditlogs from '../Auditlogs'
import Cars from '../Cars'

import './dashboard.css'


export default function Dashboard() {
    return (
    <>
      <div className="container">
        <Sidebar />                  
        <div content="content" style={{ background: 'rgb(247, 248, 252)', width: '100%'}}>
          <Topnav />
          <div className="page__content" style={{ width: '100%', marginTop: '34px'}} >
            <Switch>
              <Route exact path={`/`}><General /></Route>
              <Route exact path={`/fees`}><Fees /></Route>
              <Route exact path={`/users`}><Users /></Route>
              <Route exact path={`/cars`}><Cars /></Route>
              <Route exact path={`/auditlog`}><Auditlogs /></Route>
            </Switch>
          </div>
        </div>
      </div>
    </>
    )
}

