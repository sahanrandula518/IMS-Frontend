import React, { Component } from "react";

import ItemCreateForm from '../forms/ItemCreateForm';
import "../../style.css";

export class Item extends Component {
  render() {
    return (
      <div
        style={{
          marginLeft: "64px"
        }}
      >
        <div className="container-fluid">
          <div
            className="card"
            style={{
              padding: 30,
              marginTop: "25px",
              border: "none"
            }}
          >
            <div className="row mt-3">
              <div className="col">
                <h2 className="ui header">
                  <i class="circular inverted wrench icon"></i>
                  <div className="content">
                    Item
                    <div className="sub header">
                      Manage Item accounts and store
                    </div>
                  </div>
                </h2>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col tableContainer">
                <button
                  className="btn btn-success"
                  data-toggle="modal"
                  data-target="#exampleModalCenter"
                >
                  <span style={{ paddingRight: 2 }}>
                    <i class="wrench  icon"></i>
                  </span>
                  Add a Item
                </button>
                <div
                  class="modal fade"
                  id="exampleModalCenter"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalCenterTitle"
                  aria-hidden="true"
                >
                  <div
                    class="modal-dialog modal-dialog-centered"
                    role="document"
                  >
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">
                         Add Item
                        </h5>
                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                      <ItemCreateForm/>
                      </div>
                      {/* <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-danger"
                          data-dismiss="modal"
                        >
                          Close
                        </button> */}
                        {/* <button type="button" class="btn btn-success">
                          Save changes
                        </button> */}
                      {/* </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col">
                <div className="ui buttons">
                  <button className="btn btn-secondary">
                    <span>
                      <i class="file alternate icon"></i>
                    </span>
                    CSV
                  </button>
                  <button
                    className="btn btn-secondary"
                    style={{ marginLeft: 8 }}
                  >
                    <span>
                      <i class="file alternate icon"></i>
                    </span>
                    Excel
                  </button>
                  <button
                    className="btn btn-secondary"
                    style={{ marginLeft: 8 }}
                  >
                    <span>
                      <i class="print icon"></i>
                    </span>
                    Print
                  </button>
                </div>
              </div>
              <div className="col">
                <div class="ui category search">
                  <div class="ui icon input float-right">
                    <input
                      class="prompt"
                      type="text"
                      placeholder="Search item..."
                    />
                    <i class="search icon"></i>
                  </div>
                  <div class="results"></div>
                </div>
              </div>
            </div>

            <div className="row mt-3" style={{   overflow: 'auto'}}>
              <div className="col">
                <div className="responsive-table">
                  <table className="ui celled  table table-bordered">
                    <thead>
                      <tr>
                        <th>Code</th>
                        <th>Type_ID</th>
                        <th>Model_ID</th>
                        <th>Serial_No</th>
                        <th>Ram</th>
                        <th>Hdd</th>
                        <th>OS ID</th>
                        <th>License</th>
                        <th>Product_Key</th>
                        <th>Purchased_Date</th>
                        <th>Warrenty-expire-date</th>
                        <th>Vender-ID</th>
                        <th>Battery-Serial-no:</th>
                        <th>Charge_Ct_No:</th>
                        <th>User_ID</th>
                        <th>Invoice Number</th>
                       
                        <th>Status</th>
                        <th style={{width:200}}>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="positive">
                        <td>Test1</td>
                        <td>4</td>
                        <td>Ele</td>
                        <td>Ele</td>
                        <td>Ele</td>
                        <td>Ele</td>
                        <td>Ele</td>
                        <td>Ele</td>
                        <td>Ele</td>
                        <td>Ele</td>
                        <td>Ele</td>
                        <td>Ele</td>
                        <td>Ele</td>
                        <td>Ele</td>
                        <td>Ele</td>
                        <td>Ele</td>
                       
                        <td>
                    
                          <span class="badge badge-success">Success</span>
                        </td>
                        <td >
                          <span>
                            <button
                              type="button"
                              class="btn btn-outline-danger btn-sm"
                            >
                              <i class="trash icon"></i>
                            </button>
                            <button
                              type="button"
                              class="btn btn-outline-primary btn-sm"
                            
                            >
                              <i class="pencil alternate icon"></i>
                            </button>
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
