import Cookie from 'moviematcher/utils/cookies';

export default class Utils {
	static currentPath() {
		return document.location.href.replace(document.location.origin, "");
	}

	static authToken() {
		return new Cookie('session').load();
	}

	static authorized() {
		return Utils.authToken() !== undefined;
	}

	static login(route) {
		const currentPath = Utils.currentPath();
		if(currentPath.startsWith("/login") || currentPath.startsWith("/register")) {
			//TODO alert the user of "unauthorized" on login page
			return;
		}
		if(! route) {
			throw new Error("No route provided for login redirect.");
		}
		route.transitionTo('login', {queryParams: {redirect: currentPath}});
	}
}
