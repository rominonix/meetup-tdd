import Event from "../models/event";
import { RequestHandler } from "express";
import { v4 as uuidv4 } from "uuid";
import { Op } from "sequelize";

export const createEvent: RequestHandler = async (req, res) => {
  try {
    const { userid } = req.params;
    const {
      title,
      description,
      date,
      time,
      eventImg,
      location,
      digitalEvent,
      availableSeats,
    } = req.body;
    const id = uuidv4();
    const newEvent = await Event.create({
      id,
      title,
      description,
      date,
      time,
      eventImg,
      location,
      digitalEvent,
      availableSeats,
      UserId: userid,
    });
    res.json(newEvent);
  } catch (error) {
    res.json(error);
  }
};

export const getAllEvent: RequestHandler = async (req, res) => {
  try {
    const events = await Event.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    res.json(events);
  } catch (error) {
    res.json(error);
  }
};

export const getEventById: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await Event.findOne({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      where: {
        id: {
          [Op.eq]: id,
        },
      },
    });
    res.json( event );
  } catch (error) {
    console.log(error);
  }
};

export const updateEvent: RequestHandler = async (req, res) => {
  try {
    const {
      title,
      description,
      date,
      location,
      digitalEvent,
      availableSeats,
      eventImg,
    } = req.body;
    const event = await Event.findOne({ where: { id: req.params.eventid } });
    if (!event) {
      throw new Error("Event not found");
    }
    await Event.update(
      {
        title,
        description,
        date,
        location,
        digitalEvent,
        availableSeats,
        eventImg,
      },
      { where: { id: req.params.eventid } }
    );
    res.json({ message: "Event has updated" });
  } catch (error) {
    res.json(error);
  }
};

export const deleteEvent: RequestHandler = async (req, res) => {
  try {
    const event = await Event.findOne({ where: { id: req.params.eventid } });
    await event?.destroy();
    res.json({ message: "Event has deleted" });
  } catch (error) {
    res.json(error);
  }
};

export const searchEvent: RequestHandler = async (req, res) => {

  let onlineTrueOrFalse: number;

  if (req.query.online === "") {
    onlineTrueOrFalse = 2;
  } else {
    onlineTrueOrFalse = Number(req.query.online);
  }

  if (onlineTrueOrFalse === 2 && req.query.date === "") {
  
    try {
      const events = await Event.findAll({
        where: {
          title: {
            [Op.like]: `%${req.query.title}%`
          },
          location: {
            city: {
              [Op.like]: `%${req.query.location}%`
            },
          },
        },
        order: [['date', 'ASC']]
      });
      res.json(events);
      return;
    } catch (error) {
      res.json(error);
      return;
    }
  } else if (onlineTrueOrFalse === 2) {
    let date: any = req.query.date;
    let startDate = new Date(date);
    let endDate = new Date(date);
    try {
      const events = await Event.findAll({
        where: {
          title: {
            [Op.like]: `%${req.query.title}%`
          },
          location: {
            city: {
              [Op.like]: `%${req.query.location}%`
            },
          },
          date: {
            [Op.between]: [startDate, endDate],
          },
        },
        order: [['date', 'ASC']]
      });
      res.json(events);
      return;
    } catch (error) {
      res.json(error);
      return;
    }
  }

  if (req.query.date === "") {
    try {
      const events = await Event.findAll({
        where: {
          title: {
            [Op.like]: `%${req.query.title}%`
          },
          location: {
            city: {
              [Op.like]: `%${req.query.location}%`
            },
          },
          digitalEvent: onlineTrueOrFalse,
        },
        order: [['date', 'ASC']]
      });
      res.json(events);
      return;
    } catch (error) {
      res.json(error);
      return;
    }
  } else {
    let date: any = req.query.date;
    let startDate = new Date(date);
    let endDate = new Date(date);
    try {
      const events = await Event.findAll({
        where: {
          title: {
            [Op.like]: `%${req.query.title}%`
          },
          location: {
            city: {
              [Op.like]: `%${req.query.location}%`
            },
          },
          date: {
            [Op.between]: [startDate, endDate],
          },
          digitalEvent: onlineTrueOrFalse,
        },
        order: [['date', 'ASC']]
      });
      res.json(events);
      return;
    } catch (error) {
      res.json(error);
      return;
    }
  }
};
