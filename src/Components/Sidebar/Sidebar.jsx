import React from 'react';
import './Sidebar.scss';
import {Menu,Grid} from 'react-feather'

function Sidebar() {
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
                <span class="f15">Dashboard1</span>
            </div>

            <div class="home_menu_items dash2">
                <i-feather class="f24" name="grid"></i-feather>
                <span class="f15">Dashboard2</span>
            </div>

        </div>

        {/*{/* <!-- For Apps Menu --> */}
        <div class="home_menu_container">
            <span class=" f12 ">APPS</span>

           {/* <!-- for the Chats --> */}
            <div class="home_menu_items" routerLink="menu/chat">
                <i-feather class="f24" name="message-circle"></i-feather>
                <span class="f15">Chats</span>
            </div>

           {/* <!-- for the Calandar --> */}
            <div class="home_menu_items" routerLink="menu/calender">
                <i-feather class="f24" name="calendar"></i-feather>
                <span class="f15">Calender</span>
            </div>

           {/* <!-- for the Email --> */}
            <div class="home_menu_items" routerLink="menu">
                <i-feather class="f24" name="voicemail"></i-feather>
                <span class="f15">Email</span>
            </div>

           {/* <!-- for the Contact --> */}
            <div class="home_menu_items" routerLink="menu/contacts">
                <i-feather class="f24" name="phone"></i-feather>
                <span class="f15">Contact</span>
            </div>

           {/* <!-- for the Courses --> */}
            <div class="home_menu_items" routerLink="menu/course">
                <i-feather class="f24" name="book"></i-feather>
                <span class="f15">Courses</span>
            </div>

           {/* <!-- for the Employee --> */}
            <div class="home_menu_items" routerLink="menu/employee">
                <i-feather class="f24" name="users"></i-feather>
                <span class="f15">Employee</span>
            </div>

           {/* <!-- for the Notes --> */}
            <div class="home_menu_items">
                <i-feather class="f24" name="book-open"></i-feather>
                <span class="f15">Notes</span>
            </div>

           {/* <!-- for the Tickets --> */}
            <div class="home_menu_items">
                <i-feather class="f24" name="minus-square"></i-feather>
                <span class="f15">Tickets</span>
            </div>

           {/* <!-- for the Invoice --> */}
            <div class="home_menu_items">
                <i-feather class="f24" name="folder"></i-feather>
                <span class="f15">Invoice</span>
            </div>

           {/* <!-- for the Todo --> */}
            <div class="home_menu_items">
                <i-feather class="f24" name="edit"></i-feather>
                <span class="f15">Todo</span>
            </div>

           {/* <!-- for the Task Board --> */}
            <div class="home_menu_items">
                <i-feather class="f24" name="trello"></i-feather>
                <span class="f15">Taskboard</span>
            </div>

           {/* <!-- for the Blog --> */}
            <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">

                    <div class="wrapper">
                        <button class="accordion-button1   p-3 custome_toggle collapsed" type="button"
                            data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false"
                            aria-controls="flush-collapseOne">
                            <i-feather class="f24" name="life-buoy"></i-feather>
                            <span class="f15">Blog</span>
                        </button>
                    </div>

                    <div id="flush-collapseOne" class="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            <ul>
                                <li>Post</li>
                                <li>Detail</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

        </div>

       {/* <!-- For Pages menu --> */}
        <div class="home_menu_container">
            <span class=" f12 ">PAGES</span>
           {/* <!-- Roll base access --> */}
            <div class="home_menu_items">
                <i-feather class="f24" name="lock"></i-feather>
                <span class="f15">Roll Base Access</span>
            </div>

           {/* <!-- Tree view --> */}
            <div class="home_menu_items dash2">
                <i-feather class="f24" name="git-merge"></i-feather>
                <span class="f15">Treeview</span>
            </div>

           {/* <!-- Pricing --> */}
            <div class="home_menu_items dash2">
                <i-feather class="f24" name="dollar-sign"></i-feather>
                <span class="f15">Pricing</span>
            </div>

           {/* <!-- Account setting --> */}
            <div routerLink="home/account-setting" class="home_menu_items dash2">
                <i-feather  class="f24" name="user"></i-feather>
                <span class="f15">Account Setting</span>
            </div>

           {/* <!-- FAQ --> */}
            <div class="home_menu_items dash2">
                <i-feather class="f24" name="help-circle"></i-feather>
                <span class="f15">FAQ</span>
            </div>

           {/* <!-- Landingpage --> */}
            <div class="home_menu_items dash2">
                <i-feather class="f24" name="tablet"></i-feather>
                <span class="f15">Landingpage</span>
            </div>

           {/* <!-- for the Weight --> */}
            <div class="accordion accordion-flush" id="weight_menubar">
                <div class="accordion-item">

                    <div class="wrapper">
                        <button class="accordion-button1 p-3 custome_toggle collapsed" type="button"
                            data-bs-toggle="collapse" data-bs-target="#weight" aria-controls="weight">
                            <i-feather class="f24" name="command"></i-feather>
                            <span class="f15">Weight</span>
                        </button>
                    </div>

                    <div id="weight" class="accordion-collapse collapse" data-bs-parent="#weight_menubar">
                        <div class="accordion-body">
                            <ul>
                                <li>Card</li>
                                <li>Banner</li>
                                <li>Charts</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

        </div>

       {/* <!-- For Form menu --> */}
        <div class="home_menu_container">
            <span class=" f12 ">FORM</span>

           {/* <!-- Form elemeny --> */}
            <div class="accordion accordion-flush" id="form_elements">
                <div class="accordion-item">

                    <div class="wrapper">
                        <button class="accordion-button1   p-3 custome_toggle collapsed" type="button"
                            data-bs-toggle="collapse" data-bs-target="#form" aria-expanded="false"
                            aria-controls="flush-collapseOne">
                            <i-feather class="f24" name="life-buoy"></i-feather>
                            <span class="f15">Form elements</span>
                        </button>
                    </div>

                    <div id="form" class="accordion-collapse collapse" data-bs-parent="#form_elements">
                        <div class="accordion-body">
                            <ul>
                                <li>Autocomplete</li>
                                <li>Button</li>
                                <li>Checkbox</li>
                                <li>Radio</li>
                                <li>Datepicker</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

           {/* <!-- Form Horizontal --> */}
            <div class="home_menu_items dash2">
                <i-feather class="f24" name="sidebar"></i-feather>
                <span class="f15">Form Horizontal</span>
            </div>

           {/* <!-- Form Vertical --> */}
            <div class="home_menu_items dash2 mx-1">
                <i-feather class="f24  sidebar" name="sidebar"></i-feather>
                <span class="f15">Form Vertical</span>
            </div>

           {/* <!-- form Wizard --> */}
            <div class="home_menu_items dash2">
                <i-feather class="f24" name="copy"></i-feather>
                <span class="f15">Form Wizard</span>
            </div>

        </div>

       {/* <!-- For Table menu --> */}
        <div class="home_menu_container">
            <span class=" f12 ">TABLE</span>

           {/* <!-- for the Blog --> */}
            <div class="accordion accordion-flush" id="table_menu">
                <div class="accordion-item">

                    <div class="wrapper">
                        <button class="accordion-button1   p-3 custome_toggle collapsed" type="button"
                            data-bs-toggle="collapse" data-bs-target="#table" aria-expanded="false"
                            aria-controls="table">
                            <i-feather class="f24" name="life-buoy"></i-feather>
                            <span class="f15">Tables</span>
                        </button>
                    </div>

                    <div id="table" class="accordion-collapse collapse" data-bs-parent="#table_menu">
                        <div class="accordion-body">
                            <ul>
                                <li>Basic Table</li>
                                <li>Dynamic Table</li>
                                <li>Expand Table</li>
                                <li>Filterable Table</li>
                                <li>Footer Row Table</li>
                                <li>HTTP Table </li>
                                <li>Mix Table</li>
                                <li>Multi Header Table</li>
                                <li>Pagination Table</li>
                                <li>Row Context Table</li>
                                <li>Selection Table</li>
                                <li>Sortable Table</li>
                                <li>Sticky Column</li>
                                <li>Sticky Header Footer</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

            <div class="home_menu_items dash2">
                <i-feather class="f24" name="maximize"></i-feather>
                <span class="f15">Data table</span>
            </div>

        </div>

       {/* <!-- Chart --> */}
        <div class="home_menu_container">
            <span class=" f12 ">CHART</span>

           {/* <!-- for line --> */}
            <div class="home_menu_items dash1">
                <i-feather class="f24" name="activity"></i-feather>
                <span class="f15">Line</span>
            </div>

           {/* <!-- for the Gradient --> */}
            <div class="home_menu_items dash2">
                <i-feather class="f24" name="aperture"></i-feather>
                <span class="f15">Gradient</span>
            </div>

           {/* <!-- for the area --> */}
            <div class="home_menu_items dash2">
                <i-feather class="f24" name="zap"></i-feather>
                <span class="f15">Area</span>
            </div>

           {/* <!-- candlestick --> */}
            <div class="home_menu_items dash2">
                <i-feather class="f24" name="wind"></i-feather>
                <span class="f15">Candlestick</span>
            </div>

           {/* <!-- for the column --> */}
            <div class="home_menu_items dash2">
                <i-feather class="f24" name="columns"></i-feather>
                <span class="f15">Column</span>
            </div>

           {/* <!-- for th eDoughnut --> */}
            <div class="home_menu_items dash2">
                <i-feather class="f24" name="chrome"></i-feather>
                <span class="f15">Doughnut & Pie</span>
            </div>

           {/* <!-- for the Radialbar --> */}
            <div class="home_menu_items dash2">
                <i-feather class="f24" name="box"></i-feather>
                <span class="f15">Radialbar & Radar</span>
            </div>

        </div>

       {/* <!-- For Home UI --> */}
        <div class="home_menu_container">
            <span class=" f12 ">UI</span>
            <div class="accordion accordion-flush" id="UI_menu">
                <div class="accordion-item">

                    <div class="wrapper">
                        <button class="accordion-button1   p-3 custome_toggle collapsed" type="button"
                            data-bs-toggle="collapse" data-bs-target="#ui" aria-expanded="false" aria-controls="ui">
                            <i-feather class="f24" name="life-buoy"></i-feather>
                            <span class="f15">Ui Components</span>
                        </button>
                    </div>
                    <div id="ui" class="accordion-collapse collapse " data-bs-parent="#UI_menu">
                        <div class="accordion-body">
                            <ul>
                                <li>Badge</li>
                                <li>Expansion</li>
                                <li>Chips</li>
                                <li>Dialog</li>
                                <li>Lists</li>
                                <li>Divider</li>
                                <li>Menu</li>
                                <li>Pagination</li>
                                <li>Progress Bar</li>
                                <li>Progress Spinner</li>
                                <li>Ripples</li>
                                <li>Slide Toggle</li>
                                <li>Slider</li>
                                <li>Snackbar</li>
                                <li>Tabs</li>
                                <li>Toolbar</li>
                                <li>Tooltips</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

        </div>

       {/* <!-- For Auth menu --> */}
        <div class="home_menu_container">
            <span class=" f12 ">AUTH</span>

           {/* <!-- for the login --> */}
            <div class="accordion accordion-flush" id="login_menu">
                <div class="accordion-item">

                    <div class="wrapper">
                        <button class="accordion-button1   p-3 custome_toggle collapsed" type="button"
                            data-bs-toggle="collapse" data-bs-target="#login" aria-expanded="false"
                            aria-controls="login">
                            <i-feather class="f24" name="log-in"></i-feather>
                            <span class="f15">Login</span>
                        </button>
                    </div>

                    <div id="login" class="accordion-collapse collapse" data-bs-parent="#login_menu">
                        <div class="accordion-body">
                            <ul>
                                <li>Login</li>
                                <li>Boxed Login</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

           {/* <!-- for the register --> */}
            <div class="accordion accordion-flush" id="register_menu">
                <div class="accordion-item">

                    <div class="wrapper">
                        <button class="accordion-button1   p-3 custome_toggle collapsed" type="button"
                            data-bs-toggle="collapse" data-bs-target="#register" aria-expanded="false"
                            aria-controls="register">
                            <i-feather class="f24" name="user-plus"></i-feather>
                            <span class="f15">Register</span>
                        </button>
                    </div>

                    <div id="register" class="accordion-collapse collapse" data-bs-parent="#register_menu">
                        <div class="accordion-body">
                            <ul>
                                <li>Register</li>
                                <li>Boxed Register</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

           {/* <!-- for the forgate --> */}
            <div class="accordion accordion-flush" id="forgate_menu">
                <div class="accordion-item">

                    <div class="wrapper">
                        <button class="accordion-button1   p-3 custome_toggle" type="button" data-bs-toggle="collapse"
                            data-bs-target="#forgate" aria-expanded="false" aria-controls="forgate">
                            <i-feather class="f24" name="refresh-ccw"></i-feather>
                            <span class="f15">Forgote</span>
                        </button>
                    </div>

                    <div id="forgate" class="accordion-collapse collapse" data-bs-parent="#forgate_menu">
                        <div class="accordion-body">
                            <ul>
                                <li>Side Forgote Password</li>
                                <li>Boxed Forgote Password</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

           {/* <!-- for the two steps --> */}
            <div class="accordion accordion-flush" id="Twostep_menu">
                <div class="accordion-item">

                    <div class="wrapper">
                        <button class="accordion-button1   p-3 custome_toggle" type="button" data-bs-toggle="collapse"
                            data-bs-target="#Twostep" aria-expanded="false" aria-controls="Twostep">
                            <i-feather class="f24" name="search"></i-feather>
                            <span class="f15">Two Steps</span>
                        </button>
                    </div>

                    <div id="Twostep" class="accordion-collapse collapse" data-bs-parent="#Twostep_menu">
                        <div class="accordion-body">
                            <ul>
                                <li>Side Two Steps</li>
                                <li>Boxed Two Steps</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

           {/* <!-- for Error --> */}
            <div class="home_menu_items">
                <i-feather class="f24" name="x-octagon"></i-feather>
                <span class="f15">Error</span>
            </div>

           {/* <!-- for Maintenance --> */}
            <div class="home_menu_items">
                <i-feather class="f24" name="settings"></i-feather>
                <span class="f15">Maintenance</span>
            </div>

        </div>

       {/* <!-- For Other menu --> */}
        <div class="home_menu_container">
            <span class=" f12 ">OTHER</span>

           {/* <!-- for the manual level --> */}
            <div class="accordion accordion-flush" id="menu_level-menu">
                <div class="accordion-item">

                    <div class="wrapper">
                        <button class="accordion-button1   p-3 custome_toggle collapsed" type="button"
                            data-bs-toggle="collapse" data-bs-target="#manual_level" aria-expanded="false"
                            aria-controls="manual_level">
                            <i-feather class="f24" name="copy"></i-feather>
                            <span class="f15">Menu Level</span>
                        </button>
                    </div>

                    <div id="manual_level" class="accordion-collapse collapse" data-bs-parent="#menu_level-menu">
                        <div class="accordion-body">
                            <ul>
                                <li>Menu 1</li>
                                <li>Menu 2</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

           {/* <!-- disabled --> */}
            <div class="home_menu_items">
                <i-feather class="f24 disabled_menu" name="slash"></i-feather>
                <span class="f15 disabled_menu">Disabled</span>
            </div>

           {/* <!-- for the chip --> */}
            <div class="home_menu_items ">
                <i-feather class="f24" name="meh"></i-feather>
                <span class="f15">Chip</span>
                <div class="chip_box flex-grow-1  text-end px-3">
                    <span class="f12 bg-primary">9</span>
                </div>
            </div>
            <div class="home_menu_items ">
                <span class="text-center  "><i-feather class="f24" name="meh"></i-feather></span>
                <span class="f15">Outlined</span>

                <div class="outlined flex-grow-1">
                    <span class="f12">outlined</span>
                </div>
            </div>

            <div class="home_menu_items ">
                <span class="text-center  "><i-feather class="f24" name="star"></i-feather></span>
                <span class="f15">External Link</span>
            </div>

        </div>

    </div>

    <div class="side_footer container ">
        <div class="wrapper col-md-10 h-100 custome_radius p-2">
            <img class="img-fluid" src="https://spike-angular-pro-main.netlify.app/assets/images/profile/user5.jpg"
                alt="" />

            <div class="login_user">
                <span class="f18 "><strong>Mike</strong></span>
                <span class="f14">Admin</span>
            </div>

            <i-feather name="log-out"></i-feather>
        </div>

    </div>
   </div>
  )
}

export default Sidebar