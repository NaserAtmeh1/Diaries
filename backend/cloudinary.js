const cloudinary = require("cloudinary").v2
const dotenv = require("dotenv")
dotenv.config()


cloudinary.config({ 
    cloud_name: process.env.cloudName, 
    api_key: process.env.apiKey, 
    api_secret: process.env.apiSecret 
  });
  
  
  

module.exports = cloudinary