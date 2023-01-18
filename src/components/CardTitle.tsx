import React from 'react'

interface Props{
    title:string
    subtitle:string
}

function CardTitle(props: Props) {
  return (
    <span className="d-flex justify-content-between my-3">
                      <span className="d-flex align-items-center">
                        <h5 className="card-title bluetxt me-2">{props.title}</h5>
                        <h6 className="card-subtitle text-muted"> | {props.subtitle}</h6>
                      </span>
                      <div className="dropdown">
                        <button
                          className="bg-transparent border-0 "
                          type="button"
                          id="salesoptions"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="bi bi-three-dots"></i>
                        </button>
                        <ul
                          className="dropdown-menu dropdown-menu-end"
                          aria-labelledby="salesoptions"
                        >
                          <li className="dropdown-header text-start ">
                            <h6 className="fw-light">FILTER</h6>
                          </li>
                          <li>
                            <a className="dropdown-item shorttxt py-1" href="#">
                              Today
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item shorttxt py-1" href="#">
                              This month
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item shorttxt py-1" href="#">
                              This year
                            </a>
                          </li>
                        </ul>
                      </div>
                    </span>
  )
}

export default CardTitle