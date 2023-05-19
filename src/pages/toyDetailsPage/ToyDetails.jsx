import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import DetailsBanner from "./DetailsBanner";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const ToyDetails = () => {
  const toy = useLoaderData();
  const [seeMore, setSeeMore] = useState(false);
  console.log(toy);
  return (
    <div>
      <DetailsBanner></DetailsBanner>
      <div className="w-[90%] mx-auto my-8 ">
        <div className="flex justify-between gap-4 items-start font-mono">
          <div className="w-1/2">
            <img className="w-full" src={toy.image} alt="" />
          </div>
          <div className="w-1/2 my-auto space-y-4">
            <h1 className="text-4xl ">{toy.name}</h1>
            <h1 className="text-2xl font-bold"> ${toy.price}</h1>
            <Rating style={{ maxWidth: 200 }} value={toy.rating} readOnly={true} />

            <h1>
              <span className="text-lg font-semibold">Quantity:</span> {toy.quantity}
            </h1>

            <h1>
              <span className="text-xl font-semibold ">Sub-Category:</span>{" "}
              <span className="badge badge-primary">{toy.subCategory}</span>
            </h1>
            <p>
              <span className="text-2xl font-semibold">Description:</span>{" "}
              <span>
                {seeMore ? toy.description : toy.description.slice(0, 200) + "..."}
                <button className="text-primary underline" onClick={() => setSeeMore(!seeMore)}>
                  {seeMore ? "see less" : "see more"}
                </button>
              </span>
            </p>

            <div>
              <h1 className=" underline font-semibold text-xl">Seller Information</h1>

              <h1>
                <span className="text-lg font-semibold">Name:</span> {toy.sellerName}
              </h1>
              <h1>
                <span className="text-lg font-semibold">Email:</span> {toy.sellerEmail}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
