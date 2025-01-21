import { useContext } from "react";
import { authContext } from "../../AuthProvider/AuthProvider";

export default function Modal({ treatment }) {
  const { user } = useContext(authContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const address = e.target.address.value;
    const date = e.target.date.value;
    // const treatment = treatment;
    const info = {
      name,
      email,
      phone,
      address,
      date,
      treatment,
    };

    let saveData = [];
    const localData = localStorage.getItem("appointments");
    if (localData) {
      saveData = JSON.parse(localData);
    }
    saveData.push(info);
    localStorage.setItem("appointments", JSON.stringify(saveData));
  };
  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Please fill up first!</h3>

        <form onSubmit={handleSubmit} className=" p-4 space-y-3">
          <div>
            <label className="input input-bordered flex items-center gap-2">
              Name
              <input
                type="text"
                name="name"
                className="grow"
                placeholder="Your full name"
              />
            </label>
          </div>
          <div>
            <label className="input input-bordered flex items-center gap-2">
              Email
              <input
                name="email"
                type="text"
                className="grow"
                placeholder="Your email"
                value={user?.email}
              />
            </label>
          </div>
          <div>
            <label className="input input-bordered flex items-center gap-2">
              Phone
              <input
                type="number"
                name="phone"
                className="grow"
                placeholder="Your phone number"
              />
            </label>
          </div>
          <div>
            <label className="input input-bordered flex items-center gap-2">
              Date
              <input
                type="date"
                name="date"
                className="grow"
                placeholder="Appointment date"
              />
            </label>
          </div>
          <div>
            <label className="input input-bordered flex items-center gap-2">
              Address
              <input
                name="address"
                type="text"
                className="grow"
                placeholder="Your address"
              />
            </label>
          </div>
          <div>
            <button className="btn">Make Appointment</button>
          </div>
        </form>
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn bg-blue-950 text-white">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
