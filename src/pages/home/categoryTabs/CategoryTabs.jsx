import React, { useEffect, useState } from "react";
import SingleToyData from "./SingleToyData";

const CategoryTabs = () => {
  const [tab, setTab] = useState("dc comics");
  const [toys, setToys] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://legoserver-saadrafi.vercel.app/toysCategory/${tab}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        setLoading(false);
      });
  }, [tab]);

  const handleTab = (tabName) => {
    setLoading(true);
    setTab(tabName);
  };
  return (
    <div className="w-[90%] mx-auto my-10">
      <h1 className="text-4xl text-center text-primary font-bold font-sans ">Top Categories</h1>
      <p className="text-center text-lg text-gray-400 font-sans mt-5">Find best from the best</p>
      <div>
        <div className="flex justify-start">
          <div className="tabs my-6">
            <p
              onClick={() => {
                handleTab("dc comics");
              }}
              className={` text-lg tab tab-lifted ${
                tab === "dc comics" ? "tab-active tab-lg text-primary" : ""
              }`}
            >
              DC Comics
            </p>
            <p
              onClick={() => {
                handleTab("marvel comics");
              }}
              className={` text-lg tab tab-lifted ${
                tab === "marvel comics" ? "tab-active tab-lg text-primary" : ""
              }`}
            >
              Marvel Comics
            </p>
            <p
              onClick={() => {
                handleTab("city");
              }}
              className={` text-lg tab tab-lifted ${
                tab === "city" ? "tab-active tab-lg text-primary" : ""
              }`}
            >
              City
            </p>
          </div>
        </div>
      </div>
      {loading ? (
        <div className="flex justify-center items-center">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
        </div>
      ) : (
        <div className="grid grid-rows-1 auto-cols-max overflow-x-scroll grid-flow-col gap-3 my-5">
          {toys.map((toy) => (
            <SingleToyData toy={toy} key={toy._id}></SingleToyData>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryTabs;
