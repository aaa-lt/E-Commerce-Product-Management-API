import { getUserById } from "../services/user.service.js";

export const getMyUser = async (req, res) => {
    try {
        res.status(200).send(await getUserById(req.userId));
    } catch (error) {
        res.status(404).json({
            status: "error",
            error: error.message,
        });
    }
};
export const getUser = async (req, res) => {
    try {
        const user = await getUserById(req.params.id);
        res.status(200).send(user);
    } catch (error) {
        res.status(404).json({
            status: "error",
            error: error.message,
        });
    }
};
