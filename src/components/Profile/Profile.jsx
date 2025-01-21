import React, { useContext } from "react";
import { authContext } from "../../AuthProvider/AuthProvider";

export default function Profile() {
  const { user } = useContext(authContext);

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body items-center text-center">
          <div className="avatar mb-4">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                src={user?.photoURL || "https://via.placeholder.com/150"}
                alt="Profile"
              />
            </div>
          </div>
          <h2 className="card-title">
            {user?.displayName || "Anonymous User"}
          </h2>
          <p className="text-gray-500">{user?.email || "No Email Provided"}</p>
        </div>
      </div>
    </div>
  );
}
