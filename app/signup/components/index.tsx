"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { ICreateAccountTypes } from "./CreateAccountTypes";
import ButtonPrimary from "@/components/ButtonPrimary";
import style from "./style.module.css";
import Input from "@/components/Input";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const CreateAccountForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const router = useRouter();
  const [showLoadinComponent, setShowLoadingComponent] =
    useState<boolean>(false);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<ICreateAccountTypes>();

  useEffect(() => {
    const checkToken = async () => {
      const response = {
        status: 200,
      };

      if (response.status === 200) {
        // router.push(`/ProfileDetails`);
      }
    };
    checkToken();
  }, []);

  const onSubmit = handleSubmit(async (data) => {
    setShowLoadingComponent(true);
    try {
      const response = await fetch(
        "https://spring-green-lion-vest.cyclic.cloud/auth/register",
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        // router.push(`/ProfileDetails`);
      }
    } catch (error) {
      console.error("Ocorreu um erro:", error);
    }
  });

  return (
    <form onSubmit={onSubmit} noValidate>
      <fieldset className="flex flex-col gap-6 mb-6">
        <legend className="sr-only">estou no form</legend>

        <label
          htmlFor="email"
          className={`flex relative gap-1 flex-col BodyS ${
            errors.email ? "text-red" : "text-almost_dark"
          }`}
        >
          Email address
          <Input
            type="email"
            id="email"
            placeholder="e.g. alex@email.com"
            {...register("email", {
              required: "Can’t be empty",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email!",
              },
            })}
            className={`${
              style.input_email
            } BodyM h-12 rounded-lg border outline-none focus:border-primary focus:outline-none focus:ring-primary-600  focus-visible:shadow-none  ${
              errors.email ? "border-red " : "border-light_gray"
            }`}
          />
          {errors.email && (
            <span className="absolute right-3 top-9">
              {errors.email.message}
            </span>
          )}
        </label>

        <label
          htmlFor="password"
          className={`flex relative gap-1 flex-col BodyS ${
            errors.password ? "text-red" : "text-almost_dark"
          }`}
        >
          Create password
       
        <div className="relative">
          <Input
            {...register("password", {
              required: "Please check again",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="At least 8 characters"
            className={`${
              style.input_password
            } BodyM h-12 rounded-lg border w-full outline-none focus:border-primary focus:outline-none focus:ring-primary-600  focus-visible:shadow-none ${
              errors.password ? "border-red " : "border-light_gray"
            }`}
            data-testid="password"
          />

          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute top-3 right-4 cursor-pointer"
          >
            {showPassword ? (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              </>
            )}
          </button>
        </div>
        {errors.password && (
          <span className="">
            {errors.password.message}
          </span>
        )}
        </label>
       

        <label
          htmlFor="confirm_password"
          className={`flex relative gap-1 flex-col BodyS
          ${errors.confirmpassword ? "text-red" : "text-almost_dark"}`}
        >
          Confirm password
          <Input
            {...register("confirmpassword", {
              required: "Please check again",
              validate: (value) => value === getValues("password"),
            })}
            type="password"
            id="confirm_password"
            placeholder="At least 8 characters"
            className={`${
              style.input_password
            } BodyM h-12 rounded-lg border outline-none focus:border-primary focus:outline-none focus:ring-primary-600  focus-visible:shadow-none ${
              errors.confirmpassword ? "border-red " : "border-light_gray"
            }`}
            data-testid="confirm_password"
          />
          {errors.confirmpassword && (
            <span className="absolute right-3 top-9">
              {errors.confirmpassword.message}
            </span>
          )}
        </label>

        <ButtonPrimary
          showLoadingComponent={showLoadinComponent}
          label="Create new account"
          disabled={false}
          type="submit"
        />
      </fieldset>
    </form>
  );
};

export default CreateAccountForm;
