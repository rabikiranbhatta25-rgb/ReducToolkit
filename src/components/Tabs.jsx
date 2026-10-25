import { useDispatch, useSelector } from "react-redux";
import { setAciveTabs } from "../redux/feature/searchSlice";

const Tabs = () => {
  const tabs = ["photos", "videos", "GIF"];

  const activeTab = useSelector((state) => state.search.activeTab);
  const dispatch = useDispatch();

  return (
    <div className="flex h-20 items-center gap-4 px-4">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => dispatch(setAciveTabs(tab))}
          className={`rounded-lg px-5 py-2 font-medium capitalize transition
            ${
              tab === activeTab
                ? "bg-blue-600 text-white shadow-md"
                : "bg-gray-700 text-gray-200 hover:bg-gray-600"
            }
            active:scale-95`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;