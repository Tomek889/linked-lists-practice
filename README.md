# Linked Lists Practice
This project implements a fully functional singly linked list in JavaScript using ES6 classes. It supports all essential linked list operations such as appending, prepending, inserting, deleting, finding, and more.

## 🧱 Structure
- `Node`: Represents an individual node in the list, containing a `value` and a reference to the `nextNode`.
- `LinkedList`: Manages the nodes and provides various utility methods to interact with the list.

## ✅ Core Methods
- `append(value)` — Adds a new node with the specified value to the end of the list.
- `prepend(value)` — Adds a new node to the beginning of the list.
- `size()` — Returns the number of nodes in the list.
- `getHead()` — Returns the first node in the list.
- `getTail()` — Returns the last node in the list.
- `at(index)` — Returns the node at the specified index.
- `pop()` — Removes the last node from the list.
- `contains(value)` — Returns `true` if a node with the given value exists, `false` otherwise.
- `find(value)` — Returns the index of the node containing the value, or `null` if not found.
- `toString()` — Returns a string representation of the list, e.g., `( 1 ) -> ( 2 ) -> null`.
- `insertAt(value, index)` — Inserts a new node with the specified value at the given index.
- `removeAt(index)` — Removes the node at the specified index.