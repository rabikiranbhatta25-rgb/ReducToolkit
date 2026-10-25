import React from "react";
import { useDispatch } from "react-redux";
import { clearCollection } from "../Redux/feature/collectionSlice";
import { Link } from "react-router-dom";

const NavbarForColleection = () => {
  const dispatch = useDispatch();
  const cleartoCollection = () => {
    dispatch(clearCollection());
  };
  return (
    <div className="bg-[var(--c1)] flex text-center items-center justify-between">
      <h1 className="ml-4">Collection</h1>
      <div className="flex gap-4">
        {" "}
        <Link
          className="bg-[var(--c4)] text-(--c1) rounded p-2 h-12 active:scale-96"
          to="/"
        >
          Search
        </Link>
        <Link
          className="bg-[var(--c4)] text-(--c1) rounded p-2 h-12 active:scale-96"
          to="/collection"
        >
          Collection
        </Link>
        <button
          onClick={() => {
            cleartoCollection();
          }}
          className="p-2 bg-red-950 text-white rounded  active:scale-96 w-24 mr-4"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default NavbarForColleection;
