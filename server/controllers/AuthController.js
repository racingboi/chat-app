import getPrismaInstance from "../utils/PrismaClient.js";


export const checkUser = async (req, res, next) => {
    try {
        const {email} = req.body;
        if (!email) {
           return res.json({message: "Email is required", status:false});
        }
        const prisma = getPrismaInstance();
        const user = await prisma.user.findUnique({where: {email}});
        if (user) {
            return res.json({message: "User already exists", status:false});
        }else {
           return res.json({message: "User found", status:true, data: user});
        }
    }
     catch (err) {
       next(err);
    }
}