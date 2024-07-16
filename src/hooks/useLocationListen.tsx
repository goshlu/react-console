import { useEffect } from "react";
import { Location, useLocation } from "react-router-dom";

export default (listener: (arg0: Location) => void) => {
	let location = useLocation();
	useEffect(() => {
		listener(location);
	}, [location]);
};
