import 'dotenv/config';

export const env = {

  baseUrl: process.env.BASE_URL!,

  saucePassword:
    process.env.SAUCE_PASSWORD!
};