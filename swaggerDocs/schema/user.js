const defaultProperties = {
  id: {
    type: "integer",
    description: "identification number",
    example: 1,
  },
};

const UserEntityProperties = {
  first_name: {
    type: "string",
    description: "User's first name",
    example: "Shubham Kumar",
  },
  last_name: {
    type: "string",
    description: "User's last name",
    example: "jaiswal",
  },
  email: {
    type: "string",
    description: "User's email address",
    example: "sj2585097@gmail.com",
  },
  phone_number: {
    type: "string",
    description: "User's phone number",
    example: "9131649079",
  },
  date_of_birth: {
    type: "string",
    pattern: "^(3[01]|[12][0-9]|0[1-9])-(1[0-2]|0[1-9])-[0-9]{4}$",
    description: "User's date of birth in YYYY-MM-DD format",
    example: "1977-05-02",
  },
  role_id: {
    type: "integer",
    description: "User's role",
    example: 2,
  },
};

const createUser = {
  type: "object",
  properties: {
    ...UserEntityProperties,
  },
};

const getUsers = {
  type: "object",
  properties: {
    ...defaultProperties,
    ...UserEntityProperties,
    profile_picture: {
      type: "string",
      example: "uploads/users_images/16927702876044ulag7llnbq19xdownload.jpg",
    },
  },
};

module.exports = {
  createUser: createUser,
  getUsers: getUsers,
};
