import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../components/provider/AuthProvider";
import SingleMyToy from "./SingleMyToy";
import Swal from "sweetalert2";
import { notifyWithTitle } from "../../shared/alert";
import NoData from "../../shared/NoData";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const [count, setCount] = useState(0);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#FBBF24",
      cancelButtonColor: "#374151",
      confirmButtonText: "Yes, Delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/deletetoy/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              notifyWithTitle("Deleted!", "Your toy has been deleted.");

              setCount(count - 1);
            }
          });
      }
    });
  };

  useEffect(() => {
    fetch(`http://localhost:5000/mytoys?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        setCount(data.length);
      });
  }, [count]);
  return toys?.length === 0 ? (
    <NoData></NoData>
  ) : (
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
            <SingleMyToy
              toy={toy}
              key={toy._id}
              index={index + 1}
              handleDelete={handleDelete}
            ></SingleMyToy>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyToys;
