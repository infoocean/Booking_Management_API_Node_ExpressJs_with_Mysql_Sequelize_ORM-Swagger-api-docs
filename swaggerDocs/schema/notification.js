module.exports = {
    Notification:{
        type:'object',
        properties:{
            id: {
                type:'integer',
                description:"Notification identification number",
                example: 1
            },
            user_id:{
                type:'integer',
                description:"User identification number",
                example:"1"
            },
            message:{
                type:'string',
                description:"A message send to user mobile",
                example:"This is your first message"
            },
            notification_type:{
                type:'integer',
                description:"Type of notification indicated by number",
                example:"1"
            },
            sender_id:{
                type:'integer',
                description:"Sender identification number",
                example:"1"
            },
            data:{
                type:'string',
                description:"Data recorded in database",
                example:"contributionId:1"
            },
            is_deleted:{
                type: "string",
                enum:['t','f'],
                description:"Value is deleted or not",
                example:"t"
            },
            is_read:{
                type: "string",
                enum:['t','f'],
                description:"message is read or not",
                example:"t"
            },
    
        }
    },
}