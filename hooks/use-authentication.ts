import React from 'react'
import { ILogin } from '~/interfaces/login-interface'
import { setLocalStorage } from '~/utils/storage-utils'

type UserAuthtenticated = {
    id: string
    email: string
    isAuthenticated: boolean
}

export function useAuthentication() {
  const [user, setUser] = React.useState<UserAuthtenticated | null>(null)

  async function login (data: ILogin) {
    setTimeout(() => {
      // Send post data to API and receive token

      setUser({
        id: '1',
        email: data.email,
        isAuthenticated: true
      })

      setLocalStorage('token', '123456')
    }, 2000)
  }

  async function logout () {
    // Send get to API destroy token
  }

  return { user, setUser, login, logout }
}
