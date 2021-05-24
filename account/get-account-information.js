const request = require('request');
require('dotenv').config('NODE_ENV=development');

const baseUrl = 'https://staging-rest.call-em-all.com/v1';
const appKey = process.env.APP_KEY;
const secretKey = process.env.SECRET_KEY;
const authToken = process.env.AUTH_TOKEN;

const oauth = {
    consumer_key: appKey,
    consumer_secret: secretKey,
    token: authToken,
};

const getAccount = () => {
    return request(
    {
        url: `${baseUrl}/account`,
        oauth,
        method: 'GET',
        json: true,
        headers: [
        {
            name: 'content-type',
            value: 'application/json',
        },
        ],
    },
    (err, resp, respBody) => {
        if (err) {
        console.log(err);
        }
        // console.log('resp', resp);
        console.log('Response: ', respBody);
    });
};

return getAccount();
