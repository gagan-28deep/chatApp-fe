import ls from "localstorage-slim";

export const getStorage = (key) => {
  return ls.get(key, { decrypt: true });
};

export const setStorage = (key, value) => {
  ls.set(key, value);
};

export const removeStorage = (key) => {
  ls.remove(key);
};
