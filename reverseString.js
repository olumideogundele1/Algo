import {TwoSum} from './twoSum.js';

const reverseString = str => {
  //check if it is a string
  if (!str || str.length < 2 || typeof str !== 'string') {
    return 'string cannot be reversed';

  }
  const baackWards = [];
  const items = str.length - 1;

  //loop through string
  for (i = items; i >= 0; i--) {
    baackWards.push(str[i]);
  }
  console.log(baackWards);

  return baackWards.join('');
};

const reverseString2 = str => [...str].reverse().join('');
//console.log(reverseString('I dey for my house'));

//console.log(reverseString2('I don reverse myself 0'))


const mergeSortedArray = (arr1,arr2) => {

  const mergedArray = [];

  let arr1Item = arr1[0];
  let arr2Item = arr2[0];

//declare the index variable for the two arrays
  let i = 1;
  let j = 1;

  //check Input
  if(arr1.length === 0)
    return arr2;
  else {
    if(arr2.length === 0)
      return arr1;
  }

  //loop through the arrays
  while(arr1Item || arr2Item){
    if(!arr2Item || arr1Item < arr2Item){
      mergedArray.push(arr1Item);
      arr1Item = arr1[i];
      i++;
    }else{
      mergedArray.push(arr2Item);
      arr2Item = arr2[j];
      j++;
    }
  }
  console.log("Merged Array ======> " + mergedArray)
  return mergedArray;
}

//mergeSortedArray([0,3,5],[6,7,9,10])


// const twoSum = (num,target) => {

//   firstItemArr = num[0];
//   let twoSumArr = [];

//   for(i = 0; i < num.length; i++){
//     console.log("Arrays ... " + num[i])
//     for(j = 1; j < num.length; j++){
//       if(num[i] + num[j] === target && i !== j ){
//           twoSumArr.push(i);
//           twoSumArr.push(j);
//           return twoSumArr;
//       }
//     }
//   }

// }

// var twoSum = function(nums, target) {
//     for(let i = 0; i < nums.length; i++) {
// 	     let numToFind = target - nums[i];
// 		 for(let j = i+1; j < nums.length; j++) {
//             if(numToFind ===nums[j])
//                 return [i,j];
//         }
//     }
//     return null;
// };


console.log(TwoSum.twoSum3([2,5,5,11],10));


//Maximum SubArray Solution
let maxSubArray = (nums) => {
  let duplicateArrays = [];

//check for duplicate and remove it
//NB: we can use Set
  // for(i =0; i < array.length; i++){
  //   for(j = 1; j < array.length; j++){
  //     if(array[i] === array[j]){
  //       array.splice(j,1);
  //     }
  //     duplicateArrays.push(array[i]);
  //   }
  // }
  // console.log("Sorted!!! ",array.sort());
  // return array.filter((item,pos,self) => {
  //   console.log("Item ===> ",item)
  //   console.log("Pos ===> ",pos)
  //   console.log("self ===> ",self)
  //   return self.indexOf(item) == pos

  // })
  let [max] = nums, right = 0
  while (right < nums.length) {
      console.log(nums[right])
      nums[right] += nums[right-1] > 0 ? nums[right-1] : 0
    
      max = Math.max(max, nums[right++])
  }
  return max

  //second method
  maxSub = nums[0];
  // return duplicateArrays;
  //using filter
  // return array.filter((item,pos,self) => {
  //   return self.indexOf(item) == pos;
  // })
}

//console.log("array ====> ",maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
