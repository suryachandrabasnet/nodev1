import { Model, DataTypes } from "sequelize";
import sequelize from "../database/sequelizeConnection";

class User extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
}
User.init(
  {
    uuid: {
      type: DataTypes.uuid,
      defaultValue: DataTypes.UUIDV4,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "User must have first name" },
        notEmpty: { msg: "First name must not be empty" },
      },
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "User must have first name" },
        notEmpty: { msg: "First name must not be empty" },
      },
    },
    phoneNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      validate: {
        notNull: { msg: "User must have last name" },
        notEmpty: { msg: "Last name must not be empty" },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: { msg: "User must have a email" },
        notEmpty: { msg: "Email must not be empty" },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "User must have password" },
        notEmpty: { msg: "Password must not be empty" },
      },
    },
  },
  {
    sequelize,
    tableName: "users",
    modelName: "User",
  }
);

export default User;
