const { generateRandomString } = require("../../utilities/helpers");
const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
dotenv.config();
class AuthController {
  constructor(svc) {
    this.authSvc = svc;
  }
  registerUser = async (req, res, next) => {
    try {
      let data = req.body;
      data.image = req.file.filename;

      let validData = await this.authSvc.validateRegisterData(data);
      let activationToken = generateRandomString(100);

      let response = await this.authSvc.registerrUser(validData);
      console.log(response);
      await this.authSvc.sendActivationEmail(
        data.email,
        data.name,
        activationToken
      );

      res.json({
        result: validData,
        msg: "Register sucess",
        meta: null,
      });
    } catch (exception) {
      console.log(exception);
      next(exception);
    }
  };

  login = () => {};
  verifyToken = async (req, res, next) => {
    try {
      let token = req.params.token;
      let user = await this.authSvc.getUserByToken(token);
      if (!user) {
        next({ status: 400, msg: "Token Broken Or Already Used." });
      } else {
        res.json({
          data: user,
        });
      }
    } catch (err) {
      console.log(err);
      next(err);
    }
  };
}

module.exports = AuthController;
