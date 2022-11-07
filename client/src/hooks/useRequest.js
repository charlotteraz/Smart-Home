import axios from 'axios';
import { StatusCodes } from 'http-status-codes';

const useRequest = () => {
    const TIMEOUT = 5000;
    const TIMEOUT_MESSAGE = 'Something took too long.';

    /**
     * Create a GET request.
     * @param {*} url HTTP endpoint.
     * @returns {object} Response data. If an error occurred, an error message is given.
     */
    const get = async (url) => {
        try {
            const resp = await axios.get(url, {
                timeout: TIMEOUT,
                timeoutErrorMessage: TIMEOUT_MESSAGE,
            });
            if (resp.status === StatusCodes.OK && resp.data) {
                return resp.data;
            }
            return Promise.reject('Something went wrong. Please try again.');
        } catch (err) {
            if (err.response && err.response.data) {
                const { message } = err.response.data;
                return Promise.reject(message);
            }
            return Promise.reject(err.message);
        }
    };

    /**
     * Create a POST request.
     * @param {*} url HTTP endpoint.
     * @param {*} data JSON data to send.
     * @returns {object} Response data. If an error occurred, an error message is given.
     */
    const post = async (url, data) => {
        try {
            const resp = await axios.post(url, data, {
                timeout: TIMEOUT,
                timeoutErrorMessage: TIMEOUT_MESSAGE,
            });
            if (resp.status === StatusCodes.OK && resp.data) {
                return resp.data;
            }
            return Promise.reject('Something went wrong. Please try again.');
        } catch (err) {
            if (err.response && err.response.data) {
                const { message } = err.response.data;
                return Promise.reject(message);
            }
            return Promise.reject(err.message);
        }
    };

    return { get, post };
};

export default useRequest;
