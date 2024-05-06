import jwt from "jsonwebtoken";
const SECRET_KEY = process.env.SECRET_KEY;

const jwtAuth = async (req, res, next) => {
    try{
        const token = req.headers.authorization?.split(' ')[1];
        const decoded = jwt.verify(token, SECRET_KEY);
        const id = decoded.id;
        req.userID = id;
        next();
    } catch(error){
        return res.status(401).send({ message: error.message });
    }
}

export default jwtAuth;