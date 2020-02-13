import React, { Component } from 'react';

import { Nav, NavItem, NavLink, UncontrolledDropdown,DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import { AppNavbarBrand, AppSidebarToggler, AppHeaderDropdown } from '@coreui/react';

import Clock from 'react-live-clock';
import AuthenticationService from '../../services/AuthenticationService';
import logo from '../../assets/images/bxlg.png';
import lg from '../../assets/images/bxlogo.png';
import avatar from '../../assets/images/1.jpg'

class HeaderLayout extends Component {
    render() {
        return (
        <React.Fragment>
                <AppSidebarToggler className="d-lg-none" display="md" mobile />
                <a href="/home">
                    <AppNavbarBrand
                     full={{ src: logo, width: 170, height: 50, alt: 'Berexia Logo' }}
                      minimized={{ src: lg, width: 30, height: 30, alt: 'Berexia Logo' }}
                    />
                <AppSidebarToggler className="d-md-down-none" display="lg" />
            </a>
        <Nav className="d-md-down-none" navbar>
            <NavItem className="px-3">
              <NavLink href="/home">Home</NavLink>
            </NavItem>
            <NavItem className="px-3">
              <NavLink href="/dashboard">Dashboard</NavLink>
            </NavItem>
            <NavItem className="px-3">
              <NavLink href="/users">Users</NavLink>
            </NavItem>
        </Nav>
            <Nav className="px-3" navbar>
      <strong>
        <Clock format={'HH:mm:ss'} ticking={true}  />  {/* timezone={'US/Pacific'} */}
      </strong>
    </Nav>
    <Nav className="px-3" navbar>
          <div>
            <strong className="h5">
                {AuthenticationService.getUsernameLoggedIn()}
              </strong>
          </div>
        </Nav>
    <Nav className="px-3" navbar>
      <strong>
        <Clock format={'MM-DD-YYYY'} ticking={true}  />  {/* timezone={'US/Pacific'} */}
      </strong>
    </Nav>
    <Nav className="px-3" navbar>
          
           <AppHeaderDropdown>
          <UncontrolledDropdown>
            <DropdownToggle nav>
              <img src={avatar} className="img-avatar" alt="admin@bootstrapmaster.com" />
            </DropdownToggle>
            <DropdownMenu right style={{ right: 'auto', height: '400px' }}>
              <DropdownItem href="/user"><i className="fa fa-user"></i> Profile ({AuthenticationService.getUsernameLoggedIn()}) </DropdownItem>
              <DropdownItem href="/user"><i className="fa fa-lock"></i> Change password</DropdownItem>
              <DropdownItem href="/login" onClick={AuthenticationService.logout}  ><i className="fa fa-sign-out fa-lg mt-2"></i> Deconnexion</DropdownItem>
            </DropdownMenu>
            </UncontrolledDropdown>
          </AppHeaderDropdown> 
        </Nav>
    <Nav className="d-md-down-none" navbar>
            +++++++++++ Header Contents +++++++++++
            </Nav>
        </React.Fragment>
        )
    }
}

export default HeaderLayout;
