import axios from "axios"
const source = axios.CancelToken.source();

var cancelRequest = {
    cancelToken: () => {
        return source.token
    },
    cancel: () => {
        return source.cancel("cancelled");
    }
}
export default cancelRequest;