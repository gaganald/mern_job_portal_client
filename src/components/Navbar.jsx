
import { NavLink, Link} from "react-router-dom";
import React, { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const handleMenuToggler = () => {
    setisMenuOpen(!isMenuOpen);
  };

  const navItems = [
    {path: "/", title: "Start a search"},
    {path: "/my-job", title: "My Jobs"},
    {path: "/salary", title: "Salary Estimate"},
    {path: "/post-job", title: "Post A Job"},
  ]
  return (
    <header className="max-w-screen-2xl container mx-auto xl:px-24 px-4 mt-2">
      <nav className="flex justify-between items-center py-6">
        <a href="/" className="flex items-center gap-2 text-2xl text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="35"
            height="35"
            fill="#3575E2"
          >
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <path d="M12 0a12 12 0 0 0-2.35 23.81 2.48 2.48 0 0 0 .44.19 2.54 2.54 0 0 0 .32.06 4.25 4.25 0 0 0 .71-.07c.4-.09.78-.21 1.18-.34s.77-.26 1.16-.41a10.65 10.65 0 0 0 1.24-.68 11.86 11.86 0 0 0 1.13-.79l.58-.48-.36-.58A11.88 11.88 0 0 0 12 0zm0 22.51c-1.09 0-2.15-.07-3.21-.19-.1-.01-.2-.02-.29-.03a5.35 5.35 0 0 1-.91-.15 1 1 0 0 1-.7-.71 7.68 7.68 0 0 1-.15-.29 8.5 8.5 0 0 1-.1-1.07c0-.36.04-.73.1-1.1a8.24 8.24 0 0 1 .25-1.09 1 1 0 0 1 .62-.66 8.72 8.72 0 0 1 1.11-.27c.36-.06.73-.1 1.1-.1h.54c.36 0 .73.04 1.1.1a8.72 8.72 0 0 1 1.11.27 1 1 0 0 1 .62.66 8.24 8.24 0 0 1 .25 1.09c.06.36.1.73.1 1.1s-.04.73-.1 1.1a8.24 8.24 0 0 1-.25 1.09 1 1 0 0 1-.62.66 8.72 8.72 0 0 1-1.11.27c-.36.06-.73.1-1.1.1zm-6.75-8.18l-.12-.12a10.07 10.07 0 0 0-.55-7.42 12.06 12.06 0 0 1 15.6 15.6 10.07 10.07 0 0 0-7.42-.55 9.94 9.94 0 0 0-7.51 7.51c-.07.34-.14.69-.19 1.04l-.12 1.06-.85-1.24-.48-.69a9.94 9.94 0 0 0-7.5-3.5zM12 20.31a8.31 8.31 0 0 1-4.33-1.23l1.63-1.19a5.51 5.51 0 0 0 5.4 0l1.63 1.19a8.31 8.31 0 0 1-4.33 1.23z" />
              </g>
            </g>
          </svg>
          <span>JobPortal</span>
        </a>
        {/* Nav items for large devices */}
        <ul className="hidden md:flex gap-12">
          {
            navItems.map(({path,title}) =>(
              <li key={path} className="text-base text-primary">
                <NavLink
                    to={path}
                    className={({isActive}) => isActive ? "active" : ""}>
                    {title}
                </NavLink>
              </li>
            ))
          }
        </ul>
        {/* sign up and login button */}
        <div className="text-base text-primary font-medium space-x-5 hidden lg:block">
           <Link to="/login" className="py-2 px-5 border rounded">Login</Link>
           <Link to="/sign-up" className="py-2 px-5 border rounded bg-blue text-white">Sign Up</Link>
        </div>

        {/* mobile menu */}
        <div className="md:hidden block">
          <button onClick={handleMenuToggler}>
            {
              isMenuOpen ? <ImCross className="w-5 h-5 text-primary" /> : <FaBarsStaggered className="w-5 h-5 text-primary" />
            }
          </button>
        </div>
      </nav>

      {/* NavItems for Mobile */}
      <div className={`px-4 bg-black py-5 rounded-sm ${isMenuOpen ? "" : "hidden"}`}>
        <ul>
          {
            navItems.map(({path,title}) =>(
              <li key={path} className="text-base text-white first:text-white py-1">
                <NavLink
                    to={path}
                    className={({ isActive}) => isActive ? "active" : ""}>
                    {title}
                </NavLink>
              </li>
            ))
          }

          <li className="text-white py-1"><Link to="/login">Login</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
