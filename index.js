function hasTargetSum(array, target) {
  // Write your algorithm here
  /* find any two numbers in the array that would sum up to the target*/

  /* 1.Select 1 element of the array per time with the outer loop
     2.Select members after it's index with the inner loop */
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      /* Sum element selected with the outer loop 
      with members after its index and compare to target*/
      let sum = array[i] + array[j];      
      if (sum === target) {return true;}
      
    }}
  return false;
}
/* 
  Write the Big O time complexity of your function here

  O(n**2) --- Big O of n squared (quadratic time)
*/
/* 
  Add your pseudocode here
  1. Select first element in the array
  2.Add first element in the array to the second element in the array
  3.compare their summation to the target 
  4. If sum === target return true, else return false.

*/
/*
  Add written explanation of your solution here
  For this case, one way of doing it would be,
  loop thorough the array adding each element 
  one by one, to the ones after it, and comparing 
  their summation to the target.
  Would need an two loops, one nested in the
  other, outer loop for selecting each member,
  inner loop would add the number to the other 
  members  of the array after it's index.
  to get the first element of the array,
  then
*/
// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([5, 5, 4, 6, 30], 10));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([10, 10, 4, 6, 0], 10));

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 1, 1], 3));

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([10, 2, 5], 0));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;