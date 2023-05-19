import React, { useEffect } from "react";
import SingleToyRow from "./SingleToyRow";
import { useLoaderData } from "react-router-dom";

const AllToys = () => {
  const toyData = useLoaderData();

  return (
    <div className="w-[90%] mx-auto my-8 font-serif">
      <h1 className="text-4xl text-center text-primary my-7 font-bold animate-bounce">All Toys</h1>
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Seller</th>
            <th>Toy</th>
            <th>Sub-Category</th>
            <th>Price</th>
            <th>Quantity</th>
            <th></th>
          </tr>
        </thead>

        {/* body */}
        <tbody>
          {toyData.map((toy, index) => (
            <SingleToyRow toy={toy} key={toy._id} index={index + 1}></SingleToyRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllToys;
