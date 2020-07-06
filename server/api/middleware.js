

export async function authorize(req, res, next) {
  const token = req.cookies ? req.cookies.user_token : null
  const excepts = ['/login', '/logout', '/register']
  const login_url = '/login'

  if (excepts.includes(req.path)) return next()

  if (!token) {
    return res.redirect(login_url)
  }

  const user = await Authorization.verifyToken(token)

  if (!user) {
    return res.redirect(login_url)
  }

  req.user_id = user.id

  next()
}