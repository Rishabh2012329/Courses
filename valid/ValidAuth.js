const Joi=require('joi')

async function ValidSign(obj){
    const schema=Joi.object({
        email:Joi.string().email().required(),
        name:Joi.string().min(2).required(),
        password:Joi.string().min(5).required(),
        college:Joi.string().required(),
    })
   const result=await schema.validate(obj)
   return result;
}
async function loginValid(obj){
    const schema=Joi.object({
        email:Joi.string().email().required(),
        password:Joi.string().min(5).required()
    })
   const result=await schema.validate(obj)
   return result;
}
const verifyToken = async (req, res, next) => {
    const token = req.cookies.token || '';
    try {
      if (!token) {
        return res.status(401).json('You need to Login')
      }
      const decrypt = await jwt.verify(token, process.env.TOKEN_SECRET);
      req.user = {
        id: decrypt._id
        //firstname: decrypt.firstname,
      };
      next();
    } catch (err) {
      return res.status(500).json(err.toString());
    }
  };

module.exports.verifyToken=verifyToken
module.exports.ValidSign=ValidSign
module.exports.loginValid=loginValid