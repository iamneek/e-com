const { z } = require("zod");
const MailService = require("../../services/mail.service");
// const MongoDBService = require("../../services/mongodb.service");
const UserModel = require("../../models/user.model");
class AuthService {
  mailSvc;

  validateRegisterData = async (data) => {
    try {
      if (typeof data.address === "string") {
        data.address = JSON.parse(data.address);
      }

      const validationSchema = z.object({
        name: z
          .string()
          .min(3, {
            message: "Name must be of atlest 3 characters",
          })
          .max(50)
          .nonempty(),
        email: z.string().email().nonempty(),
        address: z.object({
          shippingAddress: z.string().nullable(),
          billingAddress: z.string().nullable(),
        }),
        phone: z.string().nullable(),
        image: z.string().nullable(),
      });
      let response = validationSchema.parse(data);
      return response;
    } catch (exception) {
      let errorbags = {};
      exception.errors.map((item) => {
        errorbags[item.path[0]] = item.message;
      });
      throw { status: 400, msg: errorbags };
    }
  };

  sendActivationEmail = async (to, name, token) => {
    try {
      this.mailSvc = new MailService();
      let url = "http://frontendurl/activate/" + token;
      this.mailSvc.setMessage({
        to: to,
        sub: "Activate your account!",
        msgBody: `<p><strong>Dear ${name},</strong></p> Your account has been registerd. 
                        <p>Please click the link below or copy paste the url to activate your account: </p>
                        <a href="${url}">${url}</a>
                        <br/>
                        <p>Regards,</p>
                        <p>System Admin</p>
                        <p><small>Please do not reply to the same email</small></p>
                        `,
      });
      return await this.mailSvc.mailSend();
    } catch (err) {
      throw err;
    }
  };

  registerrUser = async (data) => {
    try {
      let user = new UserModel(data);
      return await user.save();
      // let acknowledge = await this.db.collection("users").insertOne(data);
      // return acknowledge;
    } catch (err) {
      throw { status: 500, msg: "Error Processing Query." };
    }
  };

  getUserByToken = async (activationToken) => {
    try {
      // let data = await this.db.collection("users").findOne({
      //   activationToken: activationToken,
      // });
      let user = await UserModel.findOne({
        $and: [
          { activationToken: activationToken },
          { activationToken: { $ne: null } },
        ],
      });
      // return data;
    } catch (err) {
      console.log(err);
    }
  };
}
module.exports = AuthService;
