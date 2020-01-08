import axios from 'axios';

const axiosWithAuth = () => {
    const token = sessionStorage.getItem("token");

    return axios.create({
        baseURL: "https://fish-friends-api.herokuapp.com/api",
        headers: {
            Authorization: token
        }
    });
};

export default axiosWithAuth;