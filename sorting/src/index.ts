import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';

const numbers = [5, -1, 0, 10, 12, 7];
const str = 'DcBaHgFe';

const collection = new NumbersCollection(numbers);
const sorter = new Sorter(collection);
sorter.sort();
console.log(collection.data);

// const sorter2 = new Sorter(str);
// sorter2.sort();
// console.log(sorter2.collection);
