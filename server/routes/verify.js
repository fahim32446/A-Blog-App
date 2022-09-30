import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {

    try {
        const token = req.headers.authorization?.split(" ")[1];

        if (token) {
            const decodedData = jwt.verify(token, process.env.JWT_SEC, (err, decodedData) => {
                if (err) res.status(403).json("Please Sign in again");
                const { id } = decodedData;
                req.id = id;
                next();
            });

        } else {
            return res.status(401).json("Your are not authorized")
        }


    } catch (error) {
        console.log(error);
    }
}

export default auth;