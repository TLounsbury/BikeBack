const fs = require('fs');

let read_json_file = () => {
	let file = './data/Booksjson.json';
	return fs.readFileSync(file);
}

exports.calculate_prices = (tax) => {
	let json_result = JSON.parse(read_json_file());
	let result = json_result.result;
	for(let i = 0; i < result.length; i++) {
		result[i].price *= (1 + tax);
	}
	return result;
};

