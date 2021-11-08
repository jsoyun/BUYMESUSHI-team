import mongoose from 'mongoose';
import { User } from './User';

const authBoardSchema = mongoose.Schema({
    id: {
        type: Number,
    },
});

const AuthBoard = mongoose.model('AuthBoard', authBoardSchema);

module.exports = { AuthBoard };
