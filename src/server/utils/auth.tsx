import * as dotenv from 'dotenv';
import { expressjwt, Request as JWTRequest } from 'express-jwt';

dotenv.config({ path: './.env' });

const jwksRsa = require('jwks-rsa');

const checkJWT = expressjwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `${process.env.VITE_REACT_APP_AUTH0_DOMAIN}/.well-known/jwks.json`,
  }),
  audience: process.env.VITE_REACT_APP_AUTH0_AUDIENCE,
  issuer: process.env.VITE_REACT_APP_AUTH0_DOMAIN,
  algorithms: ['RS256'],
});

export default checkJWT;
