const defaultProperties = {
  id: {
    type: "integer",
    description: "Receiver identification number",
    example: 1,
  },
};

const automobileEntityProperties = {
  auto_mobile_categories: {
    type: "string",
    description: "Automobile categories : like bike, car, traveller",
    example: "bike",
  },
  auto_mobile_name: {
    type: "string",
    description: "Autobobile name",
    example: "CD Delux 125",
  },
  auto_mobile_number: {
    type: "string",
    description: "Automobile Number",
    example: "MP-17-IN-124",
  },
  auto_mobile_brand: {
    type: "string",
    description: "Automobile brand name",
    example: "Hero Honda",
  },
  auto_mobile_type: {
    type: "string",
    description: "Automobile type",
    example: "sedan",
  },
  user_id: {
    type: "integer",
    description: "User id describe owner of automobile",
    example: 1,
  },
  rc_number: {
    type: "string",
    description: "Automobile rc number",
    example: "835947dhjsfksg",
  },
  seater: {
    type: "integer",
    description: "What is the number of seats in an automobile",
    example: 2,
  },
  cost_per_km: {
    type: "integer",
    description: "Automobile amount(cost)/KM",
    example: 200,
  },
  image: {
    type: "string",
    description: "Automobile single images",
    format: "binary",
  },
  gallary_image: {
    type: "string",
    description: "Automobile gallary images",
    format: "binary",
  },
  status: {
    type: "integer",
    description:
      "Automobile status active or inactive 0 means inactive, 1 means active",
    example: 1,
  },
};

const getcreateautomobile = {
  auto_mobile_categories: {
    type: "string",
    description: "Automobile categories : like bike, car, traveller",
    example: "bike",
  },
  auto_mobile_name: {
    type: "string",
    description: "Autobobile name",
    example: "CD Delux 125",
  },
  auto_mobile_number: {
    type: "string",
    description: "Automobile Number",
    example: "MP-17-IN-124",
  },
  auto_mobile_brand: {
    type: "string",
    description: "Automobile brand name",
    example: "Hero Honda",
  },
  auto_mobile_type: {
    type: "string",
    description: "Automobile type",
    example: "sedan",
  },
  user_id: {
    type: "integer",
    description: "User id describe owner of automobile",
    example: 1,
  },
  rc_number: {
    type: "string",
    description: "Automobile rc number",
    example: "835947dhjsfksg",
  },
  seater: {
    type: "integer",
    description: "What is the number of seats in an automobile",
    example: 2,
  },
  cost_per_km: {
    type: "integer",
    description: "Automobile amount(cost)/KM",
    example: 200,
  },
  status: {
    type: "integer",
    description:
      "Automobile status active or inactive 0 means inactive, 1 means active",
    example: 1,
  },
};

const automobile_meta = {
  auto_mobile_id: {
    type: "integer",
    example: 1,
  },
  key: { type: "string", example: "gallary_image" },
  value: {
    example:
      '["uploads/auto_mobile_images/16922833255584ulvidllf9sqyfdownload.jpeg","uploads/auto_mobile_images/16922833255624ulvidllf9sqyidownload.jpg","uploads/auto_mobile_images/16922833255634ulvidllf9sqyjdownload.png"]',
  },
};

const getautomobile = {
  type: "object",
  properties: {
    ...defaultProperties,
    ...getcreateautomobile,
  },
};

const addautomobile = {
  type: "object",
  properties: {
    ...automobileEntityProperties,
  },
};

const getcreatetimeautomobile = {
  type: "object",
  properties: {
    ...getcreateautomobile,
  },
};

module.exports = {
  addautomobile: addautomobile,
  getautomobile: getautomobile,
  getcreatetimeautomobile: getcreatetimeautomobile,
  automobile_meta: automobile_meta,
};
