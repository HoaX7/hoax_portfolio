import { useEffect } from "react";
export default function windowEvent(event, callback) {
	useEffect(() => {
		window.addEventListener(event, callback);
		return () => window.removeEventListener(event, callback);
	}, [event, callback]);
};
