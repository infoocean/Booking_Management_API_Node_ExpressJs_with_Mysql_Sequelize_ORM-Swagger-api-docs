const defaultProperties = {
  id: {
    type:'integer',
    description:"Receiver identification number",
    example: 1
  },
  is_deleted: {
    type: "boolean",
    example: false,
  },
};

const entityProperties = {
  type: {
    type: 'string',
    description: "Event type onegift / party / gifftlist",
    example: 'onegift',
  },
  title:{
    type:'string',
    description:"Event's title",
    example:"Santino's birthday"
  },
  description:{
    type:"string",
    description:"Description related to the event",
    example:" A super thanks and c u soon for this event.",
  },
  event_date:{
    type:"string",
    pattern:"^(3[01]|[12][0-9]|0[1-9])-(1[0-2]|0[1-9])-[0-9]{4}$",
    description:"eventdate",
    example:"2017-05-25 00:00:00",
  },
  invite_code:{
    type:"string",
    example:"646825",
  },
  child_id:{
    type:"integer",
    description:"Receiver identification number.",
    example:2,
  },
  venue_start_date: {
    type:"string",
    pattern:"^(3[01]|[12][0-9]|0[1-9])-(1[0-2]|0[1-9])-[0-9]{4}$",
    example:"null",
  },
  venue_end_date: {
      type:"string",
      pattern:"^(3[01]|[12][0-9]|0[1-9])-(1[0-2]|0[1-9])-[0-9]{4}$",
      example:"null",
  },
  venue: {
    type:"string",
    example:"null",
  },
  rspv_date: {
      type:"string",
      pattern:"^(3[01]|[12][0-9]|0[1-9])-(1[0-2]|0[1-9])-[0-9]{4}$",
      example:"null",
  },
  rspv_status: {
      type:"boolean",
      example:false,
  },
  auto_send_contribution_cards: {
    type:"boolean",
    example:false,
  },
  invite_greeting: {
      type:"string",
      example:"null",
  },
  invite_subject: {
      type:"string",
      example:"null",
  },
  email_template: {
      type:"string",
      example:"null",
  },
  invite_image_url: {
      type:"string",
      example:"null",
  },
  allow_conts_over_100pc: {
      type:"boolean",
      example:false,
  },
  min_cont: {
      type:"number",
      example:"null",
  },
  set_cont:{
      type:"number",
      example:"null"
  }
};

const getEvent = {
  type: 'object',
  properties: {
    ...defaultProperties,
    ...entityProperties
  },
};

const event = {
  type: 'object',
  properties: {
    ...entityProperties
  },
};


module.exports = {
  Event: getEvent,
  CreateEvent: event,
}
