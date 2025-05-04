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
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

let l = new LinkedList();
l.prepend("cos tam");
l.append("cos")
console.log(l.getHead());
