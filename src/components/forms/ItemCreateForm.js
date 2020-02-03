import { Field, reduxForm } from "redux-form";

import React, { Component } from "react";

export class ItemCreateForm extends Component {
  renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
      <div class="col">
      <label>{label}</label>

      <input {...input} type={type} class="form-control" />
      {touched && error && <span>{error}</span>}
    </div>
    </div>
  );

  onSubmit = formValues => {
    console.log(formValues);
  };

  renderDropDownField = ({label, meta: { touched, error } }) => (
    <div >
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

  renderTextArea = ({ input, label, type, meta: { touched, error } }) =>{
      return(<div>
        <div class="col">
        <label>{label}</label>
  
        <textarea  {...input}  class="form-control" />
        {touched && error && <span>{error}</span>}
      </div>
      </div>)
  }
  render() {
    const { handleSubmit, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div className='form-row'>
        <Field
          name="itemcode"
          type="text"
          component={this.renderField}
          label="Item Code"
        /> 
      
        <Field 
          name="itemType id"
          component={this.renderDropDownField}
          label="Item Type ID"
        />
       
        <Field
          name="itemModel id"
          type="select"
          component={this.renderDropDownField}
          label="Item Model ID"
        />
        <Field
          name="serialno"
          type="text"
          component={this.renderField}
          label="Serial No"
        />
        <Field
          name="ram"
          type="text"
          component={this.renderField}
          label="RAM"
        />
        <Field
          name="hdd"
          type="text"
          component={this.renderField}
          label="HDD"
        />
        <Field
          name="os"
          type="text"
          component={this.renderDropDownField}
          label="Operating System"
        />
        <Field
          name="licenseStatus"
          type="text"
          component={this.renderDropDownField}
          label="License Status"
        />
        <Field
          name="productKey"
          type="text"
          component={this.renderField}
          label="Product Key"
        />
        <Field
          name="purchaseDate"
          type="text"
          component={this.renderField}
          label="Purchase Date"
        />
        <Field
          name="warrentyExpireDate"
          type="text"
          component={this.renderField}
          label="Warrenty Expire Date"
        />
        <Field
          name="vendor"
          type="text"
          component={this.renderDropDownField}
          label="Vendor"
        />
        <Field
          name="batterySerialNo"
          type="text"
          component={this.renderField}
          label="Battery Serial No:"
        />
        <Field
          name="chagerCT"
          type="text"
          component={this.renderField}
          label="Charger CT No:"
        />
        <Field
          name="username"
          type="text"
          component={this.renderDropDownField}
          label="UserName"
        />
         <Field
          name="Invoice Number"
          type="text"
          component={this.renderField}
          label="Invoice Number"
        />
         <Field
         
       
          name="Discription"
          type="text"
          component={this.renderTextArea}
          label="Discription"
        />
      
         <Field
          name="Reson"
          type="text"
          component={this.renderField}
          label="Reson"
        />
        </div>
        <div className='modal-footer' >
          <button className='btn btn-success ' type="submit" disabled={submitting}>
            Submit
          </button>
        </div>
      </form>
    );
  }
}
const validate = values => {
  const errors = {};
  if (!values.itemcode) {
    errors.itemcode = "Required";
  } 
 

  return errors;
};

export default reduxForm({
  form: "ItemCreateForm",
  validate
})(ItemCreateForm);
