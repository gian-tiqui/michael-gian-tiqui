"use client";
import { ModeContext } from "@/app/context-provider/ContextProvider";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

interface FormFields {
  message: string;
  email: string;
  name: string;
}

const MessageBox = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({
    defaultValues: {
      message: "",
      email: "",
      name: "",
    },
  });

  const { darkMode } = useContext(ModeContext);

  const onSubmit = (data: FormFields) => {
    toast.success("Your message was sent to Gian", {
      position: "top-center",
      className: `h-24 ${
        darkMode ? "bg-white text-black" : "bg-neutral-800 text-white"
      }`,
    });
  };

  return (
    <>
      <form
        className="flex flex-col justify-between p-3 h-[450px] md:h-[550px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="font-sans text-2xl text-white dark:text-black font-bold">
          Send me a message here
        </h1>
        <div className="flex flex-col items-start">
          <div className="flex flex-col gap-2 mb-2 w-full">
            <label
              htmlFor="name"
              className="font-sans text-white dark:text-black"
            >
              Name:
            </label>

            <input
              type="text"
              id="name"
              placeholder="Type your name"
              {...register("name", { required: "Name is required" })}
              className="font-sans border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-teal-400 dark:focus:ring-blue-500 bg-neutral-700 dark:bg-neutral-100 text-white dark:text-black"
            />
            {errors.name && (
              <span className="font-sans text-red-500 text-sm">
                {errors.name.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2 mb-2 w-full">
            <label
              htmlFor="email"
              className="font-sans dark:text-black text-white"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              placeholder="Type your email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              className="font-sans border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-teal-400 dark:focus:ring-blue-500 bg-neutral-700 dark:bg-neutral-100 text-white dark:text-black"
            />
            {errors.email && (
              <span className="font-sans text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2 mb-2  w-full">
            <label
              htmlFor="message"
              className="font-sans dark:text-black text-white"
            >
              Message:
            </label>
            <textarea
              id="message"
              placeholder="Your message"
              {...register("message", { required: "Message is required" })}
              className="font-sans border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-teal-400 dark:focus:ring-blue-500 md:h-40 bg-neutral-700 dark:bg-neutral-100 text-white dark:text-black"
            />
            {errors.email && (
              <span className="font-sans text-red-500 text-sm">
                {errors.message?.message}
              </span>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="font-sans bg-teal-400 dark:bg-blue-600 hover:bg-teal-500 dark:hover:bg-blue-700 text-white px-4 py-2 rounded w-full font-bold"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default MessageBox;
