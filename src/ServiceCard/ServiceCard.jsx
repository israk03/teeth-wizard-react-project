import React from "react";

export default function ServiceCard({ service }) {
  const { treatment, image, description, cost } = service;
  return (
    <div className="card bg-base-100 gap-10 p-5 m-5 shadow-xl">
      <figure>
        <img src={image} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {treatment}
          <div className="badge text-white bg-blue-950">${cost}</div>
        </h2>
        <p>{description.slice(0, 100)}...</p>
        <div className="card-actions justify-end">
          <button className="btn bg-blue-950 text-white rounded-full">
            Checkout more
          </button>
        </div>
      </div>
    </div>
  );
}
