import { Link } from "react-router-dom";
import { HiMenuAlt1 } from "react-icons/hi";


const Header = () => {
  return (
    <>
      <header className="flex items-center justify-between w-full px-10 py-3 text-white">
        <div className="w-2/12 py-2">
          <Link to="/" className="text-3xl">
            SQUARE
          </Link>
        </div>

        <div className="hidden xl:block w-8/12">
          <ul className="flex items-center justify-center ">
            <li>
              <Link className="text-lg bg-white text-black px-9 rounded-full py-2">
                Home
              </Link>
            </li>
            <li>
              <Link className="text-lg hover:bg-white hover:text-black px-9 rounded-full py-2">
                Project
              </Link>
            </li>
            <li>
              <Link className="text-lg hover:bg-white hover:text-black px-9 rounded-full py-2">
                Blog
              </Link>
            </li>
            <li>
              <Link className="text-lg hover:bg-white hover:text-black px-9 rounded-full py-2">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden xl:block  w-2/12">
          <Link className="px-10 py-2 bg-white text-black rounded-full  ">
            Contact us
          </Link>

        </div>

        <div className="drawer w-1/12  flex xl:hidden">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label
              htmlFor="my-drawer"
              className="btn drawer-button"
            >
              <HiMenuAlt1 />
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 min-h-full bg-gray-950  text-white">
              {/* Sidebar content here */}
              <li>
              <Link className="text-lg mb-2 bg-white text-black px-9 rounded-full py-2">
                Home
              </Link>
            </li>
            
            <li>
              <Link className="text-lg mb-2  text-white hover:bg-white hover:text-black px-9 rounded-full py-2">
                Project
              </Link>
            </li>
            <li>
              <Link className="text-lg mb-2 text-white hover:bg-white hover:text-black px-9 rounded-full py-2">
                Blog
              </Link>
            </li>
            <li>
              <Link className="text-lg mb-2 text-white hover:bg-white hover:text-black px-9 rounded-full py-2">
                Contact
              </Link>
            </li>
            </ul>
          </div>
        </div>

       
      </header>
    </>
  );
};

export default Header;
