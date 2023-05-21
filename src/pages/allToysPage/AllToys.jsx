import React, { useEffect, useState } from "react";
import SingleToyRow from "./SingleToyRow";
import { useLoaderData } from "react-router-dom";
import NoData from "../../shared/NoData";
import { data } from "autoprefixer";
import setTitle from "../../titleHook/TitleHook";

const AllToys = () => {
  setTitle("All Toys");
  const [toyData, setToyData] = useState(useLoaderData());
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    fetch(`https://legoserver-saadrafi.vercel.app/alltoys?search=${searchText}`)
      .then((res) => res.json())
      .then((data) => setToyData(data));
  };

  return (
    <div className="w-[90%] mx-auto my-8 font-serif">
      <h1 className="text-4xl text-center text-primary my-7 font-bold animate-bounce">All Toys</h1>
      <div className=" flex justify-center my-7 gap-3">
        <input
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          type="text"
          placeholder="Type here"
          className="input input-bordered input-primary w-full max-w-xs"
        />

        <button onClick={handleSearch} className="btn btn-outline btn-primary">
          Search
        </button>
      </div>
      {toyData?.length === 0 ? (
        <NoData></NoData>
      ) : (
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
      )}
    </div>
  );
};

export default AllToys;
