const fs = require('fs');

let read_json_file = () => {
	let file = './data/Taxesjson.json';
	return fs.readFileSync(file);
}

exports.find_tax = (city) => {
	let json_result = JSON.parse(read_json_file());
	let result = json_result.taxes;
	for(let i = 0; i < result.length; i++) {
		if(result[i].name === city){
			return result[i].salesTax;
		}
	}
	return -1;
};