import { useState } from "react";
import Logo from "../../ui/Logo";
import { FaArrowRightLong, FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import SpinnerMini from "../../ui/SpinnerMini";
import { useSignin } from "./useSignin";

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const { signin, isPending } = useSignin();
  const { register, handleSubmit, reset } = useForm();

  function onSubmit({ email, password }) {
    signin({ email, password });
    reset();
  }
  return (
    <div className="bg-primary-50 flex h-screen items-center justify-center px-5 py-80">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-[400px] rounded-3xl bg-white bg-[url(/src/assets/form-bg.png)] bg-cover bg-center bg-no-repeat p-6 shadow"
      >
        <Logo dark={true} className="m-auto mb-4 w-[120px]" />
        <h1 className="text-center text-3xl font-bold">Log In</h1>
        <p className="mb-4 text-center">
          continue your path to profitable trading{" "}
        </p>
        <div>
          <label className="block" htmlFor="">
            Email
          </label>
          <div>
            <input
              type="email"
              placeholder="Enter your email"
              className="focus:border-primary border-primary-300 mb-4 w-full rounded-md border-1 px-2 py-2 focus:border-2 focus:outline-hidden"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Enter a valid email address",
                },
              })}
            />
          </div>
        </div>
        <div>
          <label className="block" htmlFor="">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="focus:border-primary border-primary-300 mb-4 w-full rounded-md border-1 px-2 py-2 focus:border-2 focus:outline-hidden"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            <span
              onClick={() => setShowPassword((showPassword) => !showPassword)}
              className="absolute top-[12px] right-3"
            >
              {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
            </span>
          </div>
        </div>
        <span>
          <a href="#" className="text-primary font-bold">
            forget password?
          </a>
        </span>
        <button className="bg-primary w-100% my-4 flex w-full items-center justify-center gap-2 rounded-xl py-2 text-white">
          {!isPending ? (
            <>
              Sign in
              <span>
                <FaArrowRightLong />
              </span>
            </>
          ) : (
            <SpinnerMini />
          )}
        </button>
        <div>
          <div className="mb-4 flex items-center justify-center gap-2">
            <div className="bg-primary-300 h-0.5 w-full"></div>
            <span className="flex-none">Or continue with</span>
            <div className="bg-primary-300 h-0.5 w-full"></div>
          </div>
          <button className="border-primary-300 w-100% mb-4 flex w-full items-center justify-center gap-2 rounded-xl border-1 py-2">
            <img
              src="src/assets/goggle.svg"
              alt="goggle-logo"
              className="w-5"
            />
            Sign in with Goggle
          </button>
        </div>
        <p className="text-center">
          Don't have an account
          <Link to="/register" className="text-primary ml-2 font-bold">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}

export default LoginForm;
