import React, { useContext } from "react";
import { authContext } from "../../AuthProvider/AuthProvider";

export default function MyAppoinments() {
  const contextVlue = useContext(authContext);
  console.log(contextVlue);
  return (
    <div>
      <h2>APPOINMENTS</h2>
    </div>
  );
}
