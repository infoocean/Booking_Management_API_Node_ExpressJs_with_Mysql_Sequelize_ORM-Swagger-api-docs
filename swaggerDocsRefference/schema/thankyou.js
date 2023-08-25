module.exports = {
  Thankyou:{
    type:'object',
    properties:{
      id:{
        type:'integer',
        description:"Thankyou_card_invite identification number",
        example:"1",
      },
      description:{
        type:"string",
        description:"Description written on thankyou card",
        example:"Thankyou for the contribution",
      },
      user_id:{
        type:'integer',
        description:"User identification number",
        example:"1",
      },
      sender_id:{
        type:'integer',
        description:"User identification number",
        example:"1",
      },
      contributer_id:{
        type:'integer',
        description:"Contributer identification number",
        example:"1",
      },
      gift_id:{
        type:'integer',
        description:"Gift identification number",
        example:"1",
      },
    },
  },
  createThankyou:{
    type:'object',
    properties:{
      user_id:{
        type:'integer',
        description:"User identification number",
        example:"1"
      },
      sender_id:{
        type:'integer',
        description:"User identification number",
        example:"1"
      },
      contributer_id:{
        type:'integer',
        description:"Contribution identification number",
        example:"1"
      },
      description:{
        type:"string",
        description:"Description written on thankyou card",
        example:"Thankyou for the contribution"
      },
    },
  },
};
