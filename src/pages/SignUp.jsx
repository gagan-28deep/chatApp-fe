import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import useUser from "../hooks/useUser";
import { useSelector } from "react-redux";

const SignUp = () => {
  const userLoading = useSelector((state) => state.user.userLoading);
  const {handleSignUp} = useUser()
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const userSignUp = (data) => {
    handleSignUp(data);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up <span className="text-blue-500"> ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit(userSignUp)}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-white">Full Name</span>
            </label>
            <input
              {...register("fullName", { required: true })}
              type="text"
              placeholder="John Doe"
              className="w-full input input-bordered h-10"
            />
            {errors.fullName && (
              <span className="text-red-500">Full Name is required</span>
            )}
          </div>

          <div>
            <label className="label p-2 ">
              <span className="text-base label-text text-white">Username</span>
            </label>
            <input
              {...register("username", { required: true })}
              type="text"
              placeholder="johndoe"
              className="w-full input input-bordered h-10"
            />
            {errors.username && (
              <span className="text-red-500">Username is required</span>
            )}
          </div>

          <div>
            <label className="label p-2 ">
              <span className="text-base label-text text-white">Email</span>
            </label>
            <input
              {...register("email", { required: true })}
              type="text"
              placeholder="johndoe@gmail.com"
              className="w-full input input-bordered h-10"
            />
            {errors.email && (
              <span className="text-red-500">Email is required</span>
            )}
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text text-white">Password</span>
            </label>
            <input
              {...register("password", {
                required: true,
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
            />
            {errors.password?.type === "required" && (
              <span className="text-red-500">Password is required</span>
            )}
            {errors.password?.type === "minLength" && (
              <span className="text-red-500">{errors.password.message}</span>
            )}
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text text-white">
                Confirm Password
              </span>
            </label>
            <input
              {...register("confirmPassword", {
                required: true,
                validate: (value) => {
                  return value === watch("password");
                },
              })}
              type="password"
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10"
            />
            {errors.confirmPassword?.type === "required" && (
              <span className="text-red-500">Confirm Password is required</span>
            )}
            {errors.confirmPassword?.type === "validate" && (
              <span className="text-red-500">Passwords do not match</span>
            )}
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text text-white">Gender</span>
            </label>
            <div className="flex">
              <div className="form-control">
                <label className="label gap-2 cursor-pointer">
                  <span className="label-text text-white">Male</span>
                  <input
                    {...register("gender", { required: true })}
                    type="radio"
                    value="male"
                    className="radio border-slate-900"
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label gap-2 cursor-pointer">
                  <span className="label-text text-white">Female</span>
                  <input
                    {...register("gender", { required: true })}
                    type="radio"
                    value="female"
                    className="radio border-slate-900"
                  />
                </label>
              </div>
            </div>
            {errors.gender && (
              <span className="text-red-500">Gender selection is required</span>
            )}
          </div>

          <Link
            to={"/login"}
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-white"
          >
            Already have an account?
          </Link>

          {userLoading && (
            <div className="loading loading-spinner mx-auto"></div>
          )}

          <div>
            <button
              disabled={userLoading}
              type="submit"
              className="btn btn-block btn-sm mt-2 border border-slate-700"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
