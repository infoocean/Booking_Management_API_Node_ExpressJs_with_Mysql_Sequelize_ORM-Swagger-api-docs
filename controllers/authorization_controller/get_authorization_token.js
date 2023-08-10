const { generateauthorizationToken } = require("../../helper/helperfn");
const getauthorizationtoken = async (req, res) => {
  try {
    const token = await generateauthorizationToken();
    if (token) {
      res.status(200).json({ success: true, message: "ok", token: token });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
module.exports = { getauthorizationtoken };
