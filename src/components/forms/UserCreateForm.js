import { Field, reduxForm } from "redux-form";

import React, { Component } from "react";

export class UserCreateForm extends Component {
  renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div class="form-group">
      <label>{label}</label>

      <input {...input} type={type} class="form-control" />
      {touched && error && <span>{error}</span>}
    </div>
  );

  onSubmit = formValues => {
    console.log(formValues);
  };

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
    const { handleSubmit, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
       
        <Field
          name="username"
          component={this.renderField}
          label=" Name"
        />
       
        <Field
          name="department "
          type="select"
          component={this.renderField}
          label="Department "
        />

        <Field
          name="Status"
          type="select"
          component={this.renderField}
          label="Status"
        />
       
        <div style={{visibility: 'hidden'}}>
          <button type="submit" disabled={submitting}>
            Submit
          </button>
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
