import md5 from 'md5';

const timestamp = new Date().getTime();
const publicKey = '3175c62bad6bef9f452c9ede0b181769';
const privateKey = '7450d24ec088839ff96945e74877b3079583f7a5';
const hash = md5(timestamp+privateKey+publicKey);

const baseURL = 'http://gateway.marvel.com/v1/public/comics?';

export { timestamp, publicKey, hash, baseURL };