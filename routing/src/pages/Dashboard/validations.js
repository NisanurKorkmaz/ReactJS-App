import { object, string } from 'yup';

const contatSchema = object({
    firstName : string().required(),
    lastName : string().required(),
    email : string().email().required(),
    message : string().min(5).required(),

});

export default contatSchema;