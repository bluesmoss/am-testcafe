import dotenv from 'dotenv'
dotenv.config()

export const CREDENTIALS = {
    VALID_USER: {
        USERNAME: process.env.VALID_USERNAME,
        PASSWORD: process.env.VALID_PASSWORD,
    },
    INVALID_USER: {
        USERNAME: 'invalid_username',
        PASSWORD: 'invalid_password'
    }
}