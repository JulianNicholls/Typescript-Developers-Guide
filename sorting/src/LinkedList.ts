import { Sortable } from './Sorter';

class LLNode {
  constructor(public data: number) { }
  next: LLNode | null = null;
}

export class LinkedList implements Sortable {
  add(data: number): void {
    const node = new LLNode(data);
    ++this._length;

    // Add to an empty list
    if (!this.head) {
      this.head = node;
      return;
    }

    // List already exists
    let tail = this.head;
    while (tail.next)
      tail = tail.next;

    tail.next = node;
  }

  // It is trivially easy to keep the length updated, rather than having to
  // count each time.
  get length(): number {
    return this._length;
  }

  at(idx: number): LLNode {
    if (!this.head) throw new Error(`Index out of bounds (${idx})`);

    let counter = 0;
    let node: LLNode | null = this.head;
    while (node) {
      if (counter === idx)
        return node;

      ++counter;
      node = node.next;
    }

    throw new Error(`Index out of bounds (${idx})`);
  }

  compare(idxLeft: number, idxRight: number): boolean {
    if (!this.head) throw new Error('List is empty');

    return this.at(idxLeft).data > this.at(idxRight).data;
  }

  // Swap the DATA of two nodes
  swap(idxLeft: number, idxRight: number): void {
    const leftNode = this.at(idxLeft);
    const rightNode = this.at(idxRight);

    const left = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = left;
  }

  print(): void {
    if (!this.head) return;

    let node: LLNode | null = this.head;
    while (node) {
      console.log(node.data);

      node = node.next;
    }
  }

  head: LLNode | null = null;
  _length = 0;
}
