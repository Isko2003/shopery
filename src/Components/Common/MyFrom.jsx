import React from "react";
import { useForm } from "react-hook-form";

const MyForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center items-start w-[100%] gap-4 "
    >
      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-4 ">
        <input
          placeholder="Your Name"
          className="w-[100%] pl-4 rounded border border-[#e5e5e5] text-[20px] leading-[20.8px] p-3 text-[#1a1a1a] md:w-[46.5%]"
          style={{ height: "inherit", backgroundColor: "inherit" }}
          id="firstName"
          {...register("firstName", { required: "First name is required" })}
        />
        {errors.firstName && <p>{errors.firstName.message}</p>}

        <input
          placeholder="Your Email"
          className="w-[100%] pl-4 rounded border border-[#e5e5e5]  text-[20px] p-3 leading-[20.8px] text-[#1a1a1a] md:w-[46.5%]"
          style={{ height: "inherit", backgroundColor: "inherit" }}
          id="lastName"
          {...register("lastName", { required: "Last name is required" })}
        />
        {errors.lastName && <p>{errors.lastName.message}</p>}
      </div>

      <div className="w-[100%]">
        <input
          placeholder="Title"
          className="w-[100%] pl-4 rounded border border-[#e5e5e5]  text-[20px] p-3 leading-[20.8px] text-[#1a1a1a] md:w-[95%]"
          style={{ height: "inherit", backgroundColor: "inherit" }}
          id="email"
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div className="w-[100%] h-[10vh] md:h-[15vh]">
        <textarea
          placeholder="Subjects"
          className="w-[100%] pl-4 rounded-[6px] border border-[#e5e5e5] text-[20px] p-3 text-base leading-[20.8px] text-[#1a1a1a] md:w-[95%] "
          style={{ height: "inherit", backgroundColor: "inherit" }}
          id="message"
          {...register("message", { required: "Message is required" })}
        />
        {errors.message && <p>{errors.message.message}</p>}
      </div>
      <div className="w-[100%] flex justify-start items-start">
        <button
          type="submit"
          className="text-sm leading-[16.8px] py-3.5 px-8 rounded-[43px] text-white bg-[#00b207] inline-block ml-[23px]"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default MyForm;
