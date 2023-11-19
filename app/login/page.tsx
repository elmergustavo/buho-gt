import { Login } from "@/components/login/Login";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="flex  lg:flex-row min-h-screen">
        {/* Primera columna para dispositivos grandes */}
        <div className="lg:w-1/4 bg-cover bg-center lg:h-screen hidden md:block">
          <Image
            width={400}
            height={400}
            className="object-cover h-screen"
            src="./img/login_svg.svg"
            alt="Background"
          />
        </div>
        {/* Segunda columna */}
        <div className="w-full md:w-3/4 p-8 flex items-center justify-center">
          <section className="w-full flex justify-center items-center">
            <div className="flex flex-col items-start w-full sm:max-w-2xl">
              <span className="px-8"></span>

              {/* <a
                href="#"
                className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
              >
                <img
                  className="w-8 h-8 mr-2"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
                  alt="logo"
                />
                Flowbite
              </a> */}
              <div className="w-full bg-white rounded-lg sm:p-8">
                <div className="">
                  <div className="text-xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-3xl lg:text-4xl space-y-6">
                    
                    <Link href="/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 hover:cursor-pointer"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                        />
                      </svg>
                    </Link>
                    <p className="mb-4">Bienvenido a</p>
                    Buhogt.com
                  </div>

                  <p className="my-4 opacity-70">Ingresa a tu cuenta</p>
                  <form className="space-y-4 md:space-y-6 my-4" action="#">
                    <div className="mb-4">
                      <label
                        htmlFor="email"
                        className="mb-2.5 block font-medium text-black "
                      >
                        Email
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          placeholder="Enter your email"
                          className="w-full rounded-lg border border-stroke bg-transparent py-3 pl-4 pr-4 outline-none focus:ring-primary-600 focus:border-primary-600 focus-visible:shadow-none "
                        />

                        <span className="absolute right-4 top-4"></span>
                      </div>
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="password"
                        className="mb-2.5 block font-medium text-black "
                      >
                        Contraseña
                      </label>
                      <div className="relative">
                        <input
                          id="password"
                          type="password"
                          placeholder="Enter your email"
                          className="w-full rounded-lg border border-stroke bg-transparent py-3 pl-6 pr-10 outline-none focus:ring-primary-600 focus:border-primary-600 focus-visible:shadow-none"
                        />

                        <span className="absolute right-4 top-4"></span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-start">
                        {/* <div className="flex items-center h-5">
                          <input
                            id="remember"
                            aria-describedby="remember"
                            type="checkbox"
                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 "
                          />
                        </div> */}
                        {/* <div className="ml-3 text-sm">
                          <label className="text-gray-500">Remember me</label>
                        </div> */}
                      </div>
                      <a
                        href="#"
                        className="text-sm font-medium text-primary-600 hover:underline "
                      >
                        ¿Olvidaste tu contraseña?
                      </a>
                    </div>
                    <button
                      type="submit"
                      className="w-full uppercase text-white bg-[#252A61] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-base py-3  text-center "
                    >
                      Ingresa
                    </button>

                    <button className="flex items-center w-full text-center  justify-center gap-2  bg-white  border-2 border-gray-600 rounded-lg px-6 py-2 text-sm font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
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
                      <span className="text-base font-bold">
                        Continue with Google
                      </span>
                    </button>

                    <p className="text-sm font-light text-gray-500 ">
                      ¿No tienes una cuenta?{" "}
                      <a
                        href="#"
                        className="font-medium text-primary-600 hover:underline"
                      >
                        Regístrate
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default page;
