import React, { Component } from "react";
import {connect} from 'react-redux';


import {fetchUser} from '../../actions/user';
import UserCreateForm from '../forms/UserCreateForm';
import '../../style.css';
// /, backgroundColor:  'rgb(239,240,241)'

export class Users extends Component {


componentDidMount() {
  this.props.fetchUser();
}




  render() {
    return (
      <div style={{marginLeft: '64px'}}>
      <div
        className='container-fluid'
      >
        <div
          className="card"
          style={{
            border: "none",
            padding: '30px',
            marginTop: '20px'
          }}
        >
          <div className="row  mt-3" >
            <div className="col">
              <h2 className="ui header">
                <i className="circular  inverted users  icon"></i>
                <div className="content">
                  User management
                  <div className="sub header">
                    Manage user accounts and store
                  </div>
                </div>
              </h2>
            </div>
          </div>
          <div className="row  mt-3" style={{ paddingBottom: 10 }}>
            <div className="col tableContainer">
              <button
                className="btn btn-success"
                type="button"
                data-toggle="modal"
                data-target="#exampleModalCenter"
              >
                <span style={{ paddingRight: 2 }}>
                  <i className="user plus icon"></i>
                </span>
                Add a user
              </button>

              <div
                className="modal fade"
                id="exampleModalCenter"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalCenterTitle"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLongTitle">
                        Add a user
                      </h5>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <UserCreateForm/>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-danger"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" className="btn btn-success">
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row  mt-3">
            <div className="col">
              <div className="ui buttons">
                <button className="btn btn-secondary">
                  <span>
                    <i className="file alternate icon"></i>
                  </span>
                  CSV
                </button>
                <button className="btn btn-secondary" style={{ marginLeft: 8 }}>
                  <span>
                    <i className="file alternate icon"></i>
                  </span>
                  Excel
                </button>
                <button className="btn btn-secondary" style={{ marginLeft: 8 }}>
                  <span>
                    <i className="print icon"></i>
                  </span>
                  Print
                </button>
              </div>
            </div>
            <div className="col">
              <div className="ui category search">
                <div className="ui icon input float-right">
                  <input
                    className="prompt"
                    type="text"
                    placeholder="Search user..."
                  />
                  <i className="search icon"></i>
                </div>
                <div className="results"></div>
              </div>
            </div>
          </div>

          <div className="row  mt-3">
            <div className="col">
              <table className="ui celled  table table-bordered ">
                <thead>
                  <tr>
                    <th>User ID</th>
                    <th>Name</th>
                    <th>Department</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="positive">
                    <td>sb-454844-4548</td>
                    <td>Name</td>
                    <td>None</td>
                    <td>
                      <i className="icon checkmark"></i>
                      <span className="badge badge-success">Approved</span>
                    </td>
                    <td>
                      <span>
                        <button
                          type="button"
                          className="btn btn-outline-danger btn-sm"
                        >
                          <i className="trash icon"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-primary btn-sm"
                          style={{ marginLeft: 5 }}
                        >
                          <i className="pencil alternate icon"></i>
                        </button>
                      </span>
                    </td>
                  </tr>
                  <tr className="positive">
                    <td>sb-454844-4548</td>
                    <td>Name</td>
                    <td>None</td>
                    <td>
                      <i className="icon checkmark"></i>
                      <span className="badge badge-success">Approved</span>
                    </td>
                    <td>
                      <span>
                        <button
                          type="button"
                          className="btn btn-outline-danger btn-sm"
                        >
                          <i className="trash icon"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-primary btn-sm"
                          style={{ marginLeft: 5 }}
                        >
                          <i className="pencil alternate icon"></i>
                        </button>
                      </span>
                    </td>
                  </tr>
                  <tr className="positive">
                    <td>sb-454844-4548</td>
                    <td>Name</td>
                    <td>None</td>
                    <td>
                      <i className="icon checkmark"></i>
                      <span className="badge badge-success">Approved</span>
                    </td>
                    <td>
                      <span>
                        <button
                          type="button"
                          className="btn btn-outline-danger btn-sm"
                        >
                          <i className="trash icon"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-primary btn-sm"
                          style={{ marginLeft: 5 }}
                        >
                          <i className="pencil alternate icon"></i>
                        </button>
                      </span>
                    </td>
                  </tr>
                  <tr className="positive">
                    <td>sb-454844-4548</td>
                    <td>Name</td>
                    <td>None</td>
                    <td>
                      <i className="icon checkmark"></i>
                      <span className="badge badge-success">Approved</span>
                    </td>
                    <td>
                      <span>
                        <button
                          type="button"
                          className="btn btn-outline-danger btn-sm"
                        >
                          <i className="trash icon"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-primary btn-sm"
                          style={{ marginLeft: 5 }}
                        >
                          <i className="pencil alternate icon"></i>
                        </button>
                      </span>
                    </td>
                  </tr>
                  <tr className="positive">
                    <td>sb-454844-4548</td>
                    <td>Name</td>
                    <td>None</td>
                    <td>
                      <i className="icon checkmark"></i>
                      <span className="badge badge-success">Approved</span>
                    </td>
                    <td>
                     
                      <span>
                        <button
                          type="button"
                          className="btn btn-outline-danger btn-sm"
                        >
                          <i className="trash icon"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-primary btn-sm"
                          style={{ marginLeft: 5 }}
                        >
                          <i className="pencil alternate icon"></i>
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
    );
  }
}


const mapStateToProps = state => {
  return {
      user: state.user

  }
}


export default connect(mapStateToProps, {fetchUser})( Users);
