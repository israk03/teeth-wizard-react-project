import { useContext, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../../AuthProvider/AuthProvider";

export default function Login() {
  const [error, setError] = useState("");
  const { handleLogin, handleGoogleLogin, handleLogout } =
    useContext(authContext);
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();
    setError("");

    const email = e.target.email.value;
    const password = e.target.password.value;

    handleLogin(email, password)
      .then((res) => {
        // console.log(res.user);
        // navigate(location.state.from);
        const from = location.state?.from?.pathname || "/";
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const err = error.message;
        setError(err);
      });
  };
  const handleGoogle = () => {
    handleGoogleLogin()
      .then(() => {
        const from = location.state?.from?.pathname || "/";
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleForm} className="card-body">
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
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-blue-950 text-white hover:bg-blue-800">
              Login
            </button>
          </div>
          <label className="label font-semibold">
            <NavLink to="/register" href="#" className="label-text-alt">
              New to this site?{" "}
              <span className="link link-hover">Register</span>
            </NavLink>
          </label>
          <div className="divider">OR</div>
          <div className="form-control">
            <button
              type="button"
              className="btn btn-outline border-blue-950 text-blue-950 hover:bg-blue-950 hover:text-white flex items-center gap-2"
              onClick={handleGoogle}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#EA4335"
                  d="M24 9.5c3.69 0 6.99 1.41 9.52 3.7l7.12-7.12C36.68 2.41 30.65 0 24 0 14.74 0 6.91 5.35 2.69 13.15l8.48 6.59C13.3 13.07 18.26 9.5 24 9.5z"
                />
                <path
                  fill="#34A853"
                  d="M46.63 24.49c0-1.72-.15-3.39-.43-5H24v9.48h12.81c-.55 2.95-2.19 5.45-4.65 7.14l7.19 5.58c4.16-3.85 6.55-9.53 6.55-16.2z"
                />
                <path
                  fill="#4A90E2"
                  d="M13.15 24c0-1.22.19-2.41.52-3.54L5.19 13.87C3.47 17.03 2.5 20.82 2.5 24c0 3.18.97 6.97 2.69 10.13l8.48-6.59c-.33-1.13-.52-2.32-.52-3.54z"
                />
                <path
                  fill="#FBBC05"
                  d="M24 46c6.48 0 11.92-2.15 15.89-5.84l-7.19-5.58c-2.23 1.5-5.04 2.42-8.7 2.42-5.74 0-10.7-3.57-12.83-8.63l-8.48 6.59C6.91 42.65 14.74 48 24 48z"
                />
              </svg>
              Continue with Google
            </button>
          </div>
        </form>
        {error && <p className="text-red-600 text-center pb-7 px-4">{error}</p>}
      </div>
    </div>
  );
}
