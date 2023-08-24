module.exports = {
  User: {
    type: "object",
    properties: {
      success: { example: "true" },
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
        description: "User email address",
        example: "sj2585097@gmail.com",
      },
      phone_number: {
        type: "string",
        description: "User phone number",
        example: "9131649079",
      },
      date_of_birth: {
        type: "string",
        pattern: "^(3[01]|[12][0-9]|0[1-9])-(1[0-2]|0[1-9])-[0-9]{4}$",
        description: "User date of birth in YYYY-MM-DD format",
        example: "1999-02-11",
      },
      role_id: {
        type: "integer",
        description: "User role",
        example: 2,
      },
      profile_picture: {
        type: "string",
        description: "User profile picture",
        example: "/home/shubham/Downloads/google.svg",
      },
    },
  },

  CreateUser: {
    type: "object",
    properties: {
      success: { example: "true" },
      message: { example: "user registration successfully" },
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
        description: "User email address",
        example: "sj2585097@gmail.com",
      },
      phone_number: {
        type: "string",
        description: "User phone number",
        example: "9131649079",
      },
      date_of_birth: {
        type: "string",
        pattern: "^(3[01]|[12][0-9]|0[1-9])-(1[0-2]|0[1-9])-[0-9]{4}$",
        description: "User date of birth in YYYY-MM-DD format",
        example: "1999-11-02",
      },
      role_id: {
        type: "integer",
        description: "User role",
        example: 2,
      },
    },
  },

  UpdateUser: {
    type: "object",
    properties: {
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
        description: "User email address",
        example: "sj2585097@gmail.com",
      },
      phone_number: {
        type: "string",
        description: "User phone number",
        example: "9131649079",
      },
      date_of_birth: {
        type: "string",
        description: "User phone number",
        pattern: "^(3[01]|[12][0-9]|0[1-9])-(1[0-2]|0[1-9])-[0-9]{4}$",
        description: "User date of birth in YYYY-MM-DD format",
        example: "1999-11-02",
      },
      role_id: {
        type: "integer",
        description: "User role",
        example: 2,
      },
    },
  },
};
