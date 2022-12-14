import { loginUserWithUsernamePassword, logoutUser, registerUserWithUsernamePassword, initialAthentication } from '../../api/auth/authAPI'
import { changeSuscription } from '../../api/suscription/suscriptionAPI'
import { authenticating, login, logout, updateSuscription } from './authSlice'

export const startUsernamePasswordLogin = data => {
  return async dispatch => {
    dispatch(authenticating())

    const result = await loginUserWithUsernamePassword(data)

    if (!result.ok) return dispatch(logout(result))

    dispatch(login(result))
  }
}

export const startCreatingUserWithUsernamePassword = data => {
  return async dispatch => {
    dispatch(authenticating())

    const result = await registerUserWithUsernamePassword(data)

    if (!result.ok) return dispatch(logout(result))

    dispatch(login(result))
  }
}

export const startLogout = () => {
  return async dispatch => {
    const result = await logoutUser()
    if (result.ok) dispatch(logout())
  }
}

export const startInitialAuthentication = () => {
  return async dispatch => {
    const { authData } = await initialAthentication()

    if (authData) {
      const result = await loginUserWithUsernamePassword(authData)

      if (!result.ok) return dispatch(logout())

      return dispatch(login(result))
    }

    dispatch(logout())
  }
}

export const startUpdatingSuscription = data => {
  return async dispatch => {
    const result = changeSuscription(data)
    return dispatch(updateSuscription(result))
  }
}
