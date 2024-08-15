import { DataTypes } from "sequelize";
import sequelize from "../../config/db.js";

const User = sequelize.define(
    "User",
    {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        is_admin: {
            type: DataTypes.BOOLEAN,
        },
    },
    { timestamps: false }
);

export default User;
