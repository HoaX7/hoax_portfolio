import userData from "./userData";

function setAuthorizationToken(token) {
	if (token) {
		Auth.Requester.defaults.headers.common["Authorization"] = `Bearer ${token}`;
	} else {
		delete Auth.Requester.defaults.headers.common["Authorization"];
	}
}

var Auth = {
	Requester: null,
	setRequester(Requester) {
		this.Requester = Requester;
		const token = userData.getToken();
		if (token) {
			setAuthorizationToken(token);
		}
	},
	setAuthToken(token) {
		setAuthorizationToken(token);
		userData.setToken(token);
	},
	getAuthToken(token) {
		return userData.getToken(token);
	},
	isLoggedIn() {
		return !!userData.getToken();
	},
	clearAuthToken() {
		userData.clearToken(null);
		console.log("Auth token cleared");
	}
};

export default Auth;
