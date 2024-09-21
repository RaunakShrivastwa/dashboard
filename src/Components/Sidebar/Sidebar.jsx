import React from 'react';
import './Sidebar.scss';
import { Menu, Grid, LogOut, LogIn } from 'react-feather'
import { Link, useNavigate } from 'react-router-dom';

function Sidebar({setAside}) {
  const history = useNavigate();
  const handleLogin = (path) => {
    setAside('none');
    history(path)
  }
  return (
    <div class="sidebar_container custome_radius box_shadow ">

      <div class="side_header">

        <img class="img-fluid dark-logo light_img me-2"
          src="https://spike-angular-pro-main.netlify.app/assets/images/logos/dark-logo.svg" alt="" />

        <img id="dark_img" class="img-fluid light-logo dark_img me-2"
          src="https://spike-angular-pro-main.netlify.app/assets/images/logos/light-logo.svg" alt="" />

        <img id="small_logo" width="40px" class="d-none me-2"
          src="https://cdn-icons-png.flaticon.com/128/8427/8427176.png" alt="" />

        <button type="button" class=" d-block d-lg-none d-xl-none bg-transparent border-0 shadow-none"
          data-bs-dismiss="offcanvas">
          <i-feather class="f24" name="x"></i-feather>
        </button>

      </div>

      <div class="side_overview ">

        <div class="home_menu_container">
          <span class=" f12 ">HOME</span>

          <div class="home_menu_items dash1" routerLink="home/dashboard">
            <i-feather class="f24"><Grid /></i-feather>
            <span class="f15"><Link to={'/'}>Dashboard1</Link></span>
          </div>

          <div class="home_menu_items dash1" routerLink="home/dashboard">
            <i-feather class="f24"><Grid /></i-feather>
            <span class="f15"><Link to={'/dashboard2'}>Dashboard2</Link></span>
          </div>

          <div class="home_menu_items dash2">
            <i-feather class="f24"><Grid /></i-feather>
            <Link to={'/bookTickets'} className='f15'>Book Tickets</Link>
          </div>

          <div class="home_menu_items dash2">
            <i-feather class="f24"><Grid /></i-feather>
            <Link to={'/chat'} className='f15'>Chat</Link>
          </div>

          <div class="home_menu_items dash2">
            <i-feather class="f24"><Grid /></i-feather>
            <Link to={'/chatbot'} className='f15'>Chatbot</Link>
          </div>

        </div>

      </div>

      <div class="side_footer container ">
        <div class="wrapper col-md-10 h-100 custome_radius">
          <img class="img-fluid" src="https://spike-angular-pro-main.netlify.app/assets/images/profile/user5.jpg"
            alt="" />

          <div class="login_user">
            <span class="f14 name ">Shubham</span>
            <span class="f14">Admin</span>
          </div>

          <p onClick={() =>handleLogin('/user/auth/login')} className='login text-danger'><LogIn /></p>
          <p onClick={() => handleLogin('/user/auth/signup')} className='logout text-primary'><LogOut /></p>
        </div>

      </div>
    </div>
  )
}

export default Sidebar