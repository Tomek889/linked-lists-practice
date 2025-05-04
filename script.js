class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.nextNode) {
      current = current.nextNode;
    }
    current.nextNode = newNode;
  }

  prepend(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    newNode.nextNode = this.head;
    this.head = newNode;
  }

  size() {
    let numberOfNodes = 0;
    let current = this.head;

    while (current) {
      numberOfNodes++;
      current = current.nextNode;
    }

    return numberOfNodes;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    let current = this.head;

    while (current && current.nextNode) {
      current = current.nextNode;
    }

    return current;
  }

  at(index) {
    let current = this.head;

    while (current && index !== 0) {
        index--;
        current = current.nextNode;
    }

    return current;
  }

  pop() {

  }

  contains(value) {
    let current = this.head;

    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
    }

    return false;
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}


// testing
const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.contains("hamster"));
