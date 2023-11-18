import { Login } from "@/components/login/Login";
import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="flex  lg:flex-row min-h-screen">
        {/* Primera columna para dispositivos grandes */}
        <div className="lg:w-1/4 bg-cover bg-center lg:h-screen hidden md:block">
          <Image
            width={400}
            height={400}
            className="object-cover   h-screen"
            src="./img/login_svg.svg"
            alt="Background"
          />
        </div>
        {/* Segunda columna */}
        <div className="w-full md:w-3/4 p-8 flex items-center justify-center">
          <section className=" dark:bg-gray-900 w-full flex justify-center items-center">
            <div className="flex flex-col items-start w-full sm:max-w-2xl">
              <span className="px-8">
               
              </span>

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
              <div className="w-full bg-white rounded-lg  dark:border sm:p-8">
                <div className="">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
                    <p className="mb-3">Bienvenido a</p>
                    Buhogt.com
                  </h1>

                  <p className="my-4 opacity-70">Ingresa a tu cuenta</p>
                  <form className="space-y-4 md:space-y-6 my-4" action="#">
                    <div className="mb-4">
                      <label
                        htmlFor="email"
                        className="mb-2.5 block font-medium text-black dark:text-white"
                      >
                        Email
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          placeholder="Enter your email"
                          className="w-full rounded-lg border border-stroke bg-transparent py-3 pl-4 pr-4 outline-none focus:ring-primary-600 focus:border-primary-600 focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        />

                        <span className="absolute right-4 top-4">
                          
                        </span>
                      </div>
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="password"
                        className="mb-2.5 block font-medium text-black dark:text-white"
                      >
                        Password
                      </label>
                      <div className="relative">
                        <input
                          id="password"
                          type="password"
                          placeholder="Enter your email"
                          className="w-full rounded-lg border border-stroke bg-transparent py-3 pl-6 pr-10 outline-none focus:ring-primary-600 focus:border-primary-600 focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        />

                        <span className="absolute right-4 top-4">
                        
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="remember"
                            aria-describedby="remember"
                            type="checkbox"
                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label className="text-gray-500 dark:text-gray-300">
                            Remember me
                          </label>
                        </div>
                      </div>
                      <a
                        href="#"
                        className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                      >
                        Forgot password?
                      </a>
                    </div>
                    <button
                      type="submit"
                      className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      Sign in
                    </button>

                    <button className="flex items-center w-full text-center  justify-center  bg-white dark:bg-gray-900 border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 dark:text-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                     
                      <span>Continue with Google</span>
                    </button>

                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet?{" "}
                      <a
                        href="#"
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      >
                        Sign up
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
