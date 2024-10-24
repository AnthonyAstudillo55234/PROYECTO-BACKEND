import {Router} from 'express'
import { getAllToursController } from '../controllers/tour.controller.js'
const router = Router()

router.get('/tours',getAllToursController)


export default router