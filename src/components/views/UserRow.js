/*
    SAHAN

 */

import React from "react";
import axio from "axios";

class UserRow extends React.Component{

    constructor(props){
        super(props);
        this.deleteUser = this.deleteUser.bind(this);
    }

    componentWillMount() {
        axio.get('http://localhost:5000/api/users')
            .then(res => {
                this.setState({
                    users: res.data
                })
                console.log(res.data)
            })
            .catch(res => {
                console.log(res.error)
            });
    }

    deleteUser(){
        axio.delete('http://localhost:5000/api/users/' + this.props.obj.id)
            .then(response => {
                console.log("User Deleted" + response.data);
            })
            .catch(error => {
                console.log(error.response)
            });
    }

    render() {
        return(
            <tr className="positive">
                <td>{this.props.obj.id}</td>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.department_id}</td>
                <td>
                    <i className="icon checkmark"></i>
                    <span className="badge badge-success">Approved</span>
                </td>
                <td>
                      <span>
                        <button type="button" onClick={this.deleteUser} className="btn btn-outline-danger btn-sm"><i className="trash icon"></i></button>
                        <button type="button" className="btn btn-outline-primary btn-sm" style={{ marginLeft: 5 }}><i className="pencil alternate icon"></i></button>
                      </span>
                </td>
            </tr>


        )
    }
}
export default UserRow;
