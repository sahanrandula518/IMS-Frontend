import React, { Component } from 'react';

import OperatingSystemCreateForm from '../forms/OperatingSystemCreateForm';

export class OperatingSystem extends Component {
  render() {
    return (
      <div
        style={{
         marginLeft: '64px'
        }}
      >
        <div className='container-fluid'>
        <div
          className='card'
          style={{
            padding: 30,
            border: 'none',
            marginTop: '25px'
          }}
        >
          <div className='row mt-3' >
            <div className='col'>
              <h2 className='ui header'>
                <i className='circular inverted windows  icon'></i>
                <div className='content'>
                 Operating System
                  <div className='sub header'>Manage operating system and store</div>
                </div>
              </h2>
            </div>
          </div>
          <div className='row mt-3'>
            <div className='col tableContainer'>
              <button
                className='btn btn-success'
                data-toggle='modal'
                data-target='#exampleModalCenter'
              >
                <span style={{ paddingRight: 2 }}>
                  <i className='plus  icon'></i>
                </span>
                Add os
              </button>
              <div
                className='modal fade'
                id='exampleModalCenter'
                tabindex='-1'
                role='dialog'
                aria-labelledby='exampleModalCenterTitle'
                aria-hidden='true'
              >
                <div className='modal-dialog modal-dialog-centered' role='document'>
                  <div className='modal-content'>
                    <div className='modal-header'>
                      <h5 className='modal-title' id='exampleModalLongTitle'>
                        Operating System Details
                      </h5>
                      <button
                        type='button'
                        className='close'
                        data-dismiss='modal'
                        aria-label='Close'
                      >
                        <span aria-hidden='true'>&times;</span>
                      </button>
                    </div>
                    <div className='modal-body'>
                      <OperatingSystemCreateForm/>
                    </div>
                    <div className='modal-footer'>
                      <button
                        type='button'
                        className='btn btn-danger'
                        data-dismiss='modal'
                      >
                        Close
                      </button>
                      <button type='button' className='btn btn-success'>
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row mt-3'>
            <div className='col'>
              <div className='ui buttons'>
                <button className='btn btn-secondary'>
                  <span>
                    <i className='file alternate icon'></i>
                  </span>
                  CSV
                </button>
                <button className='btn btn-secondary' style={{ marginLeft: 8 }}>
                  <span>
                    <i className='file alternate icon'></i>
                  </span>
                  Excel
                </button>
                <button className='btn btn-secondary' style={{ marginLeft: 8 }}>
                  <span>
                    <i className='print icon'></i>
                  </span>
                  Print
                </button>
              </div>
            </div>
            <div className='col'>
              <div className='ui category search'>
                <div className='ui icon input float-right'>
                  <input
                    className='prompt'
                    type='text'
                    placeholder='Search item model...'
                  />
                  <i className='search icon'></i>
                </div>
                <div className='results'></div>
              </div>
            </div>
          </div>

          <div className='row mt-3'>
            <div className='col'>
              <table className='ui celled  table table-bordered'>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Operating System</th>
                    <th>Build version</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='positive'>
                    <td>Jimmy</td>
                    <td>Operating</td>
                    <td>version</td>
                    <td>
                      <span className='badge badge-success'>Active</span> /{' '}
                      <span className='badge badge-secondary'>Inactive</span>
                    </td>
                    <td>
                      <span>
                        <button
                          type='button'
                          className='btn btn-outline-danger btn-sm'
                        >
                          <i className='trash icon'></i>
                        </button>
                        <button
                          type='button'
                          className='btn btn-outline-primary btn-sm'
                          style={{ marginLeft: 5 }}
                        >
                          <i className='pencil alternate icon'></i>
                        </button>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div></div>
    );
  }
}

export default OperatingSystem;
