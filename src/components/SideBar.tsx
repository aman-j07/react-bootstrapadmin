import React from 'react'
interface IProps{
    sidebarRef:React.LegacyRef<HTMLElement>
}

function SideBar(props:IProps) {
    const components=['Alerts','Accordion','Badges','Breadcrumbs','Buttons','Cards','Carousel','List','Modal','Tabs','Pagination','Progress','Spinners','Tooltips',]
    const forms=['Form Elements','Form Layouts','Form Editors','Form Validation'];
    const tables=['General Tables','Data Tables']
    const charts=['Chart','ApexCharts','ECharts',]
    const icons=['Bootstrap Icons','Remix Icons','Boxicons']

  return (
     <aside className="sidebar bluetxt p-4 bg-white" ref={props.sidebarRef}>
          <ul className="list-unstyled sidebar__list">
            <li className="d-flex gap-2 p-2 my-1 text-decoration-none sidebar__listitems--main" role="button">
                <i className="bi bi-grid"></i>
                <span className="fw-bolder">Dashboard</span>
            </li>
            <li >
              <div className="accordion-item border-0">
                <h2 className="accordion-header " id="panelsStayOpen-headingOne">
                  <button className="accordion-button px-2 bluetxt sidebar__listitems--main sidebar__listitems--btnmain collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#components" aria-expanded="true" aria-controls="components">
                    <i className="bi bi-menu-button-wide me-2"></i>
                    <span className="fw-bolder">Components</span>
                  </button>
                </h2>
                <div id="components" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">
                  <ul  className="nav-content list-unstyled text-start ms-3">
                  {components.map(ele=>{
                      return <li className="d-flex align-items-center gap-2 p-2 text-decoration-none shorttxt" role="button">
                      <i className="bi bi-circle vshorttxt"></i>
                      <span>{ele}</span>
                  </li>
                  })}
                  </ul>
                </div>
              </div>
            </li>
            <li>
            <div className="accordion-item border-0">
                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                  <button className="accordion-button px-2 bluetxt sidebar__listitems--main sidebar__listitems--btnmain collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#forms" aria-expanded="true" aria-controls="forms">
                    <i className="bi bi-journal-text me-2"></i>
                    <span className="fw-bolder">Forms</span>
                  </button>
                </h2>
                <div id="forms" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">
                  <ul  className="nav-content list-unstyled text-start ms-3">
                  {forms.map(ele=>{
                      return <li className="d-flex align-items-center gap-2 p-2 text-decoration-none shorttxt" role="button">
                      <i className="bi bi-circle vshorttxt"></i>
                      <span>{ele}</span>
                  </li>
                  })}
                  </ul>
                </div>
              </div>
            </li>
            <li>
            <div className="accordion-item border-0">
                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                  <button className="accordion-button px-2 bluetxt sidebar__listitems--main sidebar__listitems--btnmain collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#tables" aria-expanded="true" aria-controls="tables">
                    <i className="bi bi-layout-text-window-reverse me-2"></i>
                    <span className="fw-bolder">Tables</span>
                  </button>
                </h2>
                <div id="tables" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">
                  <ul  className="nav-content list-unstyled text-start ms-3">
                  {tables.map(ele=>{
                      return <li className="d-flex align-items-center gap-2 p-2 text-decoration-none shorttxt" role="button">
                      <i className="bi bi-circle vshorttxt"></i>
                      <span>{ele}</span>
                  </li>
                  })}
                  </ul>
                </div>
              </div>
            </li>
            <li>
            <div className="accordion-item border-0">
                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                  <button className="accordion-button px-2 bluetxt sidebar__listitems--main sidebar__listitems--btnmain collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#charts" aria-expanded="true" aria-controls="charts">
                    <i className="bi bi-bar-chart me-2"></i>
                    <span className="fw-bolder">Charts</span>
                  </button>
                </h2>
                <div id="charts" className="accordion-collapse collapse " aria-labelledby="panelsStayOpen-headingOne">
                  <ul  className="nav-content list-unstyled text-start ms-3">
                  {charts.map(ele=>{
                      return <li className="d-flex align-items-center gap-2 p-2 text-decoration-none shorttxt" role="button">
                      <i className="bi bi-circle vshorttxt"></i>
                      <span>{ele}</span>
                  </li>
                  })}
                  </ul>
                </div>
              </div>
            </li>
            <li>
            <div className="accordion-item border-0">
                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                  <button className="accordion-button px-2 bluetxt sidebar__listitems--main collapsed sidebar__listitems--btnmain" type="button" data-bs-toggle="collapse" data-bs-target="#icons" aria-expanded="true" aria-controls="icons">
                    <i className="bi bi-gem me-2"></i>
                    <span className="fw-bolder">Icons</span>
                  </button>
                </h2>
                <div id="icons" className="accordion-collapse collapse " aria-labelledby="panelsStayOpen-headingOne">
                  <ul  className="nav-content list-unstyled text-start ms-3">
                  {icons.map(ele=>{
                      return <li className="d-flex align-items-center gap-2 p-2 text-decoration-none shorttxt" role='button'>
                      <i className="bi bi-circle vshorttxt"></i>
                      <span>{ele}</span>
                  </li>
                  })}
                  </ul>
                </div>
              </div>
            </li>
            <li className='text-muted shorttxt text-start p-2'>PAGES</li>
            <li  className="d-flex gap-2 p-2  my-1 text-decoration-none sidebar__listitems--main" role='button'>
                <i className="bi bi-person"></i>
                <span className="fw-bolder">Profile</span>
            </li>
            <li  className="d-flex gap-2 p-2  my-1 text-decoration-none sidebar__listitems--main" role='button'>
                <i className="bi bi-question-circle"></i>
                <span className="fw-bolder">F.A.Q</span>
            </li>
            <li  className="d-flex gap-2 p-2  my-1 text-decoration-none sidebar__listitems--main" role='button'>
                <i className="bi bi-envelope"></i>
                <span className="fw-bolder">Contact</span>
            </li>
            <li  className="d-flex gap-2 p-2  my-1 text-decoration-none sidebar__listitems--main" role='button'>
                <i className="bi bi-card-list"></i>
                <span className="fw-bolder">Register</span>
            </li>
            <li  className="d-flex gap-2 p-2  my-1 text-decoration-none sidebar__listitems--main" role='button'>
                <i className="bi bi-box-arrow-in-right"></i>
                <span className="fw-bolder">Login</span>
            </li>
            <li  className="d-flex gap-2 p-2  my-1 text-decoration-none sidebar__listitems--main" role='button'>
                <i className="bi bi-dash-circle"></i>
                <span className="fw-bolder">Error404</span>
            </li>
            <li  className="d-flex gap-2 p-2  my-1 text-decoration-none sidebar__listitems--main" role='button'>
                <i className="bi bi-file-earmark"></i>
                <span className="fw-bolder">Blank</span>
            </li>
          </ul>
        </aside>
  )
}

export default SideBar