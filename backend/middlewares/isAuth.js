// import jwt from "jsonwebtoken"
// const isAuth = async (req, res, next) => {
//     try {
//         const token = req.cookies.token
//         if (!token) {
//             return res.status(400).json({ message: "token not found" })
//         }
//         const decodeToken = jwt.verify(token, process.env.JWT_SECRET)
//         if (!decodeToken) {
//             return res.status(400).json({ message: "token not verify" })
//         }
//         req.userId = decodeToken.userId
//         next()
//     } catch (error) {
//         return res.status(500).json({ message: "isAuth error" })
//     }
// }

// export default isAuth





import jwt from "jsonwebtoken"

const isAuth = (req, res, next) => {
    try {
        const token = req.cookies.token;

        // if token not found → 401
        if (!token) {
            return res.status(401).json({ message: "No token provided" });
        }

        // verify token
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                // invalid token → 403
                return res.status(403).json({ message: "Invalid or expired token" });
            }

            // save userId
            req.userId = decoded.userId;
            next();
        });

    } catch (error) {
        return res.status(500).json({ message: "Auth middleware error" });
    }
};

export default isAuth;
