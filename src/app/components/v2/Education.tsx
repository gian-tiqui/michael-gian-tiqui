import Image from "next/image";
import plmun from "../../assets/plmun.jpg";
import feuAlabang from "../../assets/feu_alabang.jpg";
import React from "react";
import { HtmlAttributes } from "@/app/types/Types";

export default function Education({ id }: HtmlAttributes) {
  return (
    <section className="w-full border" id={id ? id : ""}>
      <h1 className="md:text-3xl font-bold font-sans text-2xl mb-6">
        Education
      </h1>

      <div className="flex flex-col gap-3">
        <div className="md:flex gap-3">
          <div className="relative mb-3 md:mb-0 h-52 w-full md:h-72 rounded-lg md:w-[56%] dark:border-white pointer-events-none shadow-xl">
            <Image
              src={plmun}
              className="w-full h-full rounded-lg inset-0"
              alt="Michael Gian M. Tiqui"
              priority
            />
            <div className="w-64 h-16 bg-white absolute bottom-5 left-0 font-serif p-2 opacity-80">
              <p className="truncate text-xs md:text-sm font-bold">
                Pamantasan ng Lungosd ng Muntinlupa
              </p>
              <p className="text-xs md:text-xs">
                Bachelors of Science in Information Technology (2020 - 2024)
              </p>
            </div>
          </div>
          <div className="relative h-52 w-full md:h-72 rounded-lg md:w-[318px] dark:border-white pointer-events-none shadow-xl">
            <Image
              src={feuAlabang}
              className="w-full h-full rounded-lg inset-0"
              alt="Michael Gian M. Tiqui"
              priority
            />
            <div className="w-64 h-16 bg-white absolute bottom-5 left-0 font-serif p-2 opacity-80">
              <p className="truncate text-xs md:text-sm font-bold">
                Far Eastern University Alabang
              </p>
              <p className="text-xs lg:text-sm">
                Science, Technology, Engineering, and Mathematics (2018 - 2020)
              </p>
            </div>
          </div>
        </div>
        <div className="md:flex gap-3">
          <div className="relative h-52 mb-3 md:mb-0  w-full md:h-72 rounded-lg md:w-[318px] dark:border-white pointer-events-none shadow-xl">
            <Image
              src={feuAlabang}
              className="w-full h-full rounded-lg inset-0"
              alt="Michael Gian M. Tiqui"
              priority
            />
            <div className="w-64 h-16 bg-white absolute bottom-5 left-0 md:right-0 font-serif p-2 opacity-80">
              <p className="truncate text-xs md:text-sm font-bold">
                Far Eastern University Alabang
              </p>
              <p className="text-xs lg:text-sm">
                Science, Technology, Engineering, and Mathematics (2018 - 2020)
              </p>
            </div>
          </div>
          <div className="relative h-52 w-full md:h-72 rounded-lg md:w-[56%] dark:border-white pointer-events-none shadow-xl">
            <Image
              src={plmun}
              className="w-full h-full rounded-lg inset-0"
              alt="Michael Gian M. Tiqui"
              priority
            />
            <div className="w-64 h-16 bg-white absolute bottom-5 left-0 md:right-0 font-serif p-2 opacity-80">
              <p className="truncate text-xs md:text-sm font-bold">
                Pamantasan ng Lungosd ng Muntinlupa
              </p>
              <p className="text-xs lg:text-sm">
                Bachelors of Science in Information Technology (2020 - 2024)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
