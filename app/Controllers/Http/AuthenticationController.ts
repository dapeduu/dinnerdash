import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class AuthenticationController {
  public async register({ request, response, logger }: HttpContextContract) {
    const { email, name, password } = request.body()

    try {
      const user = await User.create({
        email,
        name,
        password,
      })

      return user
    } catch (error) {
      logger.error('AuthenticationController.register' + error)

      return response.badRequest('There was an error while creating user')
    }
  }

  public async login({ response, request, auth, logger }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')

    try {
      const token = await auth.use('api').attempt(email, password, {
        expiresIn: '1hour',
      })

      return token
    } catch (error) {
      logger.error('AuthenticationController.login' + error)

      return response.badRequest('Invalid credentials')
    }
  }
}
