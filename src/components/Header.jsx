import React from "react";
import Container from "./Container/Container";

const navItems = [
  {
    id: 1,
    name: "Home",
  },
  {
    id: 2,
    name: "About Us",
  },
  {
    id: 3,
    name: "Categories",
  },
  {
    id: 4,
    name: "Contact",
  },
];

function Header() {
  return (
    <Container>
      <nav className="h-[60px] flex justify-between items-center bg-[#ffffff] font-inter">
        <div className="left">
          <img src="./card/logo.png" alt="logo" />
        </div>
        <div className="right ">
          <ul className="list-none flex items-center">
            {navItems.map((item) => (
              <li
                key={item.id}
                className="mx-2 font-semibold font-inter lg:text-xl text-base  text-[#423636]"
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </Container>
  );
}

export default Header;
