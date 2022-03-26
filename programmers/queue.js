function solution(priorities, location) {
  const queue = new Queue();
  for (let i = 0; i < priorities.length; i++) {
    queue.enqueue([priorities[i], i]);
  }

  priorities.sort((a, b) => b - a);

  let count = 0;
  while (true) {
    const currVal = queue.peek();
    if (currVal[0] < priorities[count]) {
      queue.enqueue(queue.dequeue());
    } else {
      const value = queue.dequeue();
      count++;
      if (location === value[1]) {
        return count;
      }
    }
  }
}

class Queue {
  constructor(value) {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(value) {
    this.queue[this.rear] = value;
    this.rear++;
  }

  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front++;
    return value;
  }

  peek() {
    return this.queue[this.front];
  }
}
