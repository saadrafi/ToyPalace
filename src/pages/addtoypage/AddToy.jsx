import React, { useContext, useRef, useState } from "react";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import { notifyError, notifyRequired } from "../../shared/alert";
import { FaDollarSign } from "react-icons/fa";
import Swal from "sweetalert2";
import { options } from "./menuOption";
import { AuthContext } from "../../components/provider/AuthProvider";
import setTitle from "../../titleHook/TitleHook";

// https://i.ibb.co/nfLr4cC/60374-alt1.png fire truck
// https://i.ibb.co/rbfkT7x/10696.jpg brick
// https://i.ibb.co/qsKD3nq/76240-alt1.jpg batman
// https://i.ibb.co/bdWxfd8/31205-alt1.png batman puzzel
// https://i.ibb.co/R74g8zR/43217.png up house
// https://i.ibb.co/1RYDx5p/40619-alt1.png walle

const AddToy = () => {
  const [selectSubCategory, setSubCategory] = useState("");
  const { user } = useContext(AuthContext);
  setTitle("Add Toy");

  const addToyData = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const price = parseFloat(form.price.value);
    const quantity = parseInt(form.quantity.value);
    const description = form.description.value;
    const subCategory = selectSubCategory.value;
    const image = form.toyimage.value;
    const rating = form.rating.value;
    const sellerName = form.sellername.value;
    const sellerEmail = form.selleremail.value;
    // validate form
    if (
      !name ||
      !price ||
      !quantity ||
      !description ||
      !subCategory ||
      !image ||
      !rating ||
      !sellerName ||
      !sellerEmail
    ) {
      notifyRequired("fill up all form");
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
      sellerName,
      sellerEmail,
    };

    fetch("https://legoserver-saadrafi.vercel.app/addtoy", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(toydata),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire({
            icon: "success",
            title: "Toy Added Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();

          setSubCategory("");
        }
      })
      .catch((err) => {
        notifyError(err.message);
      });
  };

  return (
    <div className="w-[90%] mx-auto">
      <h1 className="text-4xl underline text-center text-primary my-5 font-bold">ADD TOY</h1>
      <form onSubmit={addToyData}>
        <div className="grid md:grid-cols-2 gap-3">
          <div className=" space-y-1">
            <label className="text-lg text-yellow-700">name:</label>
            <input
              type="text"
              name="name"
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
              className="w-full rounded-lg border input-primary p-2 text-sm shadow-sm"
              placeholder="quantity"
            />
          </div>
          <div className=" space-y-1">
            <label className="text-lg text-yellow-700">sub-category:</label>

            <CreatableSelect
              isClearable
              value={selectSubCategory}
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
              className="w-full rounded-lg border input-primary p-2 text-sm shadow-sm"
              placeholder="rating"
            />
          </div>
          <div className=" space-y-1">
            <label className="text-lg text-yellow-700">seller-name:</label>
            <input
              value={user?.displayName}
              type="text"
              name="sellername"
              className="w-full rounded-lg border input-primary p-2 pe-12 text-sm shadow-sm"
              disabled
            />
          </div>
          <div className=" space-y-1">
            <label className="text-lg text-yellow-700">seller-email:</label>
            <input
              disabled
              value={user?.email}
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
            className="w-full rounded-lg border input-primary p-2  text-sm shadow-sm"
            placeholder="description"
          />
        </div>
        <div className="flex justify-center">
          <button className="btn btn-primary text-white rounded-lg my-4 w-1/3">Add Toy</button>
        </div>
      </form>
    </div>
  );
};

export default AddToy;
