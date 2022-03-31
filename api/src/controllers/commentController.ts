import Comment from "../models/comment";
import { RequestHandler } from "express";
import { v4 as uuidv4 } from "uuid";
import { Op } from "sequelize";

export const createComment: RequestHandler = async (req, res) => {
  try {
    const { eventid, userid } = req.params;
    const { body } = req.body;
  
      const id = uuidv4();
      const newComment = await Comment.create({
        id,
        body,
        EventId: eventid,
        UserId: userid,
      });
      res.json(newComment);
  } catch (error) {
    res.json(error);
  }
};

export const getAllComment: RequestHandler = async (req, res) => {
  try {
    const comments = await Comment.findAll({
      attributes: ["UserId", "EventId", "body"],
    });
    res.json({comments});
  } catch (error) {
    res.json(error);
  }
};

export const getCommentById: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const comment = await Comment.findOne({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      where: {
        id: {
          [Op.eq]: id,
        },
      },
    });

    res.json({ comment });
  } catch (error) {
    console.log(error);
  }
};

export const getCommentByEventId: RequestHandler = async (req, res) => {
  try {
    const { EventId } = req.params;
    const comment = await Comment.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      where: {
        EventId: {
          [Op.eq]: EventId,
        },
      },
    });
    res.json(comment);
  } catch (error) {
    console.log(error);
  }
};

export const updateComment: RequestHandler = async (req, res) => {
  try {
    const { body } = req.body;
    const comment = await Comment.findOne({ where: { id: req.params.id } });
    if (!comment) {
      throw new Error("Comment not found");
    }
    await Comment.update({ body }, { where: { id: req.params.id } });
    res.json({ message: "comment has updated" });
  } catch (error) {
    res.json(error);
  }
};

export const deleteComment: RequestHandler = async (req, res) => {
  try {
    const comment = await Comment.findOne({ where: { id: req.params.id } });
    await comment?.destroy();
    res.json({ message: "Comment has deleted" });
  } catch (error) {
    res.json(error);
  }
};
