import React, { Component } from 'react';
import { Link } from 'react-router';
import BackButton from './BackButton.js';
import Layout from './Layout';

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return(
      <div className='links'>
        <Layout/>
        {this.props.children}
         <div className='footer'>
         <p1><span className='center'><Link to='/'> Home </Link></span></p1>
         <p2><span className='center'><Link to='/projects'> Projects </Link></span></p2>
         <p3><span className='center'><Link to='/resume'> Resume </Link></span></p3>
         </div>
        <BackButton />
      </div>
    )
  }
}

export default NavBar;
