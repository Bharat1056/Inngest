import { Router } from 'express';
import { getUsers, login, logout, signup, updateUser } from '../controllers/user.controller';
import { authenticate } from '../middlewares/auth.middleware';

const router = Router()

router.post("/signup", signup)
router.post("/login", login)
router.post("/logout", logout)

// Protected Route
router.post("/update-user", authenticate, updateUser)
router.get("/users", authenticate, getUsers)

export default router
