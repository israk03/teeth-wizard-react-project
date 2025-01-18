import React from "react";
import { useLoaderData } from "react-router-dom";

export default function Details() {
  const { treatment, image, description, cost } = useLoaderData();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="card w-10/12 mx-auto shadow-xl">
        <figure>
          <img src={image} alt={treatment} className="rounded-t-lg mt-4" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-blue-950">{treatment}</h2>
          <p className="text-gray-700">{description}</p>
          <div className="mt-4">
            <p className="text-lg font-semibold text-blue-950">Cost: ${cost}</p>
          </div>
          <div className="card-actions justify-end mt-4">
            <button className="btn bg-blue-950 text-white">
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
