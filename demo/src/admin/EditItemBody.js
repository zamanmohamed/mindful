import React from "react";
import { Link } from "react-router-dom";

const EditItemBody = (props) => {
  return (
    <tbody>
      <tr>
        <th scope="row"></th>
        <td>{props.u.Firstname}</td>
        <td>{props.u.lastname}</td>
        <td>{props.u.email}</td>
        <td>{props.u.password}</td>
        <td>
          <Link to={`/edituser/${props.u.id}`}>
            <button type="button" class="btn btn-danger">
              Edit
            </button>
          </Link>
        </td>
      </tr>
    </tbody>
  );
};

export default EditItemBody;
