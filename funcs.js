function getMean(nums){
    const sum = nums.reduce((accum, nextNum) => {
        return accum + nextNum;
    })
    return sum/nums.length
}

function getMedian(nums){
    nums.sort((a, b) => a - b)
    let midIdx = Math.floor(nums.length/2)
    
    if (nums.length % 2 === 1){
        return nums[midIdx]
    }
    else{
        return (nums[midIdx-1] + nums[midIdx])/2
    }
}

function getMode(nums){
   const freqMap = {};
   nums.forEach(num => {
        freqMap[num] = (freqMap[num] || 0) + 1;
   });

   let modes = []
   let maxFreq = 0;

   for (let num in freqMap){
        const freq = freqMap[num];
        if (freq > maxFreq){
            maxFreq = freq;
            modes = [parseInt(num)];
        }
        else if (freq === maxFreq){
            modes.push(parseInt(num))
        }
   }
   return modes;
}

function convertAndCheckNumString(numStr){
    if (!numStr){
        return new Error('Empty query string.')
    }
    nums = numStr.split(',')
    let numsArr = []
    for (let num of nums){
        let number = Number(num)
        if (isNaN(number)){
            return new Error(`${num} is not a number.`)
        }
        numsArr.push(number)
    }
    return numsArr;
}

module.exports = {
    getMean: getMean,
    getMedian: getMedian, 
    getMode: getMode,
    convertAndCheckNumString: convertAndCheckNumString,
}