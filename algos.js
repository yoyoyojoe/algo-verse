//EASY**
// Two Number Sum
// Write a function that takes in a non-empty array of distinct integers and an
// integer representing a target sum. If any two numbers in the input array sum
// up to the target sum, the function should return them in an array, in any
// order. If no two numbers sum up to the target sum, the function should return
// an empty array. Note that the target sum has to be obtained by summing two different integers
// in the array; you can't add a single integer to itself in order to obtain the
// target sum. You can assume that there will be at most one pair of numbers summing up to
// the target sum.

const twoSum = (arr, targetSum) => {
    const nums = {};
    for (const num of arr) {
        const potentialMatch = targetSum - num;
        if (potentialMatch in nums) {
            return [potentialMatch, num];
        } else {
            nums[num] = true;
        }
    }
    return [];
}

const array1 = [3, 5, -4, 8, 11, 1, -1, 6];
const target = 10;

console.log(twoSum(array1, target))
//This solution is O(n) time and O(n) space because we have one loop are using one object for storage 

//First Non-Repeating-Character
//Write a function that takes in a string of lowercase English-alphabet letters and returns the index of the string's first non-repeating character.
//The first non-repeating character is the first character in a string that occurs only once. 
//If the input string doesn't have any non-repeating characters, your function should return -1.

const firstNonRepeatingCharacter = (string) => {
    for (let idx = 0; idx < string.length; idx++) {
        let foundDuplicate = false;
        for (let idx2 = 0; idx2 < string.length; idx2++) {
            if (string[idx] === string[idx2] && idx !== idx2) foundDuplicate = true; 
        }
        if (!foundDuplicate) return idx;
    }
    return -1;
}

const string1 = "abcdcaf";
console.log(firstNonRepeatingCharacter(string1));
//This solution is O(n^2) time and O(1) space - where n is the length of the input string. We have a nested for loop and 

//Node Depths
//The distance between a node in a Binary Tree and the tree's root is called the node's depth.
//Write a function that takes in a Binary Tree and returns the sum of its nodes' depth.
//Each BinaryTree node has an integer value, a left child node, and right child node. Children nodes can either be a BinaryTree nodes themselves or None / null. 

class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null; 
    }
}

const nodeDepths = (root) => {
    let sumOfDepths = 0;
    const stack = [{node: root, dept: 0}];
    while (stack.length > 0) {
      const {node, depth} = stack.pop();
      if (node === null) continue;
      sumOfDepths += depth; 
      stack.push({node: node.left, depth: depth + 1})
      stack.push({node: node.right, depth: depth + 1})
    }
    return sumOfDepths;
}
//This solution is O(n) time | O(h) space - where n is the number of nodes in the Binary Tree and h is the height of the Binary Tree 


//MEDIUM**
//Kadane's Algorithm
//Write A function that nakes in a non-empty array of integers and returns the maximum sum that can be
//obtained by summing up all of the integers in a non=empty subarray of the input array. A subarray must only contain
//adjacent numbers (numbers next to each other in the input array).

const kadanesAlgorithm = (arr) => {
    let maxEndingHere = arr[0];
    let maxSoFar = arr[0];
    for (let i = 1; i < arr.length; i++) {
        const num = arr[i];
        maxEndingHere = Math.max(num, maxEndingHere + num);
        maxSoFar = Math.max(maxSoFar, maxEndingHere)
    }
    return maxSoFar; 
}

const array2 = [3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4];
console.log(kadanesAlgorithm(array2));
//This solution is O(n) time and O(1) space - where n is the length of the input array. We have one loop and are using two pointers as storage 

//Sum of Linked Lists
// You're given two Linked Lists of potentially unequal length. Each Linked List
// represents a non-negative integer, where each node in the Linked List is a
// digit of that integer, and the first node in each Linked List always
// represents the least significant digit of the integer. Write a function that
// returns the head of a new Linked List that represents the sum of the integers
// represented by the two input Linked Lists. Each LinkedList node has an integer value as well as a next node pointing to the next node in the list or two None / null if it's the tail of 
//the list. The value of each LinkedList node is always in the range of 0 - 9. 
//Note: Your function must create and return a new Linked List, you're not allowed to modify either of the input Linked Lists. 

class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = next;
    }
}

const sumOfLinkedLists = (linkedListOne, linkedListTwo) => {
    const newLinkedListHeadPointer = new LinkedList[0];
    let currentNode = newLinkedListHeadPointer;
    let carry = 0;

    let nodeOne = linkedListOne;
    let nodeTwo = linkedListTwo;

    while (nodeOne !== null || nodeTwo !== null || carry !== 0) {
        const valueOne = nodeOne ? nodeOne.value : 0;
        const valueTwo = nodeTwo ? nodeTwo.value : 0;
        const sumOfValues = valueOne + valueTwo + carry;
        
        const newValue = sumOfValues % 10;
        const newNode = new LinkedList(newValue);
        currentNode.next = newNode;
        currentNode = newNode;

        carry = Math.floor(sumOfValues / 10);
        nodeOne = nodeOne !== null ? nodeOne.next : null;
        nodeTwo = nodeTwo !== null ? nodeTwo.next : null;
    }
    return newLinkedListHeadPointer.next
}

