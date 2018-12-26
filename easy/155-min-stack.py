#  Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

#     push(x) -- Push element x onto stack.
#     pop() -- Removes the element on top of the stack.
#     top() -- Get the top element.
#     getMin() -- Retrieve the minimum element in the stack.

# Example:

# MinStack minStack = new MinStack();
# minStack.push(-2);
# minStack.push(0);
# minStack.push(-3);
# minStack.getMin();   --> Returns -3.
# minStack.pop();
# minStack.top();      --> Returns 0.
# minStack.getMin();   --> Returns -2.


class MinStack:

    def __init__(self):
        """
        initialize your data structure here.
        """
        self.stack = []

        # stack that holds the indexes of min values with right most index being the current min
        self.minList = []

    def push(self, x):
        """
        :type x: int
        :rtype: void
        """
        # if stack is empty the first value becomes the min
        if len(self.minList) == 0:
            self.minList.append(0)
            # if the new value is smaller than the current min, add its index to the minList
        elif x < self.stack[self.minList[len(self.minList) - 1]]:
            self.minList.append(len(self.stack))
        self.stack.append(x)

    def pop(self):
        """
        :rtype: void
        """
        # if the value being removed is the current min, remove its index from the minList
        if self.minList[len(self.minList) - 1] == len(self.stack) - 1:
            self.minList.pop()

        self.stack.pop()

    def top(self):
        """
        :rtype: int
        """
        return self.stack[len(self.stack) - 1]

    def getMin(self):
        """
        :rtype: int
        """
        return self.stack[self.minList[len(self.minList) - 1]]

# Your MinStack object will be instantiated and called as such:
# obj = MinStack()
# obj.push(x)
# obj.pop()
# param_3 = obj.top()
# param_4 = obj.getMin()


myStack = MinStack()
myStack.push(3)
myStack.push(-3)
myStack.push(-4)
print(myStack.stack)
print(myStack.getMin())
myStack.pop()
print(myStack.getMin())
print(myStack.top())
