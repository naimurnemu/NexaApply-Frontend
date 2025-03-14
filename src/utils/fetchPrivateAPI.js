const BASE_URL = import.meta.env.BASE_URL;
const BASE_HEADERS = {
  "Content-Type": "application/json",
};

/**
 * Fetches data from Private API
 * @param {string} url
 * @param {string} method
 * @param {object} body
 * @returns response
 */
const usePrivateFetch = async (url, method = "GET", body = null) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("No authentication token found");
    }

    const options = {
      method,
      headers: {
        ...BASE_HEADERS,
        Authorization: `Bearer ${token}`,
      },
    };

    if (body && method !== "GET") {
      options.body = JSON.stringify(body);
    }

    const response = await fetch(BASE_URL + url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching data: ", error);
    throw error;
  }
};

export default usePrivateFetch;
