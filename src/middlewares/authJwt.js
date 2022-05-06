import jwt from "jsonwebtoken";
import User from "../model/User";
import Rol from "../model/Rol";

export const verifyToken = async (req, res, next) => {
    try {
        const token = req.headers['x-access-token'];
        if (!token) throw new Error('Token required!');
        const decoded = jwt.verify(token, process.env.SECRET);
        req.id = decoded.id;
        const user = await User.findById(req.id);
        if (!user) res.status(400).json({message: "User not found"});
        next();
    } catch (error) {
        console.log(error);
        res.status(400).json({message: error.message});
    }
}

export const isAdmin = async (req, res, next) => {
    try {
        const user = await User.findById(req.id);
        const roles = await Rol.find({_id: {$in: user.roles}});
        for (let x=0; x<roles.length; x++) {
            if (roles[x].name === 'Administrator') next();
        }
        res.status(403).json({message: 'Administrator role required'})
    } catch (error) {
        console.log(error);
        res.status(400).json({message: error.message})
    }
}
