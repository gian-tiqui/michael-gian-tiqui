import { HtmlAttributes } from "@/app/types/Types";
import { useForm } from "react-hook-form";

type FormFields = {
  name: string;
  email: string;
  message: string;
};

export default function Contact({ id }: HtmlAttributes) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>();

  const onSubmit = (data: FormFields) => {
    console.log(data);
  };

  return (
    <section className="w-full font-serif" id={id ? id : ""}>
      <h1 className="text-2xl md:text-3xl font-bold font-sans mb-6">Contact</h1>
      <div className="w-full md:flex">
        <div className="w-2/4">
          <p className="w-80">
            Send your ideas, questions or projects you need help with. I will
            try to response as soon as possible.
          </p>
        </div>
        <div className="w-2/4 mt-10 md:mt-0">
          <div className="w-80 ms-auto rounded-lg shadow-lg bg-white">
            <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
              <p className="text-lg font-semibold mb-14">Send a message here</p>
              <div className="h-16">
                <input
                  type="text"
                  {...register("name", { required: true })}
                  className="w-full border-2 border-black outline-none px-3 py-1 rounded-lg placeholder-neutral-700"
                  placeholder="Enter your name"
                />
                {errors.name && (
                  <p className="ms-4 text-sm text-red-500">Enter your name</p>
                )}
              </div>
              <div className="h-16">
                <input
                  type="email"
                  {...register("email", { required: true })}
                  className="w-full border-2 border-black outline-none px-3 py-1 rounded-lg placeholder-neutral-700"
                  placeholder="Enter your email address"
                />
                {errors.email && (
                  <p className="ms-4 text-sm text-red-500">Enter your email</p>
                )}
              </div>
              <div className="h-40">
                <textarea
                  className="w-full border-2 border-black outline-none px-3 py-1 rounded-lg placeholder-neutral-700"
                  placeholder="Write your message"
                  rows={4}
                  {...register("message", { required: true })}
                />
                {errors.message && (
                  <p className="ms-4 text-sm text-red-500">
                    Enter your message
                  </p>
                )}
              </div>

              <button
                className="w-full h-8 rounded-lg bg-black text-white hover:opacity-85"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
