import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { authContext } from "../../AuthProvider/AuthProvider";

export default function Register() {
  const { handleRegister } = useContext(authContext);
  const [error, setError] = useState("");
  const handleForm = (e) => {
    e.preventDefault();
    setError("");
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const conPassword = e.target.conPassword.value;
    const photo = e.target.photo.value;
    // console.log(name, email, password, conPassword, photo);

    if (password !== conPassword) {
      setError("Password didn't match.");
      return;
    }
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!regex.test(password)) {
      setError(
        "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character."
      );
      return;
    }

    handleRegister(email, password);
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleForm} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="photo url"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              name="conPassword"
              placeholder="confirm password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="">
            <label className="cursor-pointer label gap-1">
              <input
                type="checkbox"
                className="checkbox border-blue-950 text-blue-950 focus:ring-blue-950"
                required
              />
              <span className="label-text">Accept terms and conditions.</span>
            </label>
          </div>

          <div className="form-control mt-6">
            <button className="btn bg-blue-950 text-white hover:bg-blue-800">
              Register
            </button>
          </div>
          <label className="label font-semibold">
            <NavLink to="/login" href="#" className="label-text-alt">
              Already have an account?{" "}
              <span className="link link-hover">Login</span>
            </NavLink>
          </label>
        </form>
        {error && <p className="text-red-600 text-center pb-7 px-4">{error}</p>}
      </div>
    </div>
  );
}
