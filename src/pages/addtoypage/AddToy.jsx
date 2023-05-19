import React, { useContext, useState } from "react";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import { notifyError, notifyRequired } from "../../shared/alert";
import { FaDollarSign } from "react-icons/fa";
import Swal from "sweetalert2";
import { options } from "./menuOption";
import { AuthContext } from "../../components/provider/AuthProvider";

const AddToy = () => {
  const [selectSubCategory, setSubCategory] = useState("");
  const { user } = useContext(AuthContext);

  const addToyData = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
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

    fetch("http://localhost:5000/addtoy", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(toydata),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          Swal.fire({
            icon: "success",
            title: "Toy Added Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
          setSubCategory({
            value: "",
            label: "",
          });
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
              defaultValue={selectSubCategory}
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
              defaultValue="https://i.ibb.co/8MFzHSy/60316.png"
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
            />
          </div>
          <div className=" space-y-1">
            <label className="text-lg text-yellow-700">seller-email:</label>
            <input
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
