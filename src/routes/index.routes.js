import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.send('Microservice for user management of Smart Seals API');
});

export default router;
