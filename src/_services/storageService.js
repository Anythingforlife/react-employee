export const storageService = {
  storeData,
  getData,
  removeData,
};

function storeData(key, data) {
  sessionStorage.setItem(key, JSON.stringify(data));
}

function getData(key) {
  return JSON.parse(sessionStorage.getItem(key) || 'null');
}

function removeData(key) {
  sessionStorage.removeItem(key);
}
