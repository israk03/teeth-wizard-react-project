import { NavLink } from "react-router-dom";

export default function Register() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form className="card-body">
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
            <button className="btn btn-primary">Register</button>
          </div>
          <label className="label font-semibold">
            <NavLink to="/login" href="#" className="label-text-alt">
              Already have an account?{" "}
              <span className="link link-hover">Login</span>
            </NavLink>
          </label>
        </form>
      </div>
    </div>
  );
}
