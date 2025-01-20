import React from "react";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "../ServiceCard/ServiceCard";

export default function AllTreatments() {
  const services = useLoaderData();
  return (
    <div className="w-11/12 mx-auto mt-[20px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
      {services.map((service) => (
        <ServiceCard service={service}></ServiceCard>
      ))}
    </div>
  );
}
