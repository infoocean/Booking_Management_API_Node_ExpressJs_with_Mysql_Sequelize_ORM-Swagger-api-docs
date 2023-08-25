module.exports = {
  Contribution:{
    type: 'object',
    properties:{
      user_id:{
        type:'integer',
        description:"User identification number",
        example:"1"
      },
      gift_id:{
        type:'integer',
        description:"Gift identification number",
        example:"1"
      },
      event_id:{
        type:'integer',
        description:"Event identification number",
        example: "1"
      },
      contribution:{
        type:'number',
        description:"Contribution made by contributor",
        example: 100
      }
    }
  },
  createContribution:{
    type:'object',
    properties:{
      user_id:{
        type:'integer',
        description:"User identification number",
        example:"1"
      },
      event_id:{
        type:'integer',
        description:"Event identification number",
        example:"1"
      },
      contribution:{
        type:'number',
        description:"Contribution made by contributor",
        example: 10.50,
      },
      description: {
        type:'string',
        description:"Contribution description",
        example:"Happy birthday"
      },
      paymentSource: {
        type:'string',
        description:"Contribution payment source",
        example:"pywdsd34343dd"
      }
    },
  },
}