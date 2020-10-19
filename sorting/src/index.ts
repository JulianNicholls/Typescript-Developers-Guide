import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbers = [5, -1, 0, 10, 12, 7];
const str = 'DcBaHgFe';

const collection = new NumbersCollection(numbers);
const sorter = new Sorter(collection);
sorter.sort();
console.log(collection.data);

const coll2 = new CharactersCollection(str);
const sorter2 = new Sorter(coll2);
sorter2.sort();
console.log(coll2.data);

const list = new LinkedList();
numbers.forEach(n => list.add(n));
const sorter3 = new Sorter(list);
sorter3.sort();
list.print();
