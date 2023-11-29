"use client";

import { useForm } from "react-hook-form";
import { IloginTypes } from "./LoginTypes";
import { useRouter } from "next/navigation";
// import ButtonPrimary from "../../../../components/ButtonPrimary/index";
import ButtonPrimary from "@/components/ButtonPrimary";
import style from "./style.module.css";
// import Input from "../../../../components/Input/index";
import Input from "@/components/Input";
import { useState, useEffect } from "react";
import Link from "next/link";

const Form = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [showLoadingComponent, setShowLoadingComponent] =
    useState<boolean>(false);
  const [errorData, setErrorData] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    const checkToken = async () => {
      // const response = await fetch(
      //   "https://spring-green-lion-vest.cyclic.cloud/auth/checkToken",
      //   {
      //     method: "GET",
      //     credentials: "include",
      //   }
      // );
      // if (response.status === 200) {
      //   router.push(`/ProfileDetails`);
      //   setErrorData("");
      // }
    };
    checkToken();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IloginTypes>();

  const onSubmit = handleSubmit(async (data) => {
    setErrorData("");
    setShowLoadingComponent(true);
    try {
      const response = await fetch(
        "https://spring-green-lion-vest.cyclic.cloud/auth/login",
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.status === 200) {
        router.push(`/ProfileDetails`);
        setErrorData("");
      } else {
        setErrorData("User not found");
        setShowLoadingComponent(false);
      }
    } catch (error) {
      console.error("Ocorreu um erro:", error);
    }
  });

  return (
    <form onSubmit={onSubmit} className="relative" noValidate>
      {errorData && (
        <span className="absolute -top-1 right-0 BodyS text-red">
          {errorData}
        </span>
      )}

      <fieldset className="flex flex-col gap-6">
        <legend className="sr-only">enter your login information</legend>

        <label
          htmlFor="email"
          className={`${
            errors.email ? "text-red" : ""
          } BodyS relative flex flex-col gap-1 text-almost_dark`}
        >
          Correo electronico
          <Input
            id="email"
            autoComplete="email"
            placeholder="e.g. alex@email.com"
            className={`${
              style.input_email
            } BodyM h-12 rounded-lg border outline-none focus:border-primary focus:outline-none focus:ring-primary-600  focus-visible:shadow-none ${
              errors.email ? "border-red" : "border-light_gray"
            }`}
            {...register("email", {
              required: "No puede estar vacío",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email!",
              },
            })}
          />
          {errors.email && (
            <span className="absolute right-3 top-10 text-sm">
              {errors.email.message}
            </span>
          )}
        </label>

        <label
          htmlFor="password"
          className={`${
            errors.password ? "text-red" : "text-almost_dark"
          } BodyS relative flex gap-1 flex-col `}
        >
          Contraseña
          <div className="relative">
            <Input
              {...register("password", {
                required: "No puede estar vacío",
                minLength: {
                  value: 8,
                  message: "La contraseña debe tener al menos 8 caracteres",
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
            <span className="text-sm">{errors.password.message}</span>
          )}
        </label>
        <div className="flex items-center justify-between">
          <div className="flex items-start"></div>
          <a
            href="#"
            className="text-sm font-medium text-black hover:underline "
          >
            ¿Olvidaste tu contraseña?
          </a>
        </div>
        <ButtonPrimary
          showLoadingComponent={showLoadingComponent}
          label="INGRESA"
          disabled={false}
          type={"submit"}
        />
      </fieldset>
      <button className="flex items-center w-full text-center  justify-center mt-4 gap-2  bg-white  border-2 border-gray-600 rounded-lg px-6 py-2 text-sm font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
        <span>
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.3055 10.0415H21.5V10H12.5V14H18.1515C17.327 16.3285 15.1115 18 12.5 18C9.1865 18 6.5 15.3135 6.5 12C6.5 8.6865 9.1865 6 12.5 6C14.0295 6 15.421 6.577 16.4805 7.5195L19.309 4.691C17.523 3.0265 15.134 2 12.5 2C6.9775 2 2.5 6.4775 2.5 12C2.5 17.5225 6.9775 22 12.5 22C18.0225 22 22.5 17.5225 22.5 12C22.5 11.3295 22.431 10.675 22.3055 10.0415Z"
              fill="#FFC107"
            />
            <path
              d="M3.653 7.3455L6.9385 9.755C7.8275 7.554 9.9805 6 12.5 6C14.0295 6 15.421 6.577 16.4805 7.5195L19.309 4.691C17.523 3.0265 15.134 2 12.5 2C8.659 2 5.328 4.1685 3.653 7.3455Z"
              fill="#FF3D00"
            />
            <path
              d="M12.5 22C15.083 22 17.43 21.0115 19.2045 19.404L16.1095 16.785C15.0718 17.5742 13.8037 18.001 12.5 18C9.899 18 7.6905 16.3415 6.8585 14.027L3.5975 16.5395C5.2525 19.778 8.6135 22 12.5 22Z"
              fill="#4CAF50"
            />
            <path
              d="M22.3055 10.0415H21.5V10H12.5V14H18.1515C17.7571 15.1082 17.0467 16.0766 16.108 16.7855L16.1095 16.7845L19.2045 19.4035C18.9855 19.6025 22.5 17 22.5 12C22.5 11.3295 22.431 10.675 22.3055 10.0415Z"
              fill="#1976D2"
            />
          </svg>
        </span>
        <span className="md:text-base font-bold text-sm">
          Continue with Google
        </span>
      </button>
      <p className="text-sm font-light text-gray-500 mt-4">
        ¿No tienes una cuenta?{" "}
        <Link
          href="/signup"
          className="font-medium text-primary-600 hover:underline"
        >
          Regístrate
        </Link>
      </p>
    </form>
  );
};

export default Form;
