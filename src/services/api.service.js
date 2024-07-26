const BASE_URL = "http://192.168.127.242:3000/" // Replace with your API base URL
// const BASE_URL = "http://localhost:3000";
// Function to handle HTTP GET requests
export const get = async (endpoint) => {
    try {
      const response = await fetch(`${BASE_URL}${endpoint}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error during GET request:", error.message);
      throw error;
    }
  };

// Function to handle HTTP POST requests
export const post = async (endpoint, body) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: body }), // Wrap the body in a "data" object
    });

    // Handle non-2xx response errors
    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(`Network Error: ${errorResponse.message || "Unknown error"}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error during POST request:", error);
    throw error; // Rethrow the error for further handling
  }
};