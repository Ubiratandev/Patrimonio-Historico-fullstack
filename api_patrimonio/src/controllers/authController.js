import { loginService } from "../services/authServices.js";

export async function loginController(req, res) {
    try {
        const { email, password } = req.body;

        const token = await loginService(email, password);

        res.json({ token });

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
