import React from "react";
import { FaStar } from "react-icons/fa";

function Reviews() {
  const cards = [
    {
      id: 1,
      review:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
      star: 5,
      name: "Lora Smith",
    },
    {
      id: 2,
      review:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
      star: 5,
      name: "Lora Smith",
    },
    {
      id: 3,
      review:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
      star: 5,
      name: "Lora Smith",
    },
  ];
  return (
    <div className="flex flex-col items-center">
      <div className="title">
        <h3 className="text-center my-8 font-oswald font-semibold text-4xl text-[#424236]">
          CUSTOMER REVIEWS
        </h3>
      </div>
      <div className="reviews flex w-[90%] justify-between flex-wrap">
        {cards.map((card) => (
          <div
            key={card.id}
            className="review sm:w-1/2 lg:w-1/4 space-y-4 p-6 shadow-lg"
          >
            <p className="font-inter font-normal text-base text-[#2d2e2e]">
              {card.review}
            </p>
            <span className="flex">
              {Array.from({ length: card.star }).map((_, index) => (
                <FaStar
                  key={index}
                  className="fill-yellow-500 mr-2"
                  size={24}
                />
              ))}
            </span>
            <p className="font-inter font-normal text-base text-[#2d2e2e]">
              {card.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
