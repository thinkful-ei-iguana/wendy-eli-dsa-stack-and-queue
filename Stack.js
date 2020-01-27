class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    //empty stack
    if (!this.top) {
      this.top = new _Node(data, null);
      return this.top;
    }

    const node = new _Node(data, this.top);
    this.top = node;
  }

  pop() {
    if (!this.top) {
      return;
    }
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}

module.exports = Stack;
