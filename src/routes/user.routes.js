import { Router } from 'express';
import {
    updateUser,
    deleteUser,
    signup,
    signin,
    vehiclesByUser
} from '../controller/user.controller';
import { verifyToken, isAdmin } from '../middlewares/authJwt';

const router = Router();

router.put('/user/:id', verifyToken, updateUser);

router.delete('/user/:id', verifyToken, deleteUser);

router.post('/signup', signup);

router.post('/signin', signin);

router.get('/vehicles-user/:id', vehiclesByUser);

export default router;
