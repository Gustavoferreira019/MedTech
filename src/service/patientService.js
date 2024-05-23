import axios from 'axios';
const { urlApi } = require("../../environment");

const authenticate = async (user) => {
    try {
        return await axios.post(`${urlApi}/patient/authenticate`, user);
    } catch(e) {
        console.error(e);
        throw e;
    }
};

export default {
    authenticate,
};