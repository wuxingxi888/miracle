import CryptoJS from 'crypto-js';

const DEFAULT_SECRET_KEY = CryptoJS.enc.Utf8.parse('1234567890abcdef'); // 十六位十六进制数作为密钥
const DEFAULT_SECRET_IV = CryptoJS.enc.Utf8.parse('fedcba0987654321'); // 十六位十六进制数作为密钥偏移量

export const encryptAES = (
  data: object | string,
  key?: string,
  iv?: string,
): string => {
  const secretKey = key ? CryptoJS.enc.Utf8.parse(key) : DEFAULT_SECRET_KEY;
  const secretIV = iv ? CryptoJS.enc.Utf8.parse(iv) : DEFAULT_SECRET_IV;

  if (typeof data === 'object') {
    try {
      data = JSON.stringify(data);
    } catch (e) {
      throw new Error(`encrypt error${e}`);
    }
  }

  const dataHex = CryptoJS.enc.Utf8.parse(data);
  const encrypted = CryptoJS.AES.encrypt(dataHex, secretKey, {
    iv: secretIV,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  return encrypted.ciphertext.toString();
};

export const decryptAES = (data: string, key?: string, iv?: string) => {
  const secretKey = key ? CryptoJS.enc.Utf8.parse(key) : DEFAULT_SECRET_KEY;
  const secretIV = iv ? CryptoJS.enc.Utf8.parse(iv) : DEFAULT_SECRET_IV;

  const encryptedHexStr = CryptoJS.enc.Hex.parse(data);
  const str = CryptoJS.enc.Base64.stringify(encryptedHexStr);
  const decrypt = CryptoJS.AES.decrypt(str, secretKey, {
    iv: secretIV,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  const decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
  return decryptedStr.toString();
};
