import axios from "axios";

export async function fetchData(url) {
  url = "/data/" + url;

  /*
  1. Below code shows how to fetch data using Axios. 
  2. Returns a promise that resolves to the response object.
  3. Automatically rejects the promise on HTTP error status (e.g., 404, 500), making it easier to handle errors.
  4. Supports interceptors, which allow you to run your code or modify the request or response before the request 
      is sent or after the response is received.
  5. Allows global configuration for common settings (e.g., headers, base URL).
  6. Simplifies file uploads with the FormData API.
  */
  try {
    let res = await axios.get(url);
    return res.data;
  } catch (error) {
    console.error("Error:", error);
  }

  /*
  1. Below code shows how to fetch data using Fetch API.
  2. Returns a promise that resolves to the Response object. Additional steps are needed to extract JSON data.
  3. Requires manual checking of the response.ok property and throwing an error if needed.
  4. Does not have built-in support for interceptors. You need to manually implement logic before/after the fetch call.
  5. Requires manual inclusion of headers and other configurations for each request.
  6. Requires manual use of the FormData API for file uploads.
  */

  // try {
  //   const response = await fetch(url);

  //   if (!response.ok) {
  //     // Check if the response status is in the range 200-299
  //     throw new Error(`HTTP error! Status: ${response.status}`);
  //   }
  //   console.log(typeof response);
  //   const data = await response.json();
  //   return data;
  // } catch (error) {
  //   console.error("Error:", error);
  // }
}
