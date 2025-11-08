
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button, ListGroup, ListGroupItem, ListGroupHorizontal } from 'reactstrap'
import Vendorprofile from './../VendorScreens/Vendorprofile';
import Editvendorprofile from './../VendorScreens/Editvendorprofile';
import Requests from './../VendorScreens/Requests';
import Pendingrequests from './../VendorScreens/Pendingrequests';
import Requestshistory from './../VendorScreens/Requestshistory';
import Addvehicle from './../VendorScreens/Addvehicle';
import Logout from './Logout';



const Vendor = () => {

  return (

    <div>

      <BrowserRouter>
      
        <div className="container-fluid">
          <ListGroup horizontal>
            <ListGroupItem>
              <NavLink className="nav-link" exact to="/vendorDashboard">
                <h5 className="text-center">
                  <i className="fa fa-dashboard"></i>
                  <p>Vendor Dashboard</p>
                </h5>
              </NavLink>
            </ListGroupItem>

            <ListGroupItem>
              <NavLink className="nav-link" exact to="/Profile">
                <Button outline color="success">
                  Profile
                </Button>
              </NavLink>
            </ListGroupItem>

            <ListGroupItem>
              <NavLink className="nav-link" exact to="/Editprofile">
                <Button outline color="success">
                  Edit Profile
                </Button>
              </NavLink>
            </ListGroupItem>

            <ListGroupItem>
              <NavLink className="nav-link" exact to="/Requests">
                <Button outline color="success">
                  New Requests
                </Button>
              </NavLink>
            </ListGroupItem>

            <ListGroupItem>
              <NavLink className="nav-link" exact to="/Pendingrequests">
                <Button outline color="success">
                  Pending Requests
                </Button>
              </NavLink>
            </ListGroupItem>

            <ListGroupItem>
              <NavLink className="nav-link" exact to="/Requestshistory">
                <Button outline color="success">
                  Requests History
                </Button>
              </NavLink>
            </ListGroupItem>

            <ListGroupItem>
              <NavLink className="nav-link" exact to="/Logout">
                <Button color="danger">
                  <i class="fa fa-sign-out" aria-hidden="true"></i>
                  Log out
                </Button>
              </NavLink>
            </ListGroupItem>

          </ListGroup>
        </div>

        <div>
          <Switch>
            <Route path="/Profile" component={Vendorprofile} />
            <Route path="/Editprofile" component={Editvendorprofile} />
            <Route path="/Requests" component={Requests} />
            <Route path="/Pendingrequests" component={Pendingrequests} />
            <Route path="/Requestshistory" component={Requestshistory} />
            <Route path="/Addvehicle" component={Addvehicle} />
            <Route path="/Logout" component={Logout} />
          </Switch>
        </div>

      </BrowserRouter>
    </div>


  )
}



export default Vendor