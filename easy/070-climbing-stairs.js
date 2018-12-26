// problem 70. climbing stairs
// You are climbing a stair case. It takes n steps to reach to the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Note: Given n will be a positive integer.

// Example 1:

// Input: 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// Example 2:

// Input: 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

//create a binary tree recursively
// count how many complete branches are created

// this solution has time complexity O(2^n) and runs out of memory at n = 35

// function climbStairs (totalStairs) {
// 	count = 0
// 	//recursive function used to populatee the tree
// 	populateStairsTree(stairsTree.root, totalStairs)
// 	return count
// }

// // node class 
// function Node(stairsClimbed) {
// 	this.stairsClimbed = stairsClimbed
// 	this.leftChild = null;
// 	this.rightChild = null;
// }

// // tree class
// function Tree(node) {
// 	this.root = node;
// }
// // initialize first node with 0 steps climbed, and the tree
// let rootNode = new Node(0);
// let stairsTree = new Tree(rootNode)

// function populateStairsTree (currentNode, totalStairs) {

// 	// base case to end the current branch 
// 	if (currentNode.stairsClimbed === totalStairs) {
// 		count += 1 
// 		return
// 	}
// 	// console.log(currentNode)
// 	if (currentNode.stairsClimbed < totalStairs) {
// 		if (currentNode.stairsClimbed + 1 <= totalStairs) {
// 			currentNode.leftChild = new Node(currentNode.stairsClimbed  + 1)
// 			populateStairsTree(currentNode.leftChild, totalStairs)
// 		}
// 		if (currentNode.stairsClimbed + 2 <= totalStairs) {
// 			currentNode.rightChild = new Node(currentNode.stairsClimbed  + 2)
// 		  populateStairsTree(currentNode.rightChild, totalStairs)
// 		}
// 	} 
// }



// it just so happens that the soluction follows the fibonacci sequence formula
// basically, f(n-1) + f(n-2) = f(n) 
function climbStairs(n) {
	let first = 1
	let second = 2
	if (n === 1) {
		return first
	}

	for (let i = 3; i <= n; i ++) {
		let third = first + second
		first = second
		second = third
	}
	return second
}
console.log(climbStairs(1))
console.log(climbStairs(2))
console.log(climbStairs(3))
console.log(climbStairs(35))
// console.log(climbStairs(5))

//[1,2,3,5,8,13]