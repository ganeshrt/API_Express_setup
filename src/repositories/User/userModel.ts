import mongoose from 'mongoose';

const schema = new mongoose.Schema({ username: String, password: String, role: String });
const userSchema = mongoose.model('users', schema);
export default userSchema;