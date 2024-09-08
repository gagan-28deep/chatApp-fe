import { Link } from "react-router-dom";
import GenderCheckbox from "../components/GenderCheckbox";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const formData = useForm();
  const userSignUp = (data) => {
    console.log(data);
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
            {/* <input type='text' placeholder='John Doe' className='w-full input input-bordered  h-10' /> */}
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
            {/* <input
              type="text"
              placeholder="johndoe"
              className="w-full input input-bordered h-10"
            /> */}
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
            {/* <input
              type="text"
              placeholder="johndoe"
              className="w-full input input-bordered h-10"
            /> */}
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
            {/* <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
            /> */}
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
            {/* <input
              type="password"
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10"
            /> */}
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

          <GenderCheckbox />

          <Link
            to={"/login"}
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-white"
          >
            Already have an account?
          </Link>

          <div>
            <button
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
