import React from "react";

function Footer() {
  const fItems = [
    {
      name: "COMPANY",
      one: "About",
      two: "Contact",
      three: "Terms & Conditions",
    },
    {
      name: "SERVICES",
      one: "Pet Boarding",
      two: "Pet Events",
      three: "Pet Cafes",
    },
  ];
  return (
    <footer className="footer flex justify-center py-4">
      <div className="w-[90%] flex justify-between flex-col md:flex-row">
        <div className="left flex flex-col-reverse w-full md:w-2/5 md:flex-col py-4 md:py-0 ">
          <img className="w-[300px]" src="./card/logo.png" alt="logo" />
          <p className="font-montserrat font-normal text-base text-[#424236]">
            TPV is on a mission to be your trusted bridge, connecting pet owners
            with passionate and skilled pet service providers. With us, pet
            parents can discover a World of Services
          </p>
        </div>
        <div className="right flex items-center flex-wrap">
          {fItems.map((item) => (
            <div key={item.name} className="footerItem mx-10 xl:mx-20">
              <span className="font-montserrat font-bold text-base text-[#424236]">
                {item.name}
              </span>
              <ul className="my-2 space-y-2">
                <li className="font-montserrat font-medium text-base text-[#424236]">
                  {item.one}
                </li>
                <li className="font-montserrat font-medium text-base text-[#424236]">
                  {item.two}
                </li>
                <li className="font-montserrat font-medium text-base text-[#424236]">
                  {item.three}
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
