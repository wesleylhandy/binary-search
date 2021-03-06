import fs from ('fs');

const dictionary = JSON.parse(fs.readFileSync('sortedDictionary.json', 'utf-8'));
const searchTerm = process.argv[2];

export default const binarySearch = function(term) {
	let low = 0; 
	let high = dictionary.length - 1;
	let iterations = 0;
	let start = Date.now();

	while(low <= high) {
		iterations++;
		let mid = Math.floor((low + high) / 2);
		let guess = dictionary[mid].term;
		if (guess == term) {
			let end = Date.now();
			let elapsed = `${end - start} ms.`;
			return {elapsed, iterations, found: dictionary[mid]};
		} else if (guess > term) {
				high = mid - 1;
		} else {
				low = mid + 1;
		}
	}
	let end = Date.now();
	let elapsed = `${end - start} ms.`;
	return {elapsed, iterations, found: false};
}