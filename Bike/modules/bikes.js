const fs = require('fs');

let read_json_file = () => {
	let file = './data/Bikejson.json';
	return fs.readFileSync(file);
}

exports.calculate_prices = (tax) => {
	let json_result = JSON.parse(read_json_file());
	for(let i = 0; i < json_result.length; i++) {
		json_result[i].price = (json_result[i].price * (1 + tax)).toFixed(2);
	}
	return json_result;
};