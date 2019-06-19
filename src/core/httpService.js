export const httpService = {
  getMethod,
  postMethod,
  putMethod,
  deleteMethod,
};

const baseUrl = 'http://192.168.2.188:4000/';

/**
* Get method
*/
async function getMethod(url) {
  try {
    const response = await fetch(baseUrl + url);
    return handleResponse(response);
  }
  catch (error) {
    return handleError(error);
  }
}

/**
 * Post method
 * @param {string} url
 * @param {any} data
 */
async function postMethod(url, data) {
  try {
    const response = await fetch(baseUrl + url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      },
    });
    return await (response.ok ? response.json() : response.json().then(err => Promise.reject(err)));
  }
  catch (error) {
    return Promise.reject(error);
  }
}

/**
 * Put method
 *
 * @param {string} url
 * @param {any} data
 */
async function putMethod(url, data) {
  try {
    const response = await fetch(baseUrl + url, {
      method: 'PUT', body: JSON.stringify(data)
    })
    if (response.ok)
      return handleResponse(response);
    return handleError(response);
  } catch (error) {
    return handleError(error);
  }
}

/**
 * Delete method
 *
 * @param {string} url
 */
async function deleteMethod(url) {
  try {
    const response = await fetch(baseUrl + url, {
      method: 'DELETE'
    });
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
}

/**
 * Handle response data
 *
 * @param {any} response
 */
function handleResponse(response) {
  return response.json();
}

/**
 * Handle error data
 * @param {any} error
 */
function handleError(error) {
  console.log(error.clone());
  return Promise.reject(error.json());
  // return error.json();
  // return Promise.reject(error.json()).then(response => {
  //   console.log(response);
  //   return response;
  // }).catch()
}