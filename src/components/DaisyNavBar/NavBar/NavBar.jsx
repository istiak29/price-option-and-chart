import { useState } from "react";
import Link from "../../Link/Link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavBar = () => {

    const routes = [
      { id: 1, path: "/home", title: "Home Page" },
      { id: 2, path: "/about", title: "About Page" },
      { id: 3, path: "/products/:id", title: "Product Detail Page" },
      { id: 4, path: "/contact", title: "Contact Page" },
      { id: 5, path: "/dashboard", title: "Dashboard Page" },
    ];

    const [open, setOpen] = useState(false)

    return (
      <nav>
        <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          {open === true ? (
            <AiOutlineClose></AiOutlineClose>
          ) : (
            <AiOutlineMenu></AiOutlineMenu>
          )}
        </div>
        <ul
          className={`md:flex absolute duration-1000 bg-emerald-700 text-black px-6
        ${open ? "top-10" : "-top-32"}
        `}
        >
          {routes.map((route) => (
            <Link key={route.id} route={route}></Link>
          ))}
        </ul>
      </nav>
    );
};

export default NavBar;