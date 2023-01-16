import React, { useRef } from "react";
import "./App.css";

function App() {
  const sidebarRef = useRef<HTMLElement>(null);

  const toggleSidebar = () => {
    if (sidebarRef.current !== null) {
      sidebarRef.current.classList.toggle("sidebar--hidden");
    }
  };

  return (
    <div className="App bg-light">
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-3">
          <div className="container-fluid flex-nowrap">
            <a className="navbar-brand d-flex align-items-center me-4" href="#">
              <img
                className="nav__logoimg me-1"
                src="https://bootstrapmade.com/demo/templates/NiceAdmin/assets/img/logo.png"
                alt="logo"
              />
              <span className="nav__logotitle bluetxt">Nice Admin</span>
            </a>
            <button
              onClick={toggleSidebar}
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
              <div className="input-group">
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
                    className="dropdown-toggle shortxt bluetxt"
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
                    K. Anderson
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
      <main className="d-flex">
        <aside className="sidebar bluetxt p-4 bg-white" ref={sidebarRef}>
          <ul className="list-unstyled">
            <li>
              <a className="d-flex gap-2 p-2 text-decoration-none" href="#">
                <i className="bi bi-grid"></i>
                <span className="fw-bolder">Dashboard</span>
              </a>
            </li>
            <li>
              <a
                className="d-flex gap-2 p-2 text-decoration-none"
                data-bs-target="#components"
                data-bs-toggle="collapse"
                href="#"
                aria-expanded="false"
              >
                <i className="bi bi-menu-button-wide"></i>
                <span className="fw-bolder">Components</span>
                <i className="bi bi-chevron-down ms-auto"></i>
              </a>
            </li>
            <ul
              id="components"
              className="nav-content collapse show list-unstyled text-start ms-4"
              data-bs-parent="#sidebar"
            >
              <li>
                <a
                  href="#"
                  className="d-flex align-items-center gap-2 p-2 text-decoration-none"
                >
                  <i className="bi bi-circle vshorttxt"></i>
                  <span>Alerts</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="d-flex align-items-center gap-2 p-2 text-decoration-none"
                >
                  <i className="bi bi-circle vshorttxt"></i>
                  <span>Accordion</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="d-flex align-items-center gap-2 p-2 text-decoration-none"
                >
                  <i className="bi bi-circle vshorttxt"></i>
                  <span>Badges</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="d-flex align-items-center gap-2 p-2 text-decoration-none"
                >
                  <i className="bi bi-circle vshorttxt"></i>
                  <span>Breadcrumbs</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="d-flex align-items-center gap-2 p-2 text-decoration-none"
                >
                  <i className="bi bi-circle vshorttxt"></i>
                  <span>Buttons</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="d-flex align-items-center gap-2 p-2 text-decoration-none"
                >
                  <i className="bi bi-circle vshorttxt"></i>
                  <span>Cards</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="d-flex align-items-center gap-2 p-2 text-decoration-none"
                >
                  <i className="bi bi-circle vshorttxt"></i>
                  <span>Carousel</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="d-flex align-items-center gap-2 p-2 text-decoration-none"
                >
                  <i className="bi bi-circle vshorttxt"></i>
                  <span>List group</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="d-flex align-items-center gap-2 p-2 text-decoration-none"
                >
                  <i className="bi bi-circle vshorttxt"></i>
                  <span>Modal</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="d-flex align-items-center gap-2 p-2 text-decoration-none"
                >
                  <i className="bi bi-circle vshorttxt"></i>
                  <span>Tabs</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="d-flex align-items-center gap-2 p-2 text-decoration-none"
                >
                  <i className="bi bi-circle vshorttxt"></i>
                  <span>Pagination</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="d-flex align-items-center gap-2 p-2 text-decoration-none"
                >
                  <i className="bi bi-circle vshorttxt"></i>
                  <span>Progress</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="d-flex align-items-center gap-2 p-2 text-decoration-none"
                >
                  <i className="bi bi-circle vshorttxt"></i>
                  <span>Spinners</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="d-flex align-items-center gap-2 p-2 text-decoration-none"
                >
                  <i className="bi bi-circle vshorttxt"></i>
                  <span>Tooltips</span>
                </a>
              </li>
            </ul>
            <li>
              <a
                className="d-flex gap-2 p-2 text-decoration-none"
                data-bs-target="#forms"
                data-bs-toggle="collapse"
                href="#"
                aria-expanded="false"
              >
                <i className="bi bi-journal-text"></i>
                <span className="fw-bolder">Forms</span>
                <i className="bi bi-chevron-down ms-auto"></i>
              </a>
            </li>
            <ul
              id="forms"
              className="nav-content collapse show list-unstyled text-start ms-4"
              data-bs-parent="#sidebar"
            >
              <li>
                <a
                  href="#"
                  className="d-flex align-items-center gap-2 p-2 text-decoration-none"
                >
                  <i className="bi bi-circle vshorttxt"></i>
                  <span>Form Elements</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="d-flex align-items-center gap-2 p-2 text-decoration-none"
                >
                  <i className="bi bi-circle vshorttxt"></i>
                  <span>Form Layouts</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="d-flex align-items-center gap-2 p-2 text-decoration-none"
                >
                  <i className="bi bi-circle vshorttxt"></i>
                  <span>Form Editors</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="d-flex align-items-center gap-2 p-2 text-decoration-none"
                >
                  <i className="bi bi-circle vshorttxt"></i>
                  <span>Form Validation</span>
                </a>
              </li>
            </ul>
            <li>
              <a
                className="d-flex gap-2 p-2 text-decoration-none"
                data-bs-target="#tables"
                data-bs-toggle="collapse"
                href="#"
                aria-expanded="false"
              >
                <i className="bi bi-layout-text-window-reverse"></i>
                <span className="fw-bolder">Tables</span>
                <i className="bi bi-chevron-down ms-auto"></i>
              </a>
            </li>
            <ul
              id="tables"
              className="nav-content collapse show list-unstyled text-start ms-4"
              data-bs-parent="#sidebar"
            >
              <li>
                <a
                  href="#"
                  className="d-flex align-items-center gap-2 p-2 text-decoration-none"
                >
                  <i className="bi bi-circle vshorttxt"></i>
                  <span>General Tables</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="d-flex align-items-center gap-2 p-2 text-decoration-none"
                >
                  <i className="bi bi-circle vshorttxt"></i>
                  <span>Data Tables</span>
                </a>
              </li>
            </ul>
            <li>
              <a
                className="d-flex gap-2 p-2 text-decoration-none"
                data-bs-target="#charts"
                data-bs-toggle="collapse"
                href="#"
                aria-expanded="false"
              >
                <i className="bi bi-bar-chart"></i>
                <span className="fw-bolder">Charts</span>
                <i className="bi bi-chevron-down ms-auto"></i>
              </a>
            </li>
            <ul
              id="charts"
              className="nav-content collapse show list-unstyled text-start ms-4"
              data-bs-parent="#sidebar"
            >
              <li>
                <a
                  href="#"
                  className="d-flex align-items-center gap-2 p-2 text-decoration-none"
                >
                  <i className="bi bi-circle vshorttxt"></i>
                  <span>Chart.js</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="d-flex align-items-center gap-2 p-2 text-decoration-none"
                >
                  <i className="bi bi-circle vshorttxt"></i>
                  <span>ApexCharts</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="d-flex align-items-center gap-2 p-2 text-decoration-none"
                >
                  <i className="bi bi-circle vshorttxt"></i>
                  <span>ECharts</span>
                </a>
              </li>
            </ul>
            <li>
              <a
                className="d-flex gap-2 p-2 text-decoration-none"
                data-bs-target="#icons"
                data-bs-toggle="collapse"
                href="#"
                aria-expanded="false"
              >
                <i className="bi bi-gem"></i>
                <span className="fw-bolder">Icons</span>
                <i className="bi bi-chevron-down ms-auto"></i>
              </a>
            </li>
            <ul
              id="icons"
              className="nav-content collapse show list-unstyled text-start ms-4"
              data-bs-parent="#sidebar"
            >
              <li>
                <a
                  href="#"
                  className="d-flex align-items-center gap-2 p-2 text-decoration-none"
                >
                  <i className="bi bi-circle vshorttxt"></i>
                  <span>Bootstrap Icons</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="d-flex align-items-center gap-2 p-2 text-decoration-none"
                >
                  <i className="bi bi-circle vshorttxt"></i>
                  <span>Remix Icons</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="d-flex align-items-center gap-2 p-2 text-decoration-none"
                >
                  <i className="bi bi-circle vshorttxt"></i>
                  <span>Boxicons</span>
                </a>
              </li>
            </ul>
            <li>
              <a className="d-flex gap-2 p-2 text-decoration-none" href="#">
                <i className="bi bi-grid"></i>
                <span className="fw-bolder">Dashboard</span>
              </a>
            </li>
            <li>
              <a className="d-flex gap-2 p-2 text-decoration-none" href="#">
                <i className="bi bi-person"></i>
                <span className="fw-bolder">Profile</span>
              </a>
            </li>
            <li>
              <a className="d-flex gap-2 p-2 text-decoration-none" href="#">
                <i className="bi bi-question-circle"></i>
                <span className="fw-bolder">F.A.Q</span>
              </a>
            </li>
            <li>
              <a className="d-flex gap-2 p-2 text-decoration-none" href="#">
                <i className="bi bi-envelope"></i>
                <span className="fw-bolder">Contact</span>
              </a>
            </li>
            <li>
              <a className="d-flex gap-2 p-2 text-decoration-none" href="#">
                <i className="bi bi-card-list"></i>
                <span className="fw-bolder">Register</span>
              </a>
            </li>
            <li>
              <a className="d-flex gap-2 p-2 text-decoration-none" href="#">
                <i className="bi bi-box-arrow-in-right"></i>
                <span className="fw-bolder">Login</span>
              </a>
            </li>
            <li>
              <a className="d-flex gap-2 p-2 text-decoration-none" href="#">
                <i className="bi bi-dash-circle"></i>
                <span className="fw-bolder">Error404</span>
              </a>
            </li>
            <li>
              <a className="d-flex gap-2 p-2 text-decoration-none" href="#">
                <i className="bi bi-file-earmark"></i>
                <span className="fw-bolder">Blank</span>
              </a>
            </li>
          </ul>
        </aside>
        <section className="dashboard px-4 py-3 flex-fill">
          <div>
            <h4 className="bluetxt mb-0 text-start">Dashboard</h4>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="shorttxt breadcrumb-item">Home</li>
                <li
                  className="shorttxt breadcrumb-item active"
                  aria-current="page"
                >
                  Dashboard
                </li>
              </ol>
            </nav>
          </div>
          <div className="d-flex col-8 justify-content-between">
            <div className='px-2 col-6 mb-4 pe-3'>
              <div className="card shadow-sm border-0 px-2  pb-2">
                <div className="card-body">
                  <span className="d-flex justify-content-between my-3">
                    <span className="d-flex align-items-center">
                      <h5 className="card-title bluetxt me-2">Sales</h5>
                      <h6 className="card-subtitle text-muted"> | Today</h6>
                    </span>
                    <div className="dropdown">
                      <button className="bg-transparent border-0 " type="button" id="salesoptions" data-bs-toggle="dropdown" aria-expanded="false">
                      <i className="bi bi-three-dots"></i>
                      </button>
                      <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="salesoptions">
                        <li className="dropdown-header text-start "><h6 className="fw-light">FILTER</h6></li>
                        <li><a className="dropdown-item shorttxt py-1" href="#">Today</a></li>
                        <li><a className="dropdown-item shorttxt py-1" href="#">This month</a></li>
                        <li><a className="dropdown-item shorttxt py-1" href="#">This year</a></li>
                      </ul>
                    </div>
                  </span>
                  <div className="d-flex align-items-center">
                    <span className="dashboard__iconcvr dashboard__iconcvr--blue rounded-circle d-flex align-items-center justify-content-center">
                    <i className="bi bi-cart"></i>
                    </span>
                    <span className="text-start ms-2">
                      <h4 className="mb-0 bluetxt">145</h4>
                      <span className="shorttxt"><span className="text-success fw-bold">12%</span><span className="ms-2 fw-light">Increase</span></span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className='px-2 col-6 ps-3'>
              <div className="card shadow-sm border-0 px-2  pb-2">
                <div className="card-body">
                  <span className="d-flex justify-content-between my-3">
                    <span className="d-flex align-items-center">
                      <h5 className="card-title bluetxt me-2">Revenue</h5>
                      <h6 className="card-subtitle text-muted"> | This month</h6>
                    </span>
                    <div className="dropdown">
                      <button className="bg-transparent border-0 " type="button" id="revenueoptions" data-bs-toggle="dropdown" aria-expanded="false">
                      <i className="bi bi-three-dots"></i>
                      </button>
                      <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="revenueoptions">
                        <li className="dropdown-header text-start "><h6 className="fw-light">FILTER</h6></li>
                        <li><a className="dropdown-item shorttxt py-1" href="#">Today</a></li>
                        <li><a className="dropdown-item shorttxt py-1" href="#">This month</a></li>
                        <li><a className="dropdown-item shorttxt py-1" href="#">This year</a></li>
                      </ul>
                    </div>
                  </span>
                  <div className="d-flex align-items-center">
                    <span className="dashboard__iconcvr dashboard__iconcvr--green rounded-circle d-flex align-items-center justify-content-center">
                    <i className="bi bi-currency-dollar"></i>
                    </span>
                    <span className="text-start ms-2">
                      <h4 className="mb-0 bluetxt">$3,264</h4>
                      <span className="shorttxt"><span className="text-success fw-bold">8%</span><span className="ms-2 fw-light">Increase</span></span>
                    </span>
                  </div>
                </div>
              </div>
            </div>  
          </div>
          <div className='px-2 col-8'>
              <div className="card shadow-sm border-0 px-2 pb-2">
              <div className="card-body">
                  <span className="d-flex justify-content-between my-3">
                    <span className="d-flex align-items-center">
                      <h5 className="card-title bluetxt me-2">Customers</h5>
                      <h6 className="card-subtitle text-muted"> | This Year</h6>
                    </span>
                    <div className="dropdown">
                      <button className="bg-transparent border-0 " type="button" id="customersoptions" data-bs-toggle="dropdown" aria-expanded="false">
                      <i className="bi bi-three-dots"></i>
                      </button>
                      <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="customersoptions">
                        <li className="dropdown-header text-start "><h6 className="fw-light">FILTER</h6></li>
                        <li><a className="dropdown-item shorttxt py-1" href="#">Today</a></li>
                        <li><a className="dropdown-item shorttxt py-1" href="#">This month</a></li>
                        <li><a className="dropdown-item shorttxt py-1" href="#">This year</a></li>
                      </ul>
                    </div>
                  </span>
                  <div className="d-flex align-items-center">
                    <span className="dashboard__iconcvr dashboard__iconcvr--orange rounded-circle d-flex align-items-center justify-content-center">
                    <i className="bi bi-people"></i>
                    </span>
                    <span className="text-start ms-2">
                      <h4 className="mb-0 bluetxt">1244</h4>
                      <span className="shorttxt"><span className="text-danger fw-bold">12%</span><span className="ms-2 fw-light">Decrease</span></span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          
          
        </section>
      </main>
    </div>
  );
}

export default App;
