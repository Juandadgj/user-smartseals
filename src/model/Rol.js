import {Schema, model} from 'mongoose';

export const ROLES = ['client', 'admin'];

const Rol = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    }
},
{
    versionKey: false
}
);

export default model('rol', Rol)
