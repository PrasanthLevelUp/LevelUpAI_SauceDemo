import 'dotenv/config';

// export const env = {

//   baseUrl: process.env.BASE_URL!,

//   saucePassword:
//     process.env.SAUCE_PASSWORD!
// };


function required(
  value: string | undefined,
  name: string
) {
  if (!value) {
    throw new Error(
      `${name} missing`
    );
  }

  return value;
}


export const env = {

  baseUrl:
    required(
      process.env.BASE_URL,
      'BASE_URL'
    ),

  saucePassword:
    required(
      process.env.SAUCE_PASSWORD,
      'SAUCE_PASSWORD'
    )
};