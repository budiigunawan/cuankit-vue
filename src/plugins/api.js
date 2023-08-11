import axios from "axios";

const baseUrl = import.meta.env.VITE_APP_BASEURL;

export default {
  install(app, options) {
    const postRequest = async (
      urlEndpoint,
      body,
      cbSuccess,
      cbFail = (e) => {
        console.error(e);
      },
      cbFinal = () => {},
      obj = {}
    ) => {
      const queryParams = obj.queryParams || {};

      try {
        const response = await axios.post(`${baseUrl}/api/${urlEndpoint}`, body, {
          ...queryParams,
        });
        cbSuccess(response);
      } catch (e) {
        cbFail(e);
      } finally {
        cbFinal();
      }
    };

    const getRequest = async (
      urlEndpoint,
      cbSuccess,
      cbFail = (e) => {
        console.error(e);
      },
      cbFinal = () => {},
      obj = {}
    ) => {
      const body = obj.body || {};

      try {
        const response = await axios.get(`${baseUrl}/api/${urlEndpoint}`, { ...body });
        cbSuccess(response.data.data);
      } catch (e) {
        cbFail(e);
      } finally {
        cbFinal();
      }
    };

    app.provide('$api', {
      post: postRequest,
      get: getRequest,
    })
  },
};
