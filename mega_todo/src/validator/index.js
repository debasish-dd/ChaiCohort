import { body } from "express-validator";

const userRegistrationValidator = () => {
  return [
    body("email")
      .trim()
      .notEmpty()
      .withMessage("Email is Required")
      .isEmail()
      .withMessage("email is invalid"),
    body("username")
      .trim()
      .notEmpty()
      .withMessage("username is Required")
      .isLength({ min: 3 })
      .withMessage("username should be greather than 3 letters")
      .isLength({ max: 13 })
      .withMessage("username should be less than 13 letters"),
    body("email")
      .trim()
      .notEmpty()
      .withMessage("Email is Required")
      .isEmail()
      .withMessage("email is invalid"),
    body("password")
      .trim()
      .notEmpty()
      .withMessage("password is Required")
      .isLength({ min: 4 })
      .withMessage("password should be greather than 4 letters")
      .isLength({ max: 15 })
      .withMessage("pasword should be less than 15 letters"),
  ];
};

const userLoginValidator = () => {
  body("email").isEmail().withMessage("email is not valid"),
    body("password").notEmpty().withMessage("password is Required");
};

export { userRegistrationValidator, userLoginValidator };
