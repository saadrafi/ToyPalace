import React from 'react';


const SingleToyRow = ({toy,index}) => {
    const {name,price,quantity,sellerName,subCategory} = toy;
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
        <td>{price}</td>
        <td>${quantity}</td>
        <th>
          <button className="btn btn-primary btn-xs">details</button>
        </th>
      </tr>
    );
};

export default SingleToyRow;