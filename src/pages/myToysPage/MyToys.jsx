import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../components/provider/AuthProvider";
import SingleMyToy from "./SingleMyToy";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const [count, setCount] = useState(0);
  console.log(count);

  useEffect(() => {
    fetch(`http://localhost:5000/mytoys?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        setCount(data.length);
      });
  }, []);
  return (
    <div className="w-[90%] mx-auto my-8 font-serif">
      <h1 className="text-4xl text-center text-primary my-7 font-bold animate-bounce">My Toys</h1>
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th></th>

            <th>Toy</th>

            <th>Price</th>
            <th>Quantity</th>
            <th>Sub-Category</th>
            <th className="text-center">Description</th>
            <th>Action</th>
          </tr>
        </thead>

        {/* body */}
        <tbody>
          {toys.map((toy, index) => (
            <SingleMyToy toy={toy} key={toy._id} index={index + 1}></SingleMyToy>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyToys;
