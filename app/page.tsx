"use client";

import { FormEvent, useRef } from "react";
import { useAuthentication } from "~/hooks/use-authentication";

export default function Login() {
  const auth = useAuthentication();
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const i18n = {
    login: "Login",
    remember_me: "Remember me",
    forgot_password: "Forgot password?",
    email_is_required: "Email is required",
    password_is_required: "Password is required",
    btn_login: "Login",
    link_register: "Register",
  };

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!emailRef.current) return alert(i18n.email_is_required);
    if (!passwordRef.current) return alert(i18n.password_is_required);

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    auth.login({ email, password });
  }

  return (
    <main>
      <div className="flex items-center justify-center min-h-screen bg-login bg-no-repeat bg-cover">
        <form className="bg-[#00000050] backdrop-blur-lg p-8 rounded-2xl min-w-[420px] grid gap-4 border border-gray-200 shadow-md">
          <h1 className="text-4xl text-center font-bold">{i18n.login}</h1>

          <input
            ref={emailRef}
            autoFocus
            type="email"
            placeholder="john_due@email.com"
            required
          />

          <input
            ref={passwordRef}
            type="password"
            placeholder="********"
            minLength={8}
            required
          />

          <div className="flex justify-between font-light">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="outline-none h-min" />
              <span className="text-nowrap">{i18n.remember_me}</span>
            </label>

            <a
              href="#"
              className="cursor-pointer outline-none hover:font-normal duration-150 "
            >
              {i18n.forgot_password}
            </a>
          </div>

          <button
            type="submit"
            className="w-full h-11 bg-white text-black rounded-full outline-none"
          >
            {i18n.btn_login}
          </button>

          <a
            href="#"
            className="text-center hover:font-medium duration-150 w-fit m-auto"
          >
            {i18n.link_register}
          </a>
        </form>
      </div>
    </main>
  );
}
