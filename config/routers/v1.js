import { Router } from 'express';
import authRoute from '../../app/routes/route.auth';

const router = Router();

router.use('/auth', authRoute);

export default router;
