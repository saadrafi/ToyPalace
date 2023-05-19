import React from "react";
import { Link } from "react-router-dom";

const SingleMyToy = ({ toy, index }) => {
  const { _id, name, image, price, quantity, subCategory, description } = toy;
  return (
    <tr>
      <th>{index}</th>

      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={image} alt="toy image" />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
          </div>
        </div>
      </td>

      <td>${price}</td>
      <td>{quantity}</td>
      <td>{subCategory.toUpperCase()}</td>
     
        <td>
            <div className="flex flex-col items-center">
                <div className="text-sm text-gray-500">{description.slice(0,50)}</div>
                <Link to={`/toy/${_id}`}>
                    <button className="btn btn-link btn-xs">read more</button> 
                </Link>
                
            </div>
        </td>
      
      <th className=" space-x-2">
        <Link>
          <button className="btn btn-primary btn-xs">update</button>
        </Link>
        <Link>
          <button className="btn btn-error btn-xs">delete</button>
        </Link>
      </th>
    </tr>
  );
};

export default SingleMyToy;
