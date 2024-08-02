import React from "react";

function Services() {
  const items = [
    {
      id: 4,
      text: "PET BOARDING",
    },
    {
      id: 2,
      src: "./card/second.png",
      alt: "dog celebrating",
    },
    {
      id: 6,
      text: "PET CAFES",
    },
    {
      id: 1,
      src: "./card/first.png",
      alt: "dog sleeping",
    },
    {
      id: 5,
      text: "PET EVENTS",
    },
    {
      id: 3,
      src: "./card/third.png",
      alt: "dog eating",
    },
  ];

  return (
    <div className="services">
      <div className="flex justify-center upper my-4">
        <h2 className="text-center py-2 text-[#423636] text-4xl font-oswald font-semibold">
          SERVICES WE OFFER
        </h2>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="box flex flex-wrap justify-center w-full sm:w-[88%]">
          {items.map((item) => (
            <div key={item.id} className="mx-2 bg-[#f2f2f4] rounded-2xl my-2">
              {item.src ? (
                <img
                  className=" w-[320px] h-[220px] "
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                />
              ) : (
                <h3 className="justify-center flex items-center w-[320px] h-[220px] text-[#8F4FB6] font-semibold font-oswald text-[28px] leading-8">
                  {item.text}
                </h3>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
