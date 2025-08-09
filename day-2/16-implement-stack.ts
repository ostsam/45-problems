class Stack {
  private items: any[];

  constructor() {
    this.items = [];
  }
  pop() {
    this.items.pop();
  }
  push(element: any) {
    this.items.push(element);
  }
  peek() {
    return this.items[this.items.length - 1];
  }

  view() {
    return this.items;
  }
}

const stack = new Stack();
stack.push(1); //[1]
stack.push(2); //[1,2]
stack.push(3); //[1,2,3]
console.log(stack.view());
console.log(
  // =>[1,2,3]
  stack.peek()
); // => 3
stack.pop(); //[1,2]
console.log(stack.view());
console.log(stack.peek()); // => 2
//[1,2,3,4,5,6]
