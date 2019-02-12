import axios from 'axios';

// Axios is a promise-based HTTP client that works both in the
// browser and in a node.js environment. It basically provides
// a single API for dealing with XMLHttpRequest's and node's
// http interface.

// creating an instance with custom config.
export default axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
}); // end of the