import React from "react";
import FeedbackCard from "./FeedbackCard";

export default function Feedback({ feedbackData }) {
  console.log(feedbackData);
  return (
    <div>
      <h2 className="text-4xl text-center mb-5 font-semibold">
        Our Happy Clients
      </h2>
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-[90px] gap-10">
        {feedbackData.map((feedback) => (
          <FeedbackCard feedback={feedback}></FeedbackCard>
        ))}
      </div>
    </div>
  );
}
