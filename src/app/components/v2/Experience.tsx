import Lolipop from "@/app/about/components/Lolipop";
import { HtmlAttributes } from "@/app/types/Types";

export default function Experience({ id }: HtmlAttributes) {
  return (
    <section id={id ? id : ""} className="w-full font-serif">
      <h1 className="text-2xl md:text-3xl font-bold font-sans mb-6">
        Experience
      </h1>
      <div className="flex gap-5">
        <Lolipop />
        <div>
          <h1 className="text-lg font-bold">Web Developer Intern</h1>
          <h1 className="text-lg font-bold">
            Avietho Digital (Feb, 2024 - April, 2024)
          </h1>
          <ul className="list-disc ps-6 mt-3 text-md w-[530px] mb-6">
            <li>Designed the new website of City Government of Tanauan</li>
            <li>
              Developed and implemented the design of the City Government of
              Tanauan
            </li>
            <li>
              Utilized wordpress plugins to expose the required endpoints that
              will be consumed by the web application
            </li>
            <li>Re-develoeped the city Government of Tanauan using NextJs.</li>
            <li>Designed the layout of BATANGAS.NET</li>
            <li>
              Developed BATANGAS.NET CMS and Website using NextJs for frontend
              and Laravel with SQLite for backend
            </li>
            <li>Utilized Github for version control system of the project</li>
            <li>Used Vercel and Hostinger for deployment</li>
          </ul>
        </div>
      </div>

      <div className="flex gap-5 -mt-1">
        <Lolipop />
        <div>
          <h1 className="text-lg font-bold">Web Developer</h1>
          <h1 className="text-lg font-bold">
            Freelance (May, 2023 - April, 2024)
          </h1>
          <ul className="list-disc ps-6 mt-3 text-md w-[530px]">
            <li>Designed and developed a Barber Appointer Web Application</li>
            <li>
              Desigend and developed a Employee Management Website for managing
              employee details
            </li>
            <li>Developed an Ordering Mobile App with cart module</li>
            <li>
              Designed and developed Events Attendance Tracker Mobile App using
              Biometrics
            </li>
            <li>
              Designed and developed a Dashboard Application to track activities
              in the Events Attendance Tracker App
            </li>
            <li>Contributed to a Salon Web application to add new features</li>
            <li>
              Designed and developed a Contact List App that manages contact
              info
            </li>
            <li>Designed and developed a Employee Management Desktop App</li>
            <li>Contributed to a LMS Mobile and Web Application</li>
            <li>
              Designed and developed a Toys Info Management Web Application
            </li>
            <li>
              Contributed to a E-Lawyer Management System to add new features
              (chat)
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
