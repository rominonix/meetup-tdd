import { Model, DataTypes, Optional } from "sequelize";
import db from "../connection";

interface CommentAttributes {
  id: string;
  EventId: string;
  body: string;
  // date: Date;
  UserId: string;
}

export interface CommentCreationAttributes
  extends Optional<CommentAttributes, "id"> {}

class Comment
  extends Model<CommentAttributes, CommentCreationAttributes>
  implements CommentAttributes
{
  public id!: string;
  public EventId!: string;
  public body!: string;
  // public date!: Date;
  public UserId!: string;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Comment.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      unique: true,
    },
    EventId: {
      type: DataTypes.STRING,
      allowNull: false,
      onDelete: 'cascade',
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // date: {
    //   type: DataTypes.DATE,
    //   allowNull: false,
    // },
    UserId: {
      type: DataTypes.STRING,
      allowNull: false,
      onDelete: 'cascade',
    },
  },
  {
    timestamps: true,
    sequelize: db,
    // paranoid: true,
  }
);

export default Comment;