//This solution is O(max(n, m)) time | O(max(n, m)) space - where n is the length of the first linked list and m is the length of the second linked list

//Invert Binary Tree
//Write a function that takes in a Binary Tree and inverts it. In other words, the function should swap every left node in the tree for its corresponding right now.
//Each BinaryTree node has an integer value, a left child node and right child node. Children nodes can either be BinaryTree Nodes themselves or None / null. 
class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null; 
        this.right = null;
    }
}

const invertBinaryTree = (tree) => {
    const queue = [tree];
    while (queue.length) {
      const current = queue.shift();
      if (current == null) continue;
      swapLeftAndRight(current);
      queue.push(current.left);
      queue.push(current.right);
    }
}

const swapLeftAndRight = (tree) => {
    const left = tree.left;
    tree.left = tree.right;
    tree.right = left;
}
//This solution is O(n) time | O(n) space 

//HARD**
//Min Number of Jumps
//You're given a non-empty array of positive integers where each integer represents the maximum number of steps you can take forward 
//in the array. For exmaple, if the element at index 1 is 3, you can go from index 1 to index 2, 3, or 4.
//Write a function that returns the minimum number of jumps needed to reach the final index.
//Note that jumping from index i to index i + x always constitutes one jump, no matter how large x is. 

const minNumberOfJumps = (arr) => {
    const jumps = new Array(arr.length).fill(Infinity);
    jumps[0] = 0;
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[j] >= i - j) {
                jumps[i] = Math.min(jumps[j] + 1, jumps[i]);
            }
        }
    }
    return jumps[jumps.length - 1];
}

const array3 = [3, 4, 2, 1, 2, 3, 7, 1, 1, 1, 3];
console.log(minNumberOfJumps(array3))
//This solution is O(n^2) time and O(n) space - We have a nested for loop and are using 1 pointer for storage. 

//Water Area
// You're given an array of non-negative integers where each non-zero integer
// represents the height of a pillar of width 1. Imagine water being
// poured over all of the pillars; write a function that returns the surface area
// of the water trapped between the pillars viewed from the front. Note that
// spilled water should be ignored.

const waterArea = (heights) => {
    const maxes = new Array(heights.length).fill(0);
    let leftMax = 0;
    for (let i = 0; i < heights.length; i++) {
      const height = heights[i];
      maxes[i] = leftMax;
      leftMax = Math.max(leftMax, height);
    }
    let rightMax = 0;
    for (let i = heights.length - 1; i >= 0; i--) {
        const height = heights[i];
        const minHeight = Math.min(rightMax, maxes[i]);
        if (height < minHeight) {
            maxes[i] = minHeight - height;
        } else {
            maxes[i] = 0;
        }
        rightMax = Math.max(rightMax, height);
    }
    return maxes.reduce((a, b) => a + b, 0);
}
//This solution is O(n) time  | O(n) space - where n is the length of the input array

//Write a function that takes in a positive integer numberOfTags and returns a list of all the valid
//strings that you can generate with that number of matched <div></div> tags. A string is valid and 
//contains matched <div></div> tags if for every opening tag <div> there's a closing tag </div>
//that comes after the opening tag that isn't used as a closing tag for another opening tag. Each
//output string should contain exactly numberOfTags opening tags and numberOfTags closing tags. 
//Note that the output strings don't need to be in any particular order 

const generateDivTags = (numberOfTags) => {
    const matchedDivTags = [];
    generateDivTagsFromPrefix(numberOfTags, numberOfTags, '', matchedDivTags);
    return matchedDivTags;
}

const generateDivTagsFromPrefix = (openingTagsNeeded, closingTagsNeeded, prefix, result) => {
    if (openingTagsNeeded > 0) {
        const newPrefix = prefix + '<div>';
        generateDivTagsFromPrefix(openingTagsNeeded - 1, closingTagsNeeded, newPrefix, result);
    }

    if (openingTagsNeeded < closingTagsNeeded) {
        const newPrefix = prefix + '</div>';
        generateDivTagsFromPrefix(openingTagsNeeded, closingTagsNeeded - 1, newPrefix, result);
    }

    if (closingTagsNeeded === 0) result.push(prefix);
}
//This solution is O((2n)!/((n!((n + 1)!)))) time | O((2n)!/((n!((n + 1)!)))) space - where n is the input number 