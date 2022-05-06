import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
import configEnv from './config/env/envModule';
import connectDB from './config/database/database';
import { createRoles } from './libs/initialSetup';
import indexRoutes from './routes/index.routes';
import userRoutes from './routes/user.routes';

configEnv();

const PORT = process.env.PORT || 3000;
const app = express();
app.set('port', PORT);
app.use(cors());

connectDB();
createRoles();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(indexRoutes);
app.use(userRoutes);

app.listen(PORT, () => console.log(`Server on port: ${PORT}`));
