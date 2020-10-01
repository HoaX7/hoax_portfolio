function getCookieDomain() {
	return window.location.hostname;
}
function setCookie(name, value, days) {
	var expires = "";
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
		expires = "expires=" + date.toUTCString();
	}
	document.cookie = `${name}=${value || ""};${expires};domain=${getCookieDomain()};path=/`;
	console.log("Auth token set in storage " + name + " for " + getCookieDomain());
}

function getCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(";");
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == " ") c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
	}
	return null;
}

function eraseCookie(name) {
	const domain = getCookieDomain();
	document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=${
		domain === "localhost" ? domain : "." + domain
	}`;
	console.log("Auth token removed from storage " + name + getCookieDomain());
}

module.exports = {
	_cookie: {},
	setItem: function(key, value, days) {
		if (process.browser) {
			console.log("Auth token setting in storage " + key);
			setCookie(key, value, days || 2147483647);
		} else {
			this._cookie[key] = value;
		}
	},
	getItem: function(key) {
		if (process.browser) {
			return getCookie(key);
		} else {
			return this._cookie[key];
		}
	},
	removeItem: function(key) {
		if (process.browser) {
			return eraseCookie(key);
		} else {
			delete this._cookie[key];
		}
	}
};
