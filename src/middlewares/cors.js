import cors from 'cors';
import config from '../config';

const corsOptions = {
  origin: [config.fe.baseUrl],
};

export default cors(corsOptions);
