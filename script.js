const crypto = require('crypto');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const algorithm = 'aes-256-cbc';
const secretKey = process.env.ENCRYPTION_SECRET_KEY; // 32 bytes
const iv = crypto.randomBytes(16); // 16 bytes
const jwtSecret = process.env.JWT_SECRET_KEY; 

const encrypt = (payload) => {
  try {
    // Step 1: Create a JWT
    const token = jwt.sign(payload, jwtSecret, { expiresIn: '1h' });

  return token
   
  
}
catch(err){
     console.error("getting error",err.message);
     return null
}};


const decrypt = (encryptedToken) => {
  try {
   

    // Verify JWT
    const decoded = jwt.verify(decrypted, jwtSecret);
    return decoded;

}
catch(err){
  console.error("getting error",err.message);
  return null
};

module.exports = {
  encrypt,
  decrypt
}};
