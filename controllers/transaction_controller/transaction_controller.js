const db = require("../../models/index.model");
const { decodeToken } = require("../../helper/helperfn");
const Transaction = db.Transaction;
//add transaction
const addTransactionController = async (req, res) => {
  const verify_token = await decodeToken(req.headers["x-access-token"]);
  const { order_id, amount, txn_id, payment_method } = req.body;
  try {
    const createtransaction = await Transaction.create({
      order_id: order_id,
      amount: amount,
      txn_id: txn_id,
      payment_method: payment_method,
      created_by: verify_token?.id,
    });
    res.status(201).json({
      success: true,
      message: "transaction created successfylly!",
      transaction: createtransaction,
    });
  } catch (error) {
    res.status(500).send({ error: true, error: error, message: error.message });
  }
};
//get transactions
const getTransactionsController = async (req, res) => {
  try {
    const findTransaction = await Transaction.findAll();
    if (findTransaction.length > 0) {
      res.status(200).json({
        success: true,
        Transaction: findTransaction,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "transaction not found",
        Transaction: findTransaction,
      });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//get transaction by id
const getTransactionsByIdController = async (req, res) => {
  try {
    const findTransaction = await Transaction.findByPk(req.params.id);
    if (findTransaction) {
      res.status(200).json({
        success: true,
        Transaction: findTransaction,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "transaction not found",
        Transaction: findTransaction,
      });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  addTransactionController,
  getTransactionsController,
  getTransactionsByIdController,
};
