import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../../AuthProvider/AuthProvider";

export default function MyAppointments() {
  const { user } = useContext(authContext);
  const [saveLocalData, setSaveLocalData] = useState([]);

  useEffect(() => {
    let saveData = [];
    const localData = localStorage.getItem("appointments");
    if (localData) {
      saveData = JSON.parse(localData);
    }
    const userData = saveData.filter((data) => data.email === user?.email);
    // console.log(userData);
    setSaveLocalData(userData);
  }, [user]);

  return (
    <div className="min-h-screen bg-base-200 p-6">
      <h2 className="text-2xl font-bold text-center mb-6">My Appointments</h2>
      {saveLocalData.length > 0 ? (
        <div className="w-11/12 mx-auto">
          <table className="table  border">
            <thead>
              <tr className="bg-blue-950 text-white">
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Phone</th>

                <th className="p-3">Address</th>
                <th className="p-3">Treatment</th>
              </tr>
            </thead>
            <tbody>
              {saveLocalData.map((appointment, index) => (
                <tr key={index} className="hover:bg-blue-950 hover:text-white">
                  <td className="p-3">{appointment.name}</td>
                  <td className="p-3">{appointment.email}</td>
                  <td className="p-3">{appointment.phone}</td>

                  <td className="p-3">{appointment.address}</td>
                  <td className="p-3">{appointment.treatment}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center mt-10">
          <p className="text-lg font-semibold">No Appointments Found</p>
        </div>
      )}
    </div>
  );
}
