const AuthController = require('./auth.controller')
const AuthService = require('./auth.service')

const svc = new AuthService();
const authCtrl = new AuthController(svc)


module.exports = {
    authCtrl,
    authSvc: svc
}