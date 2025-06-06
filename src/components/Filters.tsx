import { useLocation, useRouter } from "@tanstack/react-router";
import useFetchGithubData from "../hooks/useFetchGithubData";
import { useDrawerStore } from "../states/drawer-store";
import { useQueryStore } from "../states/query-store";
import { useToggleTypeStore } from "../states/toggle-type-store";
import { ChevronIcon, CloseIcon, SearchIcon } from "./Icons";
import Button from "./shared/Button";

export default function Filters() {
  const { searchQuery } = useQueryStore();
  const { toggleDrawer } = useDrawerStore();
  const { setToggleType } = useToggleTypeStore();
  const { handleChange, handleKeyDown, handleClearSearch } =
    useFetchGithubData() ?? {};

  const router = useRouter();
  const location = useLocation();

  const handleDrawerToggle = (filterType: string) => {
    setToggleType(filterType === "types");
    toggleDrawer();
  };

  const handleClearSearchHistory = () => {
    handleClearSearch();
    router.history.back();
  };

  const isValidUrl =
    location.pathname === "/" || location.pathname === "/starred";

  return (
    <>
      <div className="flex items-center justify-between bg-light_color mb-8 sm:mb-6 min-h-10 w-full gap-3 flex-col md:flex-row">
        <div className="flex items-center w-full relative md:max-w-[440px] max-w-none">
          <SearchIcon className="absolute left-1" />
          <input
            className="
            px-10 w-full py-2 bg-light_color border-b-[1px] border-[#F4F4F4]
            focus:outline-none focus:border-secondary text-lg text-dark-light font-normal"
            type="text"
            placeholder="Search here"
            value={searchQuery}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          {searchQuery !== "" && (
            <span
              className="text-sm text-dark font-normal flex items-center gap-2"
              onClick={handleClearSearchHistory}
            >
              <CloseIcon className="cursor-pointer absolute right-1" />
            </span>
          )}
        </div>

        {isValidUrl ? (
          <div className="flex gap-4 items-center justify-center sm:justify-end w-full">
            <Button onClick={() => handleDrawerToggle("types")}>
              <ChevronIcon />
              Types
            </Button>
            <Button onClick={() => handleDrawerToggle("languages")}>
              <ChevronIcon />
              Languages
            </Button>
          </div>
        ) : null}
      </div>
    </>
  );
}
