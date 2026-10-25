import { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/feature/searchSlice";

const Searchbar = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    const query = text.trim();

    if (!query) return;

    dispatch(setQuery(query));
  };

  return (
    <div className="w-full px-4 pt-10 pb-5">
      <form
        onSubmit={submitHandler}
        className="flex w-full max-w-xl items-center gap-3"
      >
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Search anything..."
          className="min-w-0 flex-1 rounded-lg border border-gray-400 bg-gray-900 px-4 py-2 text-white outline-none focus:border-blue-500"
        />

        <button
          type="submit"
          className="shrink-0 rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700 active:scale-95"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Searchbar;