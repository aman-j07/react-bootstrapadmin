import React from 'react'

interface IProps{
    toggleSidebar:()=>void
}

function NavBar(props:IProps) {
  return (
    <header className="nav position-sticky top-0 w-100">
        <nav className=" navbar navbar-expand-lg navbar-light bg-white shadow-sm px-3 w-100">
          <div className="container-fluid flex-nowrap">
            <a className="navbar-brand d-flex align-items-center me-4" href="#">
              <img
                className="nav__logoimg me-1"
                src="https://bootstrapmade.com/demo/templates/NiceAdmin/assets/img/logo.png"
                alt="logo"
              />
              <span className="nav__logotitle bluetxt d-none d-sm-block">Nice Admin</span>
            </a>
            <button
              onClick={props.toggleSidebar}
              className="border-0  bg-transparent"
            >
              <i className="bi bi-list fs-2"></i>
            </button>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="bi bi-search"></i>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <div className="input-group w-auto">
                <input
                  type="text"
                  className="form-control border-end-0"
                  placeholder="Search"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button
                  className="btn border border-start-0"
                  type="button"
                  id="button-addon2"
                >
                  <i className="bi bi-search"></i>
                </button>
              </div>
            </div>
            <ul className="list-unstyled d-flex align-items-center gap-4 mb-0">
              <li className="position-relative">
                <i className="bi bi-bell fs-4"></i>
                <span className="nav__badge position-absolute top-0 start-100 translate-middle badge rounded-3 bg-primary">
                  4<span className="visually-hidden">unread notifications</span>
                </span>
              </li>
              <li className="position-relative">
                <i className="bi bi-chat-left-text fs-4"></i>
                <span className="nav__badge position-absolute top-0 start-100 translate-middle badge rounded-3 bg-success">
                  3<span className="visually-hidden">unread messages</span>
                </span>
              </li>
              <li className="d-flex align-items-center">
                <div className="dropdown">
                  <span
                    className="dropdown-toggle d-flex align-items-center"
                    data-bs-offset="10,20"
                    id="dropdownUserspan"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      className="nav__userimg rounded-circle"
                      src="https://bootstrapmade.com/demo/templates/NiceAdmin/assets/img/profile-img.jpg"
                      alt="user"
                    />
                    <span className='d-none d-lg-block shorttxt bluetxt'>K. Anderson</span>
                  </span>
                  <ul
                    className="dropdown-menu nav__userdropdown}"
                    aria-labelledby="dropdownUserspan"
                  >
                    <li className="p-2 dropdown-header text-center">
                      <h6>Kevin Anderson</h6>
                      <span>Web Designer</span>
                    </li>
                    <li>
                      <hr className="dropdown-divider m-0" />
                    </li>
                    <li>
                      <span className="dropdown-item d-flex align-items-center gap-2 p-2">
                        <i className="fs-5 bi bi-person"></i>
                        <span>My Profile</span>
                      </span>
                    </li>
                    <li>
                      <hr className="dropdown-divider m-0" />
                    </li>
                    <li>
                      <span className="dropdown-item d-flex align-items-center gap-2 p-2">
                        <i className="fs-5 bi bi-gear"></i>
                        <span>Account Settings</span>
                      </span>
                    </li>
                    <li>
                      <hr className="dropdown-divider m-0" />
                    </li>
                    <li>
                      <span className="dropdown-item d-flex align-items-center gap-2 p-2">
                        <i className="fs-5 bi bi-question-circle"></i>
                        <span>Need Help?</span>
                      </span>
                    </li>
                    <li>
                      <hr className="dropdown-divider m-0" />
                    </li>
                    <li>
                      <span className="dropdown-item d-flex align-items-center gap-2 p-2">
                        <i className="fs-5 bi bi-box-arrow-right"></i>
                        <span>Sign Out</span>
                      </span>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>
  )
}

export default NavBar