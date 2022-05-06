import {connect} from 'mongoose';
import configEnv from '../env/envModule';

configEnv();

const connectDB = async () => {
  try {
    const db = await connect(process.env.DB_MONGO);
    console.log('DB Connected');
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

export default connectDB;
