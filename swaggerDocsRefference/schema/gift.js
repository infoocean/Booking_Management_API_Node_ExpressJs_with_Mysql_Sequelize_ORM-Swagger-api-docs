module.exports = {
  Gift: {
    type:'object',
    properties:{
      id: {
        type:'number',
        description:"Gift identification number",
        example:"1"
      },
      name: {
        type:'string',
        description: "Gift name",
        example: "First Bicyle"
      },
      date: {
        type:'string',
        description: "Date",
        example: "6 year old"
      },
      desc: {
        type:"string",
        description:"Description of the gift",
        example: "A bicycle is a great way for Mary to explore, enjoy nature and be healthy. Help her get a bicycle so she can make her tracks in life"
      },
      eventExists: {
        type: "boolean",
        description: "Whether events exists for gift or not",
        example: true
      },
      raised: {
        type: "number",
        description: "Total Amount raised for the Gift",
        example: 510
      },
      contribution: {
        type: "object"
      }
    }
  },
  CreateGift: {
    type:'object',
    properties:{
      title: {
        type:"string",
        description: "Gift title",
        example: "First Bicyle"
      },
      cost: {
        type:"number",
        description: "Cost of gift",
        example: 50000,
      },
      timeframe: {
        type:"string",
        description:"date",
        example:"6 years old",
      },
      description: {
        type:"string",
        description:"Description of the gift",
        example: "A bicycle is a great way for Mary to explore, enjoy nature and be healthy. Help her get a bicycle so she can make her tracks in life"
      },
      is_deleted: {
        type: "boolean",
        example:false,
      },
      child_id: {
        type: "integer",
        description: "Receiver's identification number",
        example:"1",
      },
      is_completed: {
        type:"boolean",
        example:false,
      },
      static_image_id: {
        type:"integer",
        example: 5,
      },
      all_card_status:{
        type:"boolean",
        example: false,
      },
      gift_cost_visible: {
        type:"boolean",
        description:"To show gift cost",
        example: false,
      },
      gift_thumb_pic_key: {
        type:"string",
        example: "null",
      },
      is_archived: {
        type:"boolean",
        example:false,
      },
      additional_instruction: {
        type:"string",
        description: "Extra instructions related to gift.",
        example:"null",
      },
      minimum_contribution_amount: {
        type:"number",
        description:"Minimum amount to be set for gift.",
        example:"null",
      },
      set_contribution_amount: {
        type:"number",
        description:"Set particular amount to be contributed for gift.",
        example:"null",
      },
      contribution_instruction: {
        type:"string",
        enum:['invitees-decide','set-params'],
        example:"invitees-decide",
      },
      contribution_params: {
        type:"string",
        enum:['min-contribution','set-contribution'],
        example:"min-contribution",
      },
      funding_limit: {
        type:"string",
        enum:['stop-at-100','allow-over-100'],
        description:"Set funding limit",
        example:"stop-at-100"
      },
    }
  },
  UpdateGift: {
    type:'object',
    properties:{
      title: {
        type:"string",
        description: "Gift title",
        example: "First Bicyle"
      },
      cost: {
        type:"number",
        description: "Cost of gift",
        example: 50000,
      },
      timeframe: {
        type:"string",
        description:"date",
        example:"6 years old",
      },
      description: {
        type:"string",
        description:"Description of the gift",
        example: "A bicycle is a great way for Mary to explore, enjoy nature and be healthy. Help her get a bicycle so she can make her tracks in life"
      },
      all_card_status:{
        type:"boolean",
        example: false,
      },
      gift_cost_visible: {
        type:"boolean",
        description:"To show gift cost",
        example: false,
      },
      additional_instruction: {
        type:"string",
        description: "Extra instructions related to gift.",
        example:"null",
      },
      minimum_contribution_amount: {
        type:"number",
        description:"Minimum amount to be set for gift.",
        example:"null",
      },
      set_contribution_amount: {
        type:"number",
        description:"Set particular amount to be contributed for gift.",
        example:"null",
      },
      contribution_instruction: {
        type:"string",
        enum:['invitees-decide','set-params'],
        example:"invitees-decide",
      },
      contribution_params: {
        type:"string",
        enum:['min-contribution','set-contribution'],
        example:"min-contribution",
      },
      funding_limit: {
        type:"string",
        enum:['stop-at-100','allow-over-100'],
        description:"Set funding limit",
        example:"stop-at-100"
      },
    }
  },
  deleteGift: {
    type: 'object',
    properties: {
      id: {
        type: 'integer'
      }
    }
  }
}