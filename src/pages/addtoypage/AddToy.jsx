import React, { useState } from "react";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";

const AddToy = () => {
  const [subCategory, setSubCategory] = useState(null);

  const addToyData = (e) => {
    e.preventDefault();

    console.log(subCategory.value);
  };

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

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
          <input
            type="number"
            name="price"
            className="w-full rounded-lg border input-primary p-2 pe-12 text-sm shadow-sm"
            placeholder="toy name"
          />
        </div>
        <div className=" space-y-1">
          <label className="text-lg text-yellow-700">quantity:</label>
          <input
            type="number"
            name="quantity"
            className="w-full rounded-lg border input-primary p-2 pe-12 text-sm shadow-sm"
            placeholder="toy name"
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
            defaultValue={subCategory}
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
            name="rating"
            className="w-full rounded-lg border input-primary p-2 pe-12 text-sm shadow-sm"
            placeholder="rating"
          />
        </div>
        <div className=" space-y-1">
          <label className="text-lg text-yellow-700">seller-name:</label>
          <input
            type="text"
            name="sellername"
            className="w-full rounded-lg border input-primary p-2 pe-12 text-sm shadow-sm"
            placeholder=""
          />
        </div>
        <div className=" space-y-1">
          <label className="text-lg text-yellow-700">seller-email:</label>
          <input
            type="text"
            name="selleremail"
            className="w-full rounded-lg border input-primary p-2 pe-12 text-sm shadow-sm"
            placeholder=""
          />
        </div>
      </div>
      <div className=" space-y-1">
        <label className="text-lg text-yellow-700">description:</label>
        <textarea
          name="details"
          className="w-full rounded-lg border input-primary p-2 pe-12 text-sm shadow-sm"
          placeholder=""
        />
      </div>
      <div className="flex justify-center">
        <button className="btn btn-primary text-white rounded-lg my-4 w-1/3">
          Add Toy
        </button>
      </div>
        </form>
    </div>
  );
};

export default AddToy;
