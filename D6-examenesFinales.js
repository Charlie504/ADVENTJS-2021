function sumPairs(numbers, result){
    let arr = []
    for (let i = 0; i < numbers.length; i++){  
      if (arr.length === 0){
        for (let j = 1 ; j < numbers.length ; j++){
          if (j > i){
            (numbers[i] + numbers[j] === result) ? arr = [numbers[i], numbers[j]] : null
          }                                   
        }
      }        
    }
    return (arr.length === 0) ? null : arr
  }  
  
  
    console.log(sumPairs([3, 5, 7, 2], 10) ) // [3, 7]
    console.log(sumPairs([-3, -2, 7, -5], 10)) // null
    console.log(sumPairs([2, 2, 3, 1], 4) )// [2, 2]
    console.log(sumPairs([6, 7, 1, 2], 8)) // [6, 2]
    console.log(sumPairs([0, 2, 2, 3, -1, 1, 5], 6)) // [1, 5]