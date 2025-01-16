import React from "react";

export default function FeedbackCard({ feedback }) {
  const { name, userImg, review } = feedback;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <div className="card-body">
          <div className="flex items-center gap-5">
            <img className=" w-10 h-10 rounded-full" src={userImg} alt="" />
            <h2 className="card-title">{name}</h2>
          </div>

          <p>{review}</p>
          <div className="card-actions justify-end">
            <button className="btn bg-blue-950 text-white">View</button>
          </div>
        </div>
      </div>
    </div>
  );
}
