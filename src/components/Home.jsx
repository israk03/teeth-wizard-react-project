import { NavLink, useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import ServiceCard from "../ServiceCard/ServiceCard";
import Feedback from "./Feedback.jsx/Feedback";

export default function Home() {
  const services = useLoaderData();
  const { servicesData, feedbackData } = services;
  //   console.log(services);
  return (
    <div>
      <Banner></Banner>

      <div className="w-11/12 mx-auto mt-[80px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
        {servicesData.slice(0, 4).map((service) => (
          <ServiceCard service={service}></ServiceCard>
        ))}
      </div>
      <button className="btn bg-blue-950 text-white block mx-auto mt-30px mb-[90px] px-6">
        <NavLink to="/treatments">More</NavLink>
      </button>

      <Feedback feedbackData={feedbackData}></Feedback>
    </div>
  );
}
