const axios = require("axios");

let config = {
    responseType: "json",
	withCredentials: true,
	headers: {
		common: {
			"Content-Type": "application/json"
		}
	}
}
if(!process.browser) {
    let https = require("https");
    config.httpsAgent = new https.Agent({
        rejectUnauthorized: false
    });
}

module.exports = axios.create(config);