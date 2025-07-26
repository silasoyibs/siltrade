import { FaArrowRightLong, FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import LogoLight from "../../ui/LogoLight";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSignup } from "./useSignUp";
import SpinnerMini from "../../ui/SpinnerMini";
import { useState } from "react";

function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const { signup, isPending } = useSignup();
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;

  function onSubmit({ email, password }) {
    signup(
      { email, password },
      {
        onSettled: () => reset(),
      },
    );
  }

  return (
    <div className="bg-primary-50 flex h-screen items-center justify-center px-5 py-80">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-[400px] rounded-3xl bg-white bg-[url(/src/assets/form-bg.png)] bg-cover bg-center bg-no-repeat p-6 shadow"
      >
        <LogoLight className="m-auto mb-4 w-[120px]" />
        <h1 className="text-center text-3xl font-bold">Sign Up</h1>
        <p className="mb-4 text-center">
          Begin your path to profitable trading
        </p>
        <div className="mb-4">
          <label className="block" htmlFor="">
            Email
          </label>
          <div>
            <input
              type="email"
              placeholder="Enter your email"
              disabled={isPending}
              className="focus:border-primary border-primary-300 w-full rounded-md border px-2 py-2 focus:border-2 focus:outline-none"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Enter a valid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>
        </div>
        <div className="mb-4">
          <label className="block" htmlFor="">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              disabled={isPending}
              className="focus:border-primary border-primary-300 w-full rounded-md border px-2 py-2 focus:border-2 focus:outline-none"
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
          {errors.password && (
            <p className="text-sm text-red-500">{errors.password.message}</p>
          )}
        </div>
        <button
          type="submit"
          disabled={isPending}
          className="bg-primary w-100% mb-4 flex w-full items-center justify-center gap-2 rounded-xl py-2 text-white"
        >
          {!isPending ? (
            <>
              Sign up
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
            <span className="flex-none">Or Sign up with</span>
            <div className="bg-primary-300 h-0.5 w-full"></div>
          </div>
          <button
            type="submit"
            className="border-primary-300 w-100% mb-4 flex w-full items-center justify-center gap-2 rounded-xl border-1 py-2"
          >
            <img
              src="src/assets/goggle.svg"
              alt="goggle-logo"
              className="w-5"
            />
            Sign up with Goggle
          </button>
        </div>
        <p className="text-center">
          Already have an account{" "}
          <Link to="/login" className="text-primary ml-2 font-bold">
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
}

export default SignupForm;
