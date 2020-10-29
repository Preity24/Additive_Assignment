import axios from 'axios';

const ENDPOINT = {
	getEmployeeList: (name) => {
		const queryParams = name ? `/${name}` : '';
		return `http://api.additivasia.io/api/v1/assignment/employees${queryParams}`
	}
} 

export const getEmployeesListAPI = async (name) => {
	try {
		const res = await axios.get(ENDPOINT.getEmployeeList(name));
		return res;
	}
	catch (e) {
		throw e;
	}
}
