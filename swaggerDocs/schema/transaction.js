const defaultProperties = {
  id: {
    type: "integer",
    description: "identification number",
    example: 1,
  },
};

const TransactionEntityProperties = {
  order_id: {
    type: "integer",
    description: "order id",
    example: 1,
  },
  amount: {
    type: "integer",
    description: "Transaction amount",
    example: 100,
  },
  txn_id: {
    type: "string",
    description: "Payment Transaction id",
    example: "bvgfhngfhnjgf",
  },
  payment_method: {
    type: "string",
    description: "Payment Method",
    example: "stripe",
  },
};

const createTransaction = {
  type: "object",
  properties: {
    ...TransactionEntityProperties,
  },
};

const getcreatetxn = {
  type: "object",
  properties: {
    ...defaultProperties,
    ...TransactionEntityProperties,
    RCT_number: {
      type: "string",
      example: null,
    },
  },
};

module.exports = {
  createTransaction: createTransaction,
  defaultProperties: defaultProperties,
  getcreatetxn: getcreatetxn,
};
