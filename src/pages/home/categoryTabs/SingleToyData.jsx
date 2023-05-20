import { Rating } from "@smastrom/react-rating";
import React from "react";
import { Link } from "react-router-dom";

const SingleToyData = ({ toy }) => {
  const { _id, name, image, rating, price } = toy;
  return (
    <div className="card w-full shadow-md card-bordered">
      <figure className="h-48">
        <img src={image} className="w-full h-full" alt="toyimg" />
      </figure>
      <div className="card-body font-serif h-60 space-y-3">
        <h2 className="card-title">{name}</h2>
        <p className="font-semibold">${price}</p>
        <Rating style={{ maxWidth: 140 }} value={rating} readOnly={true} />
        <div className="card-actions  justify-end">
          <Link to={`/toy/${_id}`} className="btn btn-outline btn-primary btn-wide">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleToyData;
