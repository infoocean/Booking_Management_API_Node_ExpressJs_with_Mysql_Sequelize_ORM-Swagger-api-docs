const db = require("../../models/index.model");
const TypeIdentifier = db.TypeIdentifier;

//add identifiers
const addTypeIdentifierController = async (req, res) => {
  const { type, slug, entity } = req.body;
  try {
    const findidentifier = await TypeIdentifier.findOne({
      where: { type: type },
    });
    if (findidentifier) {
      res.status(409).json({
        success: false,
        error: "type already registered!",
      });
    } else {
      const identifier = await TypeIdentifier.create({
        type: type,
        slug: slug,
        entity: entity,
      });
      res.status(201).json({
        success: true,
        message: "Identifier created successfylly!",
        identifier: identifier,
      });
    }
  } catch (error) {
    res.status(500).send({ error: true, error: error, message: error.message });
  }
};

//get users controller
const getTypeIdentifierController = async (req, res) => {
  try {
    const findtypeidentifiers = await TypeIdentifier.findAll();
    if (findtypeidentifiers.length > 0) {
      res.status(200).json({
        success: true,
        typeidentifiers: findtypeidentifiers,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "identifiers not found",
        typeidentifiers: findtypeidentifiers,
      });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getTypeIdentifierController,
  addTypeIdentifierController,
};
