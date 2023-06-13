import { Link, NavLink } from "react-router-dom";
import SearchBar from "../../../shared/search_bar";
import { navMenu, user } from "./data";
import Logo from "./logo";
import "./styles.css";
import Avatar from "../../../shared/avatar";
import Badge from "../../../shared/badge";
import { BsFillHeartbreakFill } from "react-icons/bs";
import { useWindowWidth } from "../../../hook/useWindowWidth";
const TopBar = () => {
  const isMedium = useWindowWidth(900);
  return (
    <header className="top-0 bg-topbar flex items-center px-8 py-4 text-white">
      <div className="w-1/2 flex items-center justify-start">
        <Logo />
        <SearchBar
          placeholder="Search ticker"
          onChange={() => ""}
          onFocus={() => ""}
          value={""}
          name="search"
        />
        {!isMedium && (
          <nav className="ml-5 border-r-2 border-r-slate-700">
            <ul className="flex list-none">
              {navMenu?.map((value, index) => (
                <li key={index} className="mr-3">
                  <NavLink
                    className={"color-gray font-bold text-sm"}
                    to={value.path}
                  >
                    {value.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
      <div className="w-1/2 flex justify-end items-center">
        <Badge count={100} icon={<BsFillHeartbreakFill />} />
        <span className="update-button rounded-full mx-3 ml-5">
          <Link to={"/"}>upgrade</Link>
        </span>
        <Avatar src={user.avatar} alt={user.name} />
      </div>
    </header>
  );
};

export default TopBar;
