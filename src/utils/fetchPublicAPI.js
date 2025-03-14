const BASE_URL = import.meta.env.BASE_URL;
const BASE_HEADERS = {
  "Content-Type": "application/json",
};

/**
 * Fetches data from Public API
 * @param {string} url 
 * @param {string} method 
 * @param {object} body 
 * @returns response
 */
const fetchApi = async (url, method = "GET", body = null) => {
  const options = {
    method,
    headers: BASE_HEADERS,
  };

  if (body && method !== "GET") {
    options.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(BASE_URL + url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching data: ", error);
    throw error;
  }
};

export default fetchApi;

