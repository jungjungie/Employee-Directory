import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=5";

export default {
    generate: function () {
        return axios.get(BASEURL);
    }
};
