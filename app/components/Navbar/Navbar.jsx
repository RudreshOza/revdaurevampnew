import Image from "next/image";
import logo from "../../../public/revdaufulllogo.png";
import Link from "next/link";

const Navbar = () => {
  const data = {
    heading: "RevDau Industries",
    navs: [
      {
        name: "Home",
        link: "",
        subNav: [],
      },
      {
        name: "About Us",
        link: "/aboutus",
        subNav: [],
      },
      {
        name: "Services",
        link: "/services",
        subNav: [
          {
            name: "Services",
            link: "/services",
          },
          {
            name: "Career",
            link: "/career",
          },
        ],
      },
      {
        name: "Contact Us",
        link: "/contactus",
        subNav: [],
      },
    ],
    getStarted: "Get Started",
  };
  return (
    <>
      <nav className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow w-52"
            >
              <li>
                <Link href={""}>Home</Link>
              </li>
              <li>
                <Link href={"/aboutus"}>About Us</Link>
              </li>
              <li tabIndex={0}>
                <Link href={""} className="justify-between">
                  Services
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </Link>
                <ul className="p-2">
                  <li>
                    <Link href={"/services"}>Submenu</Link>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <Link href={"/ContactUs"}>Contact Us</Link>
              </li>
            </ul>
          </div>
          <a className="normal-case text-xl" href="/">
            <Image
              src={logo}
              alt={data.heading}
              placeholder="empty"
              priority={true}
              className="lg:w-48 lg:h-12"
            />
          </a>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href={""}>Home</Link>
            </li>
            <li>
              <Link href={"/aboutus"}>About Us</Link>
            </li>
            <li tabIndex={0}>
              <a>
                Services
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2 ">
                <li>
                  <a href="/services">Services</a>
                </li>
                <li>
                  <a>Career</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn hover:bg-red border-none">{data.getStarted}</a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
