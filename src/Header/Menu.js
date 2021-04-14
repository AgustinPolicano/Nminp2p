import React, { Component } from 'react'
import { Nav, Navbar, NavLink } from "react-bootstrap"
import { Link, animateScroll as scroll } from "react-scroll";
import Cotizacion from "./components/Header";
import "./Menu.scss";

export default class Menu extends React.Component{

    refreshPage() {
        window.location.reload(false);
      }

render(){
    return(
      <div className="bg_image">
      <Navbar collapseOnSelect expand="lg" variant="dark" >
      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="">
        <Link  style={{color:"#ffffff"}} onClick={this.refreshPage}><h8>Home &nbsp;&nbsp;&nbsp;&nbsp;</h8></Link>
        <Link style={{color:"#ffffff"}}
           activeClass="active"
           to="exchange"
           spy={true}
           smooth={true}
           offset={-70}
           duration={1300}
          ><h8>Calculadora &nbsp;&nbsp;&nbsp;&nbsp;</h8></Link>

          <Link style={{ color: '#ffffff' }} 
           activeClass="active"
           to="ubicacion"
           spy={true}
           smooth={true}
           offset={-70}
           duration={1300}><h8>Ubicacion &nbsp;&nbsp;&nbsp;&nbsp;</h8></Link>
          <Link style={{ color: '#ffffff' }} 
           activeClass="active"
           to="ubicacion"
           spy={true}
           smooth={true}
           offset={-70}
           duration={1300}><h8>Contacto &nbsp;&nbsp;&nbsp;&nbsp;</h8></Link>
          <Link style={{ color: '#ffffff' }} 
           activeClass="active"
           to="faq"
           spy={true}
           smooth={true}
           offset={-70}
           duration={1300}><h8>FAQ</h8></Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
      <Cotizacion/>
  
      </div>
    )
}
}

