import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbers = [5, -1, 0, 10, 12, 7];
const str = 'DcBaHgFe';

const collection = new NumbersCollection(numbers);
collection.sort();
console.log(collection.data);

const coll2 = new CharactersCollection(str);
coll2.sort();
console.log(coll2.data);

const list = new LinkedList();
numbers.forEach(n => list.add(n));
list.sort();
list.print();
