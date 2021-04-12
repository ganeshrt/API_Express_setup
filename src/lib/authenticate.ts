import jwt from 'jsonwebtoken'
export const authJWt = (req: any, res: any, next: any) => {

    const authHeader = req.headers.authorization;
    console.log("token", authHeader, req.body)
    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, process.env.SECRET_KEY, (err: any, user: any) => {
            if (err) {
                console.log("token err.", err);
                res.json({ status: 403, message: "Invalid token..!" });
            }
            console.log("userr....", user)
            next();
        });
    } else {
        res.json({ status: 401, message: " token expaired!" });
    }

}