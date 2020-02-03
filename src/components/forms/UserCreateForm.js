import { Field, reduxForm } from "redux-form";

import React, { Component } from "react";
import axio from 'axios';

export class UserCreateForm extends Component {
  renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div class="form-group">
      <label>{label}</label>

      <input {...input} type={type} class="form-control" />
      {touched && error && <span>{error}</span>}
    </div>
  );

  constructor(props) {
      super(props);

      this.state = {
          name: '',
          department_id: ''
      }

      this.handleChange = this.handleChange.bind(this);
      this.submitFrom = this.submitFrom.bind(this);
  }

    handleChange(e){
        e.preventDefault();
        const name = e.target.name
        const value = e.target.value
        this.setState({[name]: value})
    }

    submitFrom(e){
        e.preventDefault();

        const userObj = {
            name: this.state.name,
            department_id: this.state.department_id
        };

        axio.post('http://localhost:5000/api/users', userObj)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err.response)
            });

        this.setState({
            name: '',
            department_id: ''
        })
    }

  renderDropDownField = ({label, meta: { touched, error } }) => (
    <div class="form-group">
      <label>{label}</label>
      <select
        class="form-control"
        id="exampleFormControlSelect1"
        onChange={e => {
          console.log(e.target.value);
        }}
      >
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </div>
  );
  render() {
    return (
      <form onSubmit={this.submitFrom}>
          <div className="form-group">
              <label>Name</label>
            <input type="text" name="name" className="form-control"  onChange={this.handleChange} value={this.state.name} placeholder="Name"/>
          </div>

          <div className="form-group">
              <label>Department ID</label>
             <input type="text" name="department_id" className="form-control" onChange={this.handleChange} value={this.state.department_id} placeholder="Department ID"/>
          </div>

          <div className="form-group">
             <button className="btn btn-success" type="submit">Submit</button>
          </div>
      </form>
    );
  }
}
const validate = values => {
  const errors = {};
  if (!values.username) {
    errors.username = "Required";
  } 

  const validate = values => {
    const errors = {};
    if (!values.departmentname) {
      errors.departmentname = "Required";
    }
  }
 


  return errors;
};

export default reduxForm({
  form: "ItemCreateForm",
  validate
})(UserCreateForm);
