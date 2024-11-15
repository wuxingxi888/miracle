import CryptoJS from 'crypto-js';

const DEFAULT_SECRET_KEY = CryptoJS.enc.Utf8.parse('3333e6e143439161'); // 十六位十六进制数作为密钥
const DEFAULT_SECRET_IV = CryptoJS.enc.Utf8.parse('e3bbe7e3ba84431a'); // 十六位十六进制数作为密钥偏移量

export const encryptoAES = (
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

  const encrypted = CryptoJS.AES.encrypt(data, secretKey, {
    iv: secretIV,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });

  return encrypted.ciphertext.toString(CryptoJS.enc.Hex);
};

export const decryptoAES = (data: string, key?: string, iv?: string) => {
  const secretKey = key ? CryptoJS.enc.Utf8.parse(key) : DEFAULT_SECRET_KEY;
  const secretIV = iv ? CryptoJS.enc.Utf8.parse(iv) : DEFAULT_SECRET_IV;

  const encryptedHexStr = CryptoJS.enc.Hex.parse(data);
  const encryptedBase64 = encryptedHexStr.toString(CryptoJS.enc.Base64);
  const decrypted = CryptoJS.AES.decrypt(encryptedBase64, secretKey, {
    iv: secretIV,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });

  const decryptedStr = decrypted.toString(CryptoJS.enc.Utf8);
  try {
    return JSON.parse(decryptedStr);
  } catch (e) {
    return decryptedStr;
  }
};
