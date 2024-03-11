import mongoose from "mongoose";
import {connection} from "../libs/connection";
import {Role} from "../interfaces/user.interface";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'У пользователя должно быть имя',
        unique: 'Такое имя уже существует',
    },
    email: {
        type: String,
        required: 'E-mail пользователя не должен быть пустым.',
        validate: [
            {
                validator(value) {
                    return /^[-.\w]+@([\w-]+\.)+[\w-]{2,12}$/.test(value);
                },
                message: 'Некорректный email.',
            },
        ],
        unique: 'Такой email уже существует',
    },
    role: {
        type: String,
    },
    passwordHash: {
        type: String,
    },
    salt: {
        type: String,
    },
}, {
    timestamps: true,
});

export const User = connection.model('User', userSchema);
