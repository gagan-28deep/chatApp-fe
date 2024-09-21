import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import useUser from "../hooks/useUser";
import { useSelector } from "react-redux";

const Login = () => {
  const userLoading =  useSelector((state) => state.user.userLoading);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { handleSignIn } = useUser();

  const userLogin = (data) => {
    handleSignIn(data);
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-white">
          Login
          <span className="text-blue-500"> ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit(userLogin)}>
          <div>
            <label className="label p-2 ">
              <span className="text-base label-text text-white">Username</span>
            </label>
            {/* <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
            /> */}
            <input
              {...register("username", { required: true })}
              type="text"
              placeholder="Enter username or email"
              className="w-full input input-bordered h-10"
            />

            {errors.username && (
              <span className="text-red-500">Username is required</span>
            )}
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text text-white">Password</span>
            </label>
            {/* <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
            /> */}
            <input
              {...register("password", { required: true })}
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
            />
            {errors.password && (
              <span className="text-red-500">Password is required</span>
            )}
          </div>
          <Link
            to="/signup"
            className="text-sm  hover:underline text-white hover:text-blue-600 mt-2 inline-block"
          >
            {"Don't"} have an account?
          </Link>
          
          {userLoading && (
            <div className="loading loading-spinner mx-auto"></div>
          )}

          <div>
            <button disabled={userLoading} type="submit" className="btn btn-block btn-sm mt-2">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
