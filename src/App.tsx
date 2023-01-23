import React, {useRef } from "react";
import "./App.css";
import CardTitle from "./components/CardTitle";
import LineChart from "./components/LineChart";
import PieChart from "./components/DoughnutChart";
import RadarChart from "./components/RadarChart";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

const arr5 = ["", "", "", "", ""];

function App() {
  const sidebarRef = useRef<HTMLElement>(null);
  const mainRef = useRef<HTMLElement>(null);

  const toggleSidebar = () => {
    if (sidebarRef.current !== null && mainRef.current !== null) {
      sidebarRef.current.classList.toggle("sidebar--hidden");
      mainRef.current.classList.toggle("main--sidebarvisible");
    }
  };

  return (
    <div className="App px-3 px-md-0">
      <NavBar toggleSidebar={toggleSidebar} />
      <main className="d-flex main main--sidebarvisible" ref={mainRef}>
        <SideBar sidebarRef={sidebarRef} />
        <section className="dashboard px-md-4 py-3 px-0 flex-fill col-12">
          <div className="px-2 px-md-0">
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
          <div className="dashboard__contentparent d-flex align-items-start flex-lg-row flex-column" >
            <div className="dashboard__contentparent__center d-flex col-lg-8 col-12 flex-wrap">
              <div className="px-0 px-md-2 col-md-6 col-12 mb-4 pe-md-3">
                <div className="card shadow-sm border-0 px-2 pb-2">
                  <div className="card-body">
                    <CardTitle title="Sales" subtitle="Today" />
                    <div className="d-flex align-items-center">
                      <span className="dashboard__iconcvr dashboard__iconcvr--blue rounded-circle d-flex align-items-center justify-content-center">
                        <i className="bi bi-cart"></i>
                      </span>
                      <span className="text-start ms-2">
                        <h4 className="mb-0 bluetxt">145</h4>
                        <span className="shorttxt">
                          <span className="text-success fw-bold">12%</span>
                          <span className="ms-2 fw-light">Increase</span>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-0 px-md-2 col-md-6 col-12 ps-md-3 mb-4">
                <div className="card shadow-sm border-0 px-2 pb-2">
                  <div className="card-body">
                    <CardTitle title="Revenue" subtitle="This Month" />
                    <div className="d-flex align-items-center">
                      <span className="dashboard__iconcvr dashboard__iconcvr--green rounded-circle d-flex align-items-center justify-content-center">
                        <i className="bi bi-currency-dollar"></i>
                      </span>
                      <span className="text-start ms-2">
                        <h4 className="mb-0 bluetxt">$3,264</h4>
                        <span className="shorttxt">
                          <span className="text-success fw-bold">8%</span>
                          <span className="ms-2 fw-light">Increase</span>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-0 px-md-2 col-12 mb-4">
                <div className="card shadow-sm border-0 px-2 pb-2">
                  <div className="card-body">
                    <CardTitle title="Customers" subtitle="This Year" />
                    <div className="d-flex align-items-center">
                      <span className="dashboard__iconcvr dashboard__iconcvr--orange rounded-circle d-flex align-items-center justify-content-center">
                        <i className="bi bi-people"></i>
                      </span>
                      <span className="text-start ms-2">
                        <h4 className="mb-0 bluetxt">1244</h4>
                        <span className="shorttxt">
                          <span className="text-danger fw-bold">12%</span>
                          <span className="ms-2 fw-light">Decrease</span>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-0 px-md-2 col-12">
                <div className="card shadow-sm border-0 mb-4">
                  <div className="card-body">
                    <CardTitle title="Reports" subtitle="Today" />
                    <LineChart />
                  </div>
                </div>
              </div>
              <div className="px-0 px-md-2 col-12">
                <div className="card shadow-sm border-0 mb-4">
                  <div className="card-body">
                    <CardTitle title="Recent Sales" subtitle="Today" />
                    <div className="d-flex justify-content-between align-items-center flex-wrap flex-md-nowrap">
                      <span className="d-flex align-items-center">
                        <select
                          className="form-select form-select-sm w-auto me-1"
                          aria-label="Default select example"
                        >
                          <option selected value="5">
                            5
                          </option>
                          <option value="10">10</option>
                          <option value="15">15</option>
                          <option value="20">20</option>
                          <option value="25">25</option>
                        </select>
                        <span className="shorttxt text">entries per page</span>
                      </span>
                      <input className="p-1" placeholder="Search..." />
                    </div>
                    <table className="table bg-white table-borderless shorttxt my-2 text-start">
                      <thead>
                        <tr className="bgbluetheme">
                          <th>#</th> <th>Customer</th> <th>Product</th>
                          <th>Price</th> <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {arr5.map((ele) => {
                          return (
                            <tr>
                              <th>#2049</th>
                              <td>Ashleigh Langosh</td>
                              <td className="text-primary">
                                {" "}
                                At recusandae consectetur
                              </td>
                              <td>$147</td>
                              <td>
                                <span className="badge bg-success">
                                  Approved
                                </span>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                    <div className="fw-light text-start border-top pt-3 pb-1">
                      Showing 1 to 5 of 5 entries
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-0 px-md-2 col-12">
                <div className="card shadow-sm border-0 mb-4">
                  <div className="card-body">
                    <CardTitle title="Top Selling" subtitle="Today" />
                    <table className="table bg-white table-borderless shorttxt my-2 text-start">
                      <thead>
                        <tr className="bgbluetheme">
                          <th>Preview</th> <th>Product</th> <th>Price</th>
                          <th>Sold</th> <th>Revenue</th>
                        </tr>
                      </thead>
                      <tbody>
                        {arr5.map((ele) => {
                          return (
                            <tr>
                              <td>
                                <img
                                  className="shortimg"
                                  src="https://bootstrapmade.com/demo/templates/NiceAdmin/assets/img/product-1.jpg"
                                  alt="product-shoe"
                                />
                              </td>
                              <td className="text-primary fw-bold">
                                Ut inventore ipsa voluptas nulla
                              </td>
                              <td>$64</td>
                              <td className="fw-bold">124</td>
                              <td>$5,828</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="dashboard__contentparent__right  col-12 col-lg-4 ms-lg-3">
              <div className="card shadow-sm border-0 col-12 col-lg-11 mb-4">
                <div className="card-body">
                  <CardTitle title="Recent Activity" subtitle="Today" />
                  <div className="dashboard__activity">
                    <div className="d-flex dashboard__activitysteps text-start shorttxt ">
                      <span className="text-muted w-25 me-4">32 min</span>
                      <div className="dashboard__activitystep  d-flex justify-content-center">
                        <i className="bi bi-circle-fill shorttxt dashboard__activitystepper text-success"></i>
                      </div>
                      <span className="ms-4">
                        Quia quae rerum <strong>explicabo officiis</strong>
                        beatae
                      </span>
                    </div>
                    <div className="d-flex dashboard__activitysteps text-start shorttxt ">
                      <span className="text-muted w-25 me-4">56 min</span>
                      <div className="dashboard__activitystep  d-flex justify-content-center">
                        <i className="bi bi-circle-fill shorttxt dashboard__activitystepper text-danger"></i>
                      </div>
                      <span className="ms-4">
                        Voluptatem blanditiis blanditiis eveniet
                      </span>
                    </div>
                    <div className="d-flex dashboard__activitysteps text-start shorttxt ">
                      <span className="text-muted w-25 me-4">2 hrs</span>
                      <div className="dashboard__activitystep  d-flex justify-content-center">
                        <i className="bi bi-circle-fill shorttxt dashboard__activitystepper text-primary"></i>
                      </div>
                      <span className="ms-4">
                        Voluptates corrupti molestias voluptatem
                      </span>
                    </div>
                    <div className="d-flex dashboard__activitysteps text-start shorttxt ">
                      <span className="text-muted w-25 me-4">1 day</span>
                      <div className="dashboard__activitystep  d-flex justify-content-center">
                        <i className="bi bi-circle-fill shorttxt dashboard__activitystepper text-info"></i>
                      </div>
                      <span className="ms-4">
                        Tempore autem <strong>occaecati voluptatem</strong>{" "}
                        tempore
                      </span>
                    </div>
                    <div className="d-flex dashboard__activitysteps text-start shorttxt ">
                      <span className="text-muted w-25 me-4">2 days</span>
                      <div className="dashboard__activitystep  d-flex justify-content-center">
                        <i className="bi bi-circle-fill shorttxt dashboard__activitystepper text-warning"></i>
                      </div>
                      <span className="ms-4">
                        Est sit eum reiciendis exercitationem
                      </span>
                    </div>
                    <div className="d-flex dashboard__activitysteps text-start shorttxt ">
                      <span className="text-muted w-25 me-4">4 weeks</span>
                      <div className="dashboard__activitystep  d-flex justify-content-center">
                        <i className="bi bi-circle-fill shorttxt dashboard__activitystepper text-secondary"></i>
                      </div>
                      <span className="ms-4">
                        Est sit eum reiciendis exercitationem
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card shadow-sm border-0 col-12 col-lg-11 mb-4">
                <div className="card-body">
                  <CardTitle title="Budget Report" subtitle="This Month" />
                  <RadarChart />
                </div>
              </div>
              <div className="card shadow-sm border-0 col-12 col-lg-11 mb-4">
                <div className="card-body">
                  <CardTitle title="Website Traffic" subtitle="Today" />
                  <PieChart />
                </div>
              </div>
              <div className="card shadow-sm border-0 col-12 col-lg-11 mb-4">
                <div className="card-body">
                  <CardTitle title="News & Updates" subtitle="Today" />
                  {arr5.map((ele) => {
                    return (
                      <div className="d-flex gap-2 mb-2">
                        <img
                          className="shortimg rounded-2"
                          src="https://bootstrapmade.com/demo/templates/NiceAdmin/assets/img/news-1.jpg"
                          alt="news"
                        />
                        <span className="text-start">
                          <h6 className="bluetxt">
                            Nihil blanditiis at in nihil autem
                          </h6>
                          <p className="shorttxt fw-light">
                            Sit recusandae non aspernatur laboriosam. Quia enim
                            eligendi sed ut harum...
                          </p>
                        </span>
                      </div>
                    );
                  })}
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
