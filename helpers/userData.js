import store from "./cookieStore";

function setToken(token) {
	return store.setItem("token", token, 30);
}
function getToken() {
	return store.getItem("token");
}
function clearToken() {
	return store.removeItem("token");
}
function _clear() {
	return store.clear();
}
export default {
	setToken,
	getToken,
	clearToken,
	_clear
};
