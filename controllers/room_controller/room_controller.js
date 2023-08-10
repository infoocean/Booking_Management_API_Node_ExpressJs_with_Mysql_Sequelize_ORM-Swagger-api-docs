const { hashPassword, decodeToken } = require("../../helper/helperfn");
const db = require("../../models/index.model");
const Room = db.Room;

//add room controller
const addRoomController = async (req, res) => {
  const verify_token = await decodeToken(req.headers["x-access-token"]);
  const {
    title,
    room_number,
    description,
    guest_capacity,
    room_type,
    status,
    cost_per_day,
    cost_per_hour,
    room_size,
    hotel_id,
  } = req.body;

  let image = "",
    gallary_image = [];
  if (req.files.image) {
    image = req.files.image[0]?.path;
  }
  if (req.files.gallary_image) {
    req.files.gallary_image.forEach((element) => {
      gallary_image.push(element?.path);
    });
  }

  try {
    const findroom = await Room.findOne({
      where: { title: title, hotel_id: hotel_id },
    });
    if (findroom) {
      res.status(409).json({
        success: false,
        error: "title already registered!",
      });
    } else {
      const user = await Room.create({
        title: title,
        room_number: room_number,
        description: description,
        guest_capacity: guest_capacity,
        room_type: room_type,
        status: status,
        image: image,
        gallary_image:
          gallary_image.length > 0 ? JSON.stringify(gallary_image) : "",
        cost_per_day: cost_per_day,
        cost_per_hour: cost_per_hour,
        room_size: room_size,
        hotel_id: hotel_id,
        created_by: verify_token?.id,
      });
      res.status(201).json({
        success: true,
        message: "room created successfylly!",
        user: user,
      });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//get roooms controller
const getRoomsController = async (req, res) => {
  try {
    const findRoom = await Room.findAll();
    if (findRoom.length > 0) {
      res.status(200).json({
        success: true,
        rooms: findRoom,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "rooms not found",
        rooms: findRoom,
      });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//get room by id controller
const getRoomByIdController = async (req, res) => {
  try {
    const findRoom = await Room.findByPk(req.params.id);
    if (findRoom) {
      res.status(200).json({
        succes: true,
        room: findRoom,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "room not found!",
        room: findRoom,
      });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//get rooms by hotel id controller
const getRoomsByHotelIdController = async (req, res) => {
  try {
    const findRoom = await Room.findAll({
      where: { hotel_id: req.params.id },
    });
    if (findRoom) {
      res.status(200).json({
        succes: true,
        rooms: findRoom,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "rooms not found!",
        rooms: findRoom,
      });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//edit room by id controller
const editRoomByIdController = async (req, res) => {
  const verify_token = await decodeToken(req.headers["x-access-token"]);
  const {
    title,
    room_number,
    description,
    guest_capacity,
    room_type,
    status,
    cost_per_day,
    cost_per_hour,
    room_size,
  } = req.body;
  try {
    const findRoom = await Room.update(
      {
        title: title,
        room_number: room_number,
        description: description,
        guest_capacity: guest_capacity,
        room_type: room_type,
        status: status,
        cost_per_day: cost_per_day,
        cost_per_hour: cost_per_hour,
        room_size: room_size,
        updated_by: verify_token?.id,
      },
      { where: { id: req.params.id } }
    );
    if (findRoom[0] == 1) {
      res.status(202).json({
        succes: true,
        message: "room updated successfully",
      });
    } else {
      res.status(404).json({
        success: false,
        message: "room not found!",
      });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  addRoomController,
  getRoomsController,
  getRoomByIdController,
  getRoomsByHotelIdController,
  editRoomByIdController,
};
