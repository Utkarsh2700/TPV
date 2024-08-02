import React from "react";

function ContactUs() {
  const inputs = [
    {
      placeholder: "Business Name",
    },
    {
      placeholder: "Email",
    },
    {
      placeholder: "Phone no.",
    },
  ];
  return (
    <div className="contact-us relative py-4 xl:py-[8rem]">
      <div className="py-10 bg-[#F3EDE7]">
        <div className="flex flex-col items-center w-full xl:w-[60%]">
          <h2 className="font-semibold text-[40px] leading-normal font-oswald text-[#f16767]">
            WE WOULD LOVE TO HAVE YOU ONBOARD
          </h2>
          <h3 className="font-semibold text-2xl text-[#1e1e1e] font-montserrat ">
            Reach out to us for more details
          </h3>
        </div>
      </div>
      <div className="bg-gradient-to-b from-gradient-start to-gradient-end h-[370px]  xl:w-[250px] xl:absolute right-64 top-0 py-8 px-3 my-[40px] rounded-2xl">
        <form action="" className="space-y-3 flex justify-center flex-col">
          <h4 className="flex justify-center font-extrabold text-4xl font-montserrat text-[#ffffff]">
            JOIN US!
          </h4>
          {inputs.map((input) => (
            <input
              className="py-2 bg-[#E8CBFB] rounded-2xl px-4 text-[#626268]"
              type="text"
              placeholder={input.placeholder}
              key={input.placeholder}
            />
          ))}
          <label htmlFor="pet-select"></label>
          <select
            className="w-full outline-none py-2 px-4 bg-[#E8CBFB] rounded-2xl text-[#626268]"
            name="pets"
            id="pet-select"
          >
            <option value="">Want to register as</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="hamster">Hamster</option>
            <option value="parrot">Parrot</option>
            <option value="spider">Spider</option>
            <option value="goldfish">Goldfish</option>
          </select>
          <div className="flex justify-center items-center mt-4">
            <button className="text-center text-[#4A4A50] bg-[#FDB746] py-2 px-4 rounded-full">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
