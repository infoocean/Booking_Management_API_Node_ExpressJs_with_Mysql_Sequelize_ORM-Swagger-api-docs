module.exports = {
    User:{
        type:'object',
        properties:{
            id:{
                type:'integer',
                description:"User identification number",
                example:"1"
            },
            first_name:{
                type:'string',
                description:"User's first name",
                example:"Jaswant"
            },
            last_name:{
                type:"string",
                description:"User's last name",
                example:"Dhayal"
            },
            email:{
                type:"string",
                description:"User email address",
                example:"jaswant.dhayal@appster.in"
            },
            password:{
                type:"string",
                description:"User password",
                example:"geeSgfdd"
            },
            dob:{
                type:"string",
                pattern: "^(3[01]|[12][0-9]|0[1-9])-(1[0-2]|0[1-9])-[0-9]{4}$",
                description:"User date of birth in YYYY-MM-DD format" ,
                example:"1988-03-02"
            },
            postCode:{
                type:"string",
                description:"User postcode",
                example:""
            },
            user_type:{
                type: "string",
                enum:['p','c'],
                description:"Type of user",
                example:"p"
            },
            user_image:{
                type:"string",
                format:"binary",
                description:"User image",
                example:"1/04f0632bf9264f39a532055285f35ce7.jpeg"
            },
            account_status:{
                type: "string",
                enum:['ACTIVE','DELETED','REGISTERED'],
                description:"User status",
                example:"active"
            },
            email_verified:{
                type: "string",
                enum:['t','f'],
                description:"User email verified",
                example:"t"
            },
            reset_password:{
                type: "string",
                enum:['t','f'],
                description:"Reset user password",
                example:"t"
            },
            gender:{
                type: "string",
                enum:['m','f'],
                description:"Gender of user",
                expamle:"m"
            },
            signup_code:{
                type:"string",
                description:"Signup code for varification",
                example:"18TUVF"
            },
            address:{
                type:"string",
                description:"User address",
                example:"Nagarro Software, Aricent Ln, Electronic City, Udyog Vihar Phase IV, Sector 18, Gurugram, Haryana 122008, India"
            },
            lat:{
                type:"number",
                description:"Show latitude of user location",
                example:"28.499076"
            },
            lon:{
                type:"number",
                description:"Show longitute of user location",
                example:"77.069752"
            },
            city:{
                type:"string",
                description:"User city",
                example:"Gurugram"
            },
            state:{
                type:"string",
                description:"User state",
                example:"Haryana"
            },
            country:{
                type:"string",
                description:"User country",
                example:"India"
            },
            notification_permission:{
                type: "string",
                enum:['t','f'],
                description:"Permision for app notification",
                example:"t"
            },
            badge:{
                type:"integer",
                description:"User badge",
                example:"0"
            }
            
        }
    },
    CreateUser:{
      type:'object',
      properties:{
          first_name:{
              type:'string',
              description:"User's first name",
              example:"Jaswant"
          },
          last_name:{
              type:"string",
              description:"User's last name",
              example:"Dhayal"
          },
          email:{
              type:"string",
              description:"User email address",
              example:"jaswant.dhayal@appster.in"
          },
          password:{
              type:"string",
              description:"User password",
              example:"geeSgfdd"
          },
          dob:{
              type:"string",
              pattern: "^(3[01]|[12][0-9]|0[1-9])-(1[0-2]|0[1-9])-[0-9]{4}$",
              description:"User date of birth in YYYY-MM-DD format" ,
              example:"1988-03-02"
          },
          postCode:{
              type:"string",
              description:"User postcode",
              example:""
          },
          user_type:{
              type: "string",
              enum:['p','c'],
              description:"Type of user",
              example:"p"
          },
          user_image:{
              type:"string",
              format:"binary",
              description:"User image",
              example:"1/04f0632bf9264f39a532055285f35ce7.jpeg"
          },
          account_status:{
              type: "string",
              enum:['active','delete'],
              description:"User date of birth",
              example:"active"
          },
          email_verified:{
              type: "string",
              enum:['t','f'],
              description:"User email verified",
              example:"t"
          },
          reset_password:{
              type: "string",
              enum:['t','f'],
              description:"Reset user password",
              example:"t"
          },
          gender:{
              type: "string",
              enum:['m','f'],
              description:"Gender of user",
              expamle:"m"
          },
          signup_code:{
              type:"string",
              description:"Signup code for varification",
              example:"18TUVF"
          },
          address:{
              type:"string",
              description:"User address",
              example:"Nagarro Software, Aricent Ln, Electronic City, Udyog Vihar Phase IV, Sector 18, Gurugram, Haryana 122008, India"
          },
          lat:{
              type:"number",
              description:"Show latitude of user location",
              example:"28.499076"
          },
          lon:{
              type:"number",
              description:"Show longitute of user location",
              example:"77.069752"
          },
          city:{
              type:"string",
              description:"User city",
              example:"Gurugram"
          },
          state:{
              type:"string",
              description:"User state",
              example:"Haryana"
          },
          country:{
              type:"string",
              description:"User country",
              example:"India"
          },
          notification_permission:{
              type: "string",
              enum:['t','f'],
              description:"Permision for app notification",
              example:"t"
          },
          badge:{
              type:"integer",
              description:"User badge",
              example:"0"
          }
          
      }
  },  
  UpdateUser:{
    type:'object',
    properties:{
        first_name:{
            type:'string',
            description:"User's first name",
            example:"Jaswant"
        },
        last_name:{
            type:"string",
            description:"User's last name",
            example:"Dhayal"
        },
        dob:{
            type:"string",
            pattern: "^(3[01]|[12][0-9]|0[1-9])-(1[0-2]|0[1-9])-[0-9]{4}$",
            description:"User date of birth in YYYY-MM-DD format" ,
            example:"1988-03-02"
        },
        gender:{
            type: "string",
            enum:['m','f'],
            description:"Gender of user",
            expamle:"m"
        },
        city:{
            type:"string",
            description:"User city",
            example:"Gurugram"
        },
    }
},    
}