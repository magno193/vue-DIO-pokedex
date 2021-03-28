import axios from 'axios';
import {
	requestInterceptor,
	responseSuccessInterceptor,
	responseErrorInterceptor,
} from './interceptors';

function Factory(baseUrl) {
	const instance = axios.create({
		baseUrl,
	});

	instance.interceptors.request.use(requestInterceptor);

	instance.interceptors.request.use(
		responseSuccessInterceptor,
		responseErrorInterceptor,
	);

	return instance;
}

export default Factory;
