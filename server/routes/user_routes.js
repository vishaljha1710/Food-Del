const express = require("express");
const router = express.Router();
const user = require("../modals/user");
const {
  body,
  validatiionResult,
  validationResult,
} = require("express-validator");

router.post(
  "/createuser",
  body("email","please provide a valid email").isEmail(),
  body("name","password must be atleast 5 characters").isLength({ min: 5 }),
  body("password","password must be atleast 5 characters").isLength({ min: 5 }),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
      }

      await user.create({
        name: req.body["name"],
        location: req.body["location"],
        email: req.body["email"],
        password: req.body["password"],
      });
      res.send({ status: "success", msg: "succesfully added user" });
    } catch (error) {
      res.send({ status: "fail", error });
      console.log(error);
    }
  }
);

module.exports = router;
