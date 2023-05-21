import React, { useState } from "react";
import { FaDollarSign } from "react-icons/fa";
import { useLoaderData, useNavigate } from "react-router-dom";
import CreatableSelect from "react-select/creatable";
import { options } from "../addtoypage/menuOption";
import { notifyError, notifyRequired, notifySuccess, notifyWithTitle } from "../../shared/alert";
import Swal from "sweetalert2";
import setTitle from "../../titleHook/TitleHook";

const UpdateToy = () => {
  const toy = useLoaderData();
  const [selectSubCategory, setSubCategory] = useState(toy.subCategory);
  setTitle("Update");
  const navigate = useNavigate();

  const updateToyData = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const price = parseFloat(form.price.value);
    const quantity = parseInt(form.quantity.value);
    const description = form.description.value;
    const subCategory = selectSubCategory.value;
    const image = form.toyimage.value;
    const rating = form.rating.value;
    // validate form
    if (!name || !price || !quantity || !description || !image || !rating) {
      notifyRequired("fill up all form");
      return;
    } else if (!subCategory) {
      notifyRequired("select subcategory");
      return;
    } else if (rating > 5) {
      notifyRequired("rating must be equal or less than 5");
      return;
    } else if (price < 0) {
      notifyRequired("price must be equal or greater than 0");
      return;
    } else if (quantity < 0) {
      notifyRequired("quantity must be equal or greater than 0");
      return;
    }

    const toydata = {
      name,
      price,
      quantity,
      description,
      subCategory,
      image,
      rating,
    };
    //
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#FBBF24",
      cancelButtonColor: "#374151",
      confirmButtonText: "Yes, update it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://legoserver-saadrafi.vercel.app/updatetoy/${toy._id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(toydata),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              notifyWithTitle("Updated!", "Data updated successfully");
              navigate(-1);
            }
          })
          .catch((err) => {
            notifyError(err.message);
          });
      }
    });
  };

  return (
    <div className="w-[90%] mx-auto">
      <h1 className="text-4xl underline text-center text-primary my-5 font-bold">Update TOY</h1>
      <form onSubmit={updateToyData}>
        <div className="grid md:grid-cols-2 gap-3">
          <div className=" space-y-1">
            <label className="text-lg text-yellow-700">name:</label>
            <input
              type="text"
              name="name"
              defaultValue={toy.name}
              className="w-full rounded-lg border input-primary p-2 pe-12 text-sm shadow-sm"
              placeholder="toy name"
            />
          </div>
          <div className=" space-y-1">
            <label className="text-lg text-yellow-700">price:</label>
            <div className="relative">
              <input
                step="0.01"
                type="number"
                name="price"
                defaultValue={toy.price}
                className="w-full rounded-lg border input-primary p-2 pe-12 text-sm shadow-sm"
                placeholder="price"
              />
              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <FaDollarSign />
              </span>
            </div>
          </div>
          <div className=" space-y-1">
            <label className="text-lg text-yellow-700">quantity:</label>
            <input
              type="number"
              name="quantity"
              defaultValue={toy.quantity}
              className="w-full rounded-lg border input-primary p-2 text-sm shadow-sm"
              placeholder="quantity"
            />
          </div>
          <div className=" space-y-1">
            <label className="text-lg text-yellow-700">sub-category:</label>

            <CreatableSelect
              isClearable
              defaultValue={toy.subCategory}
              defaultInputValue={selectSubCategory}
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  borderColor: state.isFocused ? "#E0A82E" : "#E0A82E",
                  borderWidth: state.isFocused ? 2 : 1,
                  borderRadius: 8,
                }),

                option: (baseStyles, state) => ({
                  ...baseStyles,
                  backgroundColor: state.isFocused ? "#E0A82E" : "white",
                  color: state.isFocused ? "white" : "black",
                }),
              }}
              options={options}
              onChange={setSubCategory}
              placeholder="Select Sub Category"
              isSearchable
            ></CreatableSelect>
          </div>
          <div className=" space-y-1">
            <label className="text-lg text-yellow-700">toy-image:</label>
            <input
              type="url"
              name="toyimage"
              defaultValue={toy.image}
              className="w-full rounded-lg border input-primary p-2 pe-12 text-sm shadow-sm"
              placeholder="image url"
            />
          </div>
          <div className=" space-y-1">
            <label className="text-lg text-yellow-700">rating:</label>
            <input
              type="number"
              step="0.1"
              name="rating"
              defaultValue={toy.rating}
              className="w-full rounded-lg border input-primary p-2 text-sm shadow-sm"
              placeholder="rating"
            />
          </div>
          <div className=" space-y-1">
            <label className="text-lg text-yellow-700">seller-name:</label>
            <input
              disabled
              value={toy.sellerName}
              type="text"
              name="sellername"
              className="w-full rounded-lg border input-primary p-2 pe-12 text-sm shadow-sm"
            />
          </div>
          <div className=" space-y-1">
            <label className="text-lg text-yellow-700">seller-email:</label>
            <input
              disabled
              value={toy.sellerEmail}
              type="text"
              name="selleremail"
              className="w-full rounded-lg border input-primary p-2 pe-12 text-sm shadow-sm"
            />
          </div>
        </div>
        <div className=" space-y-1">
          <label className="text-lg text-yellow-700">description:</label>
          <textarea
            name="description"
            defaultValue={toy.description}
            className="w-full rounded-lg border input-primary p-2  text-sm shadow-sm"
            placeholder="description"
          />
        </div>
        <div className="flex justify-center">
          <button className="btn btn-primary text-white rounded-lg my-4 w-1/3">Update Toy</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateToy;
