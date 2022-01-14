// const { InvalidBody, userNotFound ,userIsExist} = require('../errors/index')
import User from "../models/user";
import { RequestHandler } from "express";
import { v4 as uuidv4 } from "uuid";
import { Op } from "sequelize";

export const createUser: RequestHandler = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const userExist = await User.findOne({
      where: { email: email },
    });

    if (userExist) {
      throw new Error("This user already exist");
    } else {
      const id = uuidv4();
      const newUser = await User.create({ id, name, email, password });
      res.json(newUser);
    }
  } catch (error) {
    res.json(error);
  }
};

export const getAllUser: RequestHandler = async (req, res) => {
  try {
    const users = await User.findAll({ attributes: ["name", "email"] });
    res.json(users);
  } catch (error) {
    res.json(error);
  }
};

export const getUserById: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      where: {
        id: {
          [Op.eq]: id,
        },
      },
    });

    //   if (!id || !isValidUuid(id)) {
    //     throw new Error("This id are not valid");
    //   }
    res.json({ user });
  } catch (error) {
    console.log(error);
  }
};


export const updateUser: RequestHandler = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.findOne({ where: { id: req.params.id } });
    if(!user){throw new Error('User not found')}
    await User.update({name, email, password},{where:{id: req.params.id}});
    res.json({ message: "user has updated" });
  } catch (error) {
    res.json(error);
  }
};

export const deleteUser: RequestHandler = async (req, res) => {
  try {
    const user = await User.findOne({ where: { id: req.params.id } });
    await user?.destroy();
    res.json({ message: "user has deleted" });
  } catch (error) {
    res.json(error);
  }
};
