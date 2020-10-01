export const clone = (item) => {
	if (!item) {
		return item;
	}
	const types = [Number, String, Boolean];
	let result;
	types.forEach(function (type) {
		if (item instanceof type) {
			result = type(item);
		}
	});
	if (typeof result == "undefined") {
		if (Object.prototype.toString.call(item) === "[object Array]") {
			result = [];
			item.forEach(function (child, index) {
				result[index] = clone(child);
			});
		} else if (typeof item == "object") {
			result = {};
			for (var i in item) {
				result[i] = clone(item[i]);
			}
		} else {
			result = item;
		}
	}
	return result;
};