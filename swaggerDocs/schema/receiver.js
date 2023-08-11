const defaultProperties = {
  id: {
    type:'integer',
    description:"Receiver identification number",
    example: 1
  },
  is_archived: {
    type: "boolean",
    example: false
  },
  is_deleted: {
    type: "boolean",
    example: false,
  },
}

const entityProperties = {
  user_id: {
    type:'integer',
    description:"User identification number",
    example: 1
  },
  first_name: {
    type: "string",
    description: "First name of receiver",
    example: "Jack"
  },
  avatar: {
    type: "string",
    description: "image path of the url",
    example: "2/acef88e2861f439bacb477d45b1688eb.jpeg"
  },
  dob: {
    type: "string",
    pattern: "^(3[01]|[12][0-9]|0[1-9])-(1[0-2]|0[1-9])-[0-9]{4}$",
    description:"User date of birth in YYYY-MM-DD format",
    example: "2017-06-21"
  },
  gender: {
    type: "string",
    enum: ['M','F'],
    description: "Receiver gender",
    example: "M"
  },
  parent_name: {
    type: "string",
    example: "Jaswant",
  },
  last_name: {
    type: "string",
    description: "Last name of receiver",
    example: "Smith"
  },
  group_name: {
    type: "string",
    example: "null",
  },
  location: {
    type: "string",
    description: "location",
  },
  relation: {
    type: "string",
    description: "relation",
  },
  type: {
    type: "string",
    enum: ['individual','multiple'],
    description: "For individual or multiple receiver",
    example: "individual",
  },
};

const getReceiver = {
  type: 'object',
  properties: {
    ...defaultProperties,
    ...entityProperties
  },
};

const receiver = {
  type: 'object',
  properties: {
    ...entityProperties
  },
};

module.exports = {
  Receiver: getReceiver,
  CreateReceiver: receiver,
}