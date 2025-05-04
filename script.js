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
    let current = this.head;

    if (!current) {
      return;
    }

    if (!current.nextNode) {
      this.head = null;
      return;
    }

    while (current.nextNode.nextNode) {
      current = current.nextNode;
    }

    current.nextNode = null;
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

  find(value) {
    let current = this.head;
    let index = 0;

    while (current) {
      if (current.value === value) {
        return index;
      }
      current = current.nextNode;
      index++;
    }

    return null;
  }

  toString() {
    let current = this.head;
    let path = "";

    while (current) {
      path += `( ${current.value} ) -> `;
      current = current.nextNode;
    }

    path += "null";
    return path;
  }

  insertAt(value, index) {
    const newNode = new Node(value);

    if (index === 0) {
      this.prepend(value);
      return;
    }

    let previousNode = this.at(index - 1);
    let nextNode = this.at(index);

    if (previousNode) {
      previousNode.nextNode = newNode;
      newNode.nextNode = nextNode;
      return;
    }
    throw Error("Index is out-of-bound.");
  }

  removeAt(index) {
    if (index === 0) {
      if (!this.head) {
        throw Error("Index is out-of-bound.");
      }
      this.head = this.head.nextNode;
      return;
    }

    let previousNode = this.at(index - 1);
    let currentNode = this.at(index);
    let nextNode = this.at(index + 1);

    if (currentNode) {
      previousNode.nextNode = nextNode;
      return;
    }
    throw Error("Index is out-of-bound.");
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}
