'use client'

import Link from "next/link"
import { useRouter } from "next/navigation"
import { FormEvent, useRef } from "react"
import { useAuthentication } from "~/hooks/use-authentication"

export default function Login() {
  const router = useRouter()
  const auth = useAuthentication()
  const emailRef = useRef<HTMLInputElement | null>(null)
  const passwordRef = useRef<HTMLInputElement | null>(null)

  const i18n = {
    pages: {
      login: {
        login: 'Login',
        remember_me: 'Remember me',
        forgot_password: 'Forgot password?',
        email_is_required: 'Email is required',
        password_is_required: 'Password is required',
        btn_login: 'Login',
      }
    }
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!emailRef.current) return alert(i18n.pages.login.email_is_required)
    if (!passwordRef.current) return alert(i18n.pages.login.password_is_required)

    const email = emailRef.current.value
    const password = passwordRef.current.value

    auth.login({ email, password })

    router.push('home')
  }

  return (
    <main>
      <div className="flex items-center justify-center min-h-screen bg-login bg-no-repeat bg-cover">
        <form onSubmit={onSubmit} className="bg-[#00000050] backdrop-blur-lg p-8 rounded-2xl min-w-[420px] grid gap-4 border border-gray-200 shadow-md">
          <h1 className="text-4xl text-center font-bold">{ i18n.pages.login.login }</h1>

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

          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <input type="checkbox" className="outline-none h-4 w-4" />

              <label className="text-nowrap">
                { i18n.pages.login.remember_me }
              </label>
            </div>

            <Link href="#" className="cursor-pointer outline-none">
              { i18n.pages.login.forgot_password }
            </Link>
          </div>

          <button
            type="submit"
            className="w-full h-11 bg-cyan-700 text-white font-medium rounded-full outline-none hover:bg-cyan-600"
          >
            { i18n.pages.login.btn_login }
          </button>
        </form>
      </div>
    </main>
  )
}
