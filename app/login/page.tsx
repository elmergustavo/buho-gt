"use client";

// import { Login } from "@/components/login/Login";
// import React from "react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import CreateAccountForm from "../signup/components";
import Form from "./components";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
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
        <div className="w-full md:w-3/4 sm:p-8 p-4 flex items-center justify-center">
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
                    <Link href="/" aria-label="direccionar al home principal">
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
                    <div className="mb-4 hidden sm:block">
                      <p className="">Bienvenido a</p>
                      Buhogt.com
                    </div>
                  </div>
                  <div className="flex justify-center items-center sm:hidden">
                    <Image
                      alt="buho logo"
                      src={"/assets/logo/logo_horizontal.svg"}
                      width={200}
                      height={200}
                      loading="eager"
                    />
                  </div>

                  <p className="my-4 opacity-70">Ingresa a tu cuenta</p>
                  <Form />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Login;
