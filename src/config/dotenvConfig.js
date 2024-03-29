import dotenv from 'dotenv';

dotenv.config();

export default {
    app: {
        PORT: process.env.PORT || 3000
    },
    database: {
        MONGO_USER: process.env.MONGO_USER,
        MONGO_PASSWORD: process.env.MONGO_PASSWORD
    },
    session: {
        ADMIN: process.env.ADMIN,
        PASS: process.env.PASS,
        SECRET_JWT: process.env.SECRET_JWT
    }
}