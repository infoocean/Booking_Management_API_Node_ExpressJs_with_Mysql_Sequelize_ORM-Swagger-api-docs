const defaultProperties = {
  id: {
    type: "integer",
    description: "identification number",
    example: 1,
  },
};

const typeidentifierEntityProperties = {
  type: {
    type: "string",
    description: "Type Identifier name",
    example: "hotel_categories",
  },
  slug: {
    type: "integer",
    description: "Hotel Slug",
    example: "hotel_categories",
  },
  entity: {
    type: "string",
    description: "Entity name : means related table name",
    example: "hotel",
  },
};

const categories_amenities_properties = {
  name: {
    type: "string",
    description: "Categories or Amenities name",
    example: "hotel_categories",
  },
  slug: {
    type: "integer",
    description: "Categories or Amenities Slug",
    example: "hotel_categories",
  },
  type_identifier_id: {
    type: "integer",
    description:
      "type identifier id : means which type identifier associated this categories or amenities ",
    example: 5,
  },
};

const gettypeidentifier = {
  type: "object",
  properties: {
    ...defaultProperties,
    ...typeidentifierEntityProperties,
  },
};

const createTypeidentifier = {
  type: "object",
  properties: {
    ...typeidentifierEntityProperties,
  },
};

const createcategories_amenities_properties = {
  type: "object",
  properties: {
    ...categories_amenities_properties,
  },
};

const getcategories_amenities_properties = {
  type: "object",
  properties: {
    ...defaultProperties,
    ...categories_amenities_properties,
  },
};

module.exports = {
  gettypeidentifier: gettypeidentifier,
  createTypeidentifier: createTypeidentifier,
  createcategories_amenities_properties: createcategories_amenities_properties,
  getcategories_amenities_properties: getcategories_amenities_properties,
};
