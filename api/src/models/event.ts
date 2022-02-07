import User from "./user";
import db from "../connection";
import Comment from "./comment";

import { Model, DataTypes, Optional } from "sequelize";

interface EventAttributes {
  id: string;
  title: string;
  description: string;
  date: Date | undefined;
  time: string;
  location?: {
    street: string;
    city: string;
  };
  reviews?: number[];
  digitalEvent: boolean;
  availableSeats: number;
  UserId: string;
  eventImg: string;
}

export interface EventCreationAttributes
  extends Optional<EventAttributes, "id"> {}

class Event
  extends Model<EventAttributes, EventCreationAttributes>
  implements EventAttributes
{
  public id!: string;
  public title!: string;
  public description!: string;
  public date!: Date | undefined;
  public time!: string;
  public location?: { street: string; city: string };
  public reviews?: number[];
  public digitalEvent!: boolean;
  public availableSeats!: number;
  public eventImg!: string;
  public UserId!: string;
  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

}

Event.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      unique: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    time: {
      type: DataTypes.TIME,
      defaultValue: "00:00",
      allowNull: false,
    },
    location: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    reviews: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    digitalEvent: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    availableSeats: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    UserId: {
      type: DataTypes.STRING,
      allowNull: false,
      onDelete: "cascade",
    },
    eventImg: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    sequelize: db,
  }
);

User.hasOne(Event, { onDelete: "cascade", hooks: true });
Event.belongsTo(User);

Event.hasOne(Comment);
Comment.belongsTo(Event);

User.hasOne(Comment, { onDelete: "cascade", hooks: true });
Comment.belongsTo(User);

Event.belongsToMany(User, { through: "Eventusers" });
User.belongsToMany(Event, {
  through: "Eventusers",
  onDelete: "cascade",
  hooks: true,
});

export default Event;
