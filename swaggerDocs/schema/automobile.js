const defaultProperties = {
  id: {
    type: "integer",
    description: "Receiver identification number",
    example: 1,
  },
};

const entityProperties = {
  auto_mobile_categories: {
    type: "string",
    example: "bike",
  },
  auto_mobile_name: {
    type: "string",
    example: "CD Delux 125",
  },
  auto_mobile_number: {
    type: "string",
    example: "MP-17-IN-124",
  },
  auto_mobile_brand: {
    type: "string",
    example: "Hero Honda",
  },
  auto_mobile_type: {
    type: "string",
    example: "sedan",
  },
  user_id: {
    type: "integer",
    example: 1,
  },
  rc_number: {
    type: "string",
    example: "835947dhjsfksg",
  },
  seater: {
    type: "integer",
    example: 2,
  },
  cost_per_km: {
    type: "integer",
    example: 200,
  },
  image: {
    type: "string",
    format: "binary",
  },
  gallary_image: {
    type: "string",
    format: "binary",
  },
  status: {
    type: "integer",
    example: 1,
  },
};

const getautomobile = {
  type: "object",
  properties: {
    ...defaultProperties,
    ...entityProperties,
  },
};

const addautomobile = {
  type: "object",
  properties: {
    ...entityProperties,
  },
};

module.exports = {
  addautomobile: addautomobile,
  getautomobile: getautomobile,
};
