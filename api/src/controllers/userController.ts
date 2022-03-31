import User from "../models/user";
import { RequestHandler } from "express";
import { v4 as uuidv4 } from "uuid";
import { Op } from "sequelize";
import { any } from "sequelize/dist/lib/operators";

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
      res.json({newUser});
    }
  } catch (error) {
    res.json({error});
  }
};

export const getAllUser: RequestHandler = async (req, res) => {
  try {
    const users = await User.findAll({ attributes: {exclude: ["createdAt", "updatedAt"] } });
    res.json(users);
  } catch (error) {
    res.json({error});
  }
};

export const getUserByEmail: RequestHandler = async (req, res) => {
  try {
    const { email } = req.params;
    const user = await User.findOne({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      where: {
        email: {
          [Op.eq]: email,
        },
      },
    });
    res.json({ user });
  } catch (error) {
    console.log(error);
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

export const loginUser: RequestHandler = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email: email, password: password } });
    if(!user){throw new Error('User not found')}
    res.json({ user });
  } catch (error) {
    res.json(error);
  }
};


const removeItemFromArr = ( eventarray: any, event: any ) => {
  //@ts-ignore
  return eventarray.filter( e => e !== event );
};


export const updateEventAttend: RequestHandler = async (req, res) => {
  try {
    const { email, eventAttend } = req.body;
    const event = await User.findOne({ where: {email: email} });
    event?.eventAttend.push(eventAttend)   
    await User.update({ eventAttend: event?.eventAttend},{where:{email:email}});
    res.json({ message: "update" });
  } catch (error) {
    res.json(error);
  }
};


export const updateNotEventAttend: RequestHandler = async (req, res) => {
  try {
    const { email, eventAttend } = req.body;
    const event = await User.findOne({ where: {email: email} });
   const newEventList = removeItemFromArr(event?.eventAttend, eventAttend)
    await User.update({ eventAttend: newEventList},{where:{email:email}});
    res.json({ message: "update" });
  } catch (error) {
    res.json(error);
  }
};
