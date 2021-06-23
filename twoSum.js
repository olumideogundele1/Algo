export class TwoSum {

    // algorithm to solve two sum

    //Using Brute Force

   static twoSum = (arr,target) => {

        //let firstItemArr = arr[0];
        let twoSumArr = [];

        for(let i = 0; i < arr.length; i++){
            for(let j = 1; j < arr.length; j++){
                if(arr[i] + arr[j] === target && i !== j){
                    twoSumArr.push(i);
                    twoSumArr.push(j);
                    return twoSumArr
                }
            }
        }
    }


    //another method
    static twoSum2 = (arr,target) => {

        for(let i = 0; i < arr.length; i++){
            let numToFind = target - arr[i];
            for(let j = i + 1; j < arr.length; j++){
                if(numToFind === arr[j])
                    return [i,j];
            }
        }
    }


    //using hash map
    static twoSum3 = (arr,target) => {

        let map = {};
        for(let i = 0; i < arr.length; i++){
            let diff = target - arr[i];
            if(Object.values(map).includes(diff)){
                return [map[diff],i];
            }
            map[i] = arr[i];  
        }
        return;
    }
}
