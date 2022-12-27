class Node {
  constructor(element) {
    this.element = element;
    this.left = null;
    this.right = null;
  }
}
class Tree {
  constructor() {
    this.root = null;
  }
  add(element) {
    let node = new Node(element);
    if (!this.root) {
      this.root = node;
    } else {
      let current = this.root;
      let prev;
      while (current) {
        if (current.element < element) {
          prev = current;
          current = current.right;
        } else {
          prev = current;
          current = current.left;
        }
      }
      if (prev.element < element) {
        prev.right = node;
      } else {
        prev.left = node;
      }
    }
  }
  #print(current, str) {
    if (current) {
      this.#print(current.left, str);
      str.el = str.el + current.element + "  ";
      this.#print(current.right, str);
    }
  }
  printTree() {
    let str = { el: "" };
    this.#print(this.root, str);
    console.log(str.el);
  }
}

let t = new Tree();
t.add(5);
t.add(6);
t.add(3);
t.add(8);
t.add(9);
t.printTree();
