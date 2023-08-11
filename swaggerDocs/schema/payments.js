const defaultProperties = {
  id: {
    type:'integer',
    description:"identification number",
    example: 1
  },
};

const bankAccountProperties = {
  bsb:{
    type:"string",
    description:"",
    example:"125452"
  },
  account_number:{
    type:"string",
    description:"User's account number",
    example:"5815688"
  },
  first_name:{
    type:"string",
    description:"User name",
    example:"Mario Augusto Marques da Silva"
  },
  last_name:{
    type:"string",
    description:"User last name",
    example:"Maia"
  },
  dob:{
    type:"string",
    pattern: "^(3[01]|[12][0-9]|0[1-9])-(1[0-2]|0[1-9])-[0-9]{4}$",
    description:"User date of birth in YYYY-MM-DD format",
    example: "1977-05-02"
  },
  address:{
    type:"string",
    description:"address",
    example:"5 Keston Avenue"
  },
  state:{
    type:"string",
    description:"state",
    example:"NSW"
  },
  postcode:{
    type:"string",
    description:"postcode",
    example:"2088"
  },
  suburb:{
    type:"string",
    description:"suburb",
    example:"Mosman"
  },
};

const createBank = {
  type: 'object',
  properties: {
    ...bankAccountProperties
  },
};

const getBank = {
  type: 'object',
  properties: {
    ...defaultProperties,
    ...bankAccountProperties
  },
};

const cardProperties = {
  id:{
    type:'integer',
    description:"Card identification number",
    example:"1"
  },
  number:{
    type:"string",
    description:"User card number",
    example:"1232124213452312"
  },
  exp_month:{
    type:"number",
    description:"Card expiry month",
    example:"11"
  },
  exp_year:{
    type:"number",
    description:"Card expiry year",
    example:"2025"
  },
  cvc:{
    type:"number",
    description:"Card cvc code",
    example:"804"
  },
  currency:{
    type:"string",
    description:"Card currency",
    example:"AUD"
  },
};

const createCard = {
  type: 'object',
  properties: {
    ...cardProperties
  },
};

const getCard = {
  type: 'object',
  properties: {
    ...defaultProperties,
    ...cardProperties
  },
};

module.exports = {
  Bank: getBank,
  CreateBank: createBank,
  UpdateBank: createBank,
  Card: getCard,
  CreateCard: createCard,
  UpdateCard: createCard,
}