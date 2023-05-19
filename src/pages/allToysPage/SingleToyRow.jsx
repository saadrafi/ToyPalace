import React from "react";
import { Link } from "react-router-dom";

const SingleToyRow = ({ toy, index }) => {
  const { _id, name, price, quantity, sellerName, subCategory } = toy;
  return (
    <tr>
      <th>{index}</th>
      <td>
        <div>
          <div className="font-bold">{sellerName}</div>
        </div>
      </td>
      <td>{name}</td>
      <td>{subCategory.toUpperCase()}</td>
      <td>${price}</td>
      <td>{quantity}</td>
      <th>
        <Link to={`/toy/${_id}`}>
          <button className="btn btn-primary btn-xs">details</button>
        </Link>
      </th>
    </tr>
  );
};

export default SingleToyRow;
