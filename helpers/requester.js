import Auth from "./auth";
import Requester from "./requestAgent";
Auth.setRequester(requester)

export default function requester({ headers, data, method, url, cancelToken, isFile, isRawResponse }) {
    let request = {
        method: method || "GET",
        url,
        withCredentials: true
    }
    if (isFile) {
        request.responseType = "arraybuffer";
    }
    if (headers) {
        request.headers = {"content-type": "application/json", ...headers};
    }
    if (request.method === "GET") {
        request.params = data;
    } else {
        request.data = data;
    }
    if (cancelToken) {
        request.cancelToken = cancelToken;
    }
    return Requester(request).then(res => isRawResponse === true ? res : res.data)
}