class Stack {
  constructor() {
    this.count = 0
    this.storage = {}
  }

  push(element) {
    this.storage[this.count] = element
    this.count++
  }

  pop() {
    this.count--
    var remove = this.storage[this.count]
    delete this.storage[this.count]
    return remove
  }

  getSize() {
    return `Stack is ${this.count} units long`
  }

// see what is at top
  peek() {
    return this.storage[this.count - 1]
  }
}

var stack1 = new Stack()

stack1.push("hiii")
stack1.push("dog")
stack1.push("cat")
stack1.push("fish")
stack1.pop()
stack1.getSize()
