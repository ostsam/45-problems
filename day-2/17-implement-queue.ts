class Queue {
  private items: any[];

  constructor() {
    this.items = [];
  }

  enqueue(element: number) {
    this.items.unshift(element);
    // this.items.push(element);
  }

  dequeue() {
    this.items.pop();
    // this.items.shift();
  }
  front() {
    return this.items[this.items.length - 1];
  }

  back() {
    return this.items[0];
  }
}
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue);

queue.dequeue();
console.log(queue);

console.log(queue.front());
console.log(queue.back());

///[1,2,3]
///[0, 1, 2, 3]
