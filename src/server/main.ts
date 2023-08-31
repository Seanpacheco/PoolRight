import express from 'express';
import ViteExpress from 'vite-express';
import * as dotenv from 'dotenv';

dotenv.config({ path: './.env' });

const app = express();
const cors = require('cors');

const morgan = require('morgan');

app.use(morgan('dev'));
app.use(cors());

app.get('/api/v1/accounts', (req, res) => {
  console.log('getting accounts');
  res.status(200).json({
    status: 'success',
    data: [
      {
        id: 1,
        name: 'Alex Santos',
        address: '123 Main St.',
        zipCode: '01010',
        state: 'HI',
        gallons: 12000,
        sanitizer: 'chlorine',
      },
      {
        id: 2,
        name: 'Viva Wittman',
        address: '34 Yellowbrick Rd.',
        zipCode: '01010',
        state: 'HI',
        gallons: 500,
        sanitizer: 'bromine',
      },
      {
        id: 3,
        name: 'Cliff Pacheco',
        address: '77 Broadway Ave.',
        zipCode: '01010',
        state: 'HI',
        gallons: 30000,
        sanitizer: 'chlorine',
      },
      {
        id: 4,
        name: 'Dywane Wade',
        address: '404 South Beach Ave.',
        zipCode: '01010',
        state: 'HI',
        gallons: 30000,
        sanitizer: 'chlorine',
      },
    ],
  });
});

ViteExpress.listen(app, 3000, () => console.log('Server is listening on port 3000...'));
