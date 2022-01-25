//EASY
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

//MEDIUM
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
//the list. THe value of each LinkedList node is always in the range of 0 - 9. 
//Note: Your function must create and return a new Linked List, you're not allowed to modify either of the input Linked Lists. 

class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = next;
    }
}

const sumOfLinkedLists = (linkedListOne, linkedListTwo) => {
    const newLinkedLists = newLinkedList[0];
    let currentNode = newLinkedListHeadPointer;
    let carry = 0;

    let nodeOne = linkedListOne;
    let nodeTwo = linkedListTwo;

    while (nodeOne !== null || nodeTwo !)
    }

}


//HARD
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