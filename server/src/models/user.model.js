const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: String,
    address: {
      shippingAddress: {
        type: String,
        require: true,
      },
      billingAddress: {
        type: String,
        require: true,
      },
    },
    role: {
      type: String,
      enum: ["admin", "seller", "customer"],
      default: "customer",
    },
    image: String,
    createdBy: {
      type: mongoose.Types.ObjectId,
      default: null,
      ref: "User",
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "inactive",
    },
    acctivationToken: {
      type: String,
      default: null,
    },
    passwordResetToken: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
    autoCreate: true,
    autoIndex: true,
  }
);

const UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel;
