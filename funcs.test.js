const {getMean, getMedian, getMode, convertAndCheckNumString} = require('./funcs');

const testArr1 = [1, 1, 1, 1]
const testArr2 = [7134, 355, 7782, 15, 234]
const testArr3 = [5, -2, -1, 6, 2, 2]
const testArr4 = [-2125, -35, 1351, 127, -3, 623]
const testArr5 = []

describe('getMean function', () => {
    test('should return mean of all positive numbers', () =>{
        expect(getMean(testArr1)).toEqual(1)
        expect(getMean(testArr2)).toEqual(3104)
    })
    test('should return mean of + & - numbers', () =>{
        expect(getMean(testArr3)).toEqual(2)
        expect(getMean(testArr4)).toBeCloseTo(-10.333)
    })
    test('should return a number', () => {
        expect(getMean(testArr1)).toEqual(expect.any(Number))
        expect(getMean(testArr2)).toEqual(expect.any(Number))
        expect(getMean(testArr3)).toEqual(expect.any(Number))
        expect(getMean(testArr4)).toEqual(expect.any(Number))
    })
    test('empty array should return Error', () => {
        expect(() => getMean(testArr5)).toThrow(Error)
    })

})

describe('getMedian function', () => {
    test('should return median of all positive numbers', () =>{
        expect(getMedian(testArr1)).toEqual(1)
        expect(getMedian(testArr2)).toEqual(355)
    })
    test('should return median of + & - numbers', () =>{
        expect(getMedian(testArr3)).toEqual(2)
        expect(getMedian(testArr4)).toEqual(62)
    })
    test('should return a number', () => {
        expect(getMedian(testArr1)).toEqual(expect.any(Number))
        expect(getMedian(testArr2)).toEqual(expect.any(Number))
        expect(getMedian(testArr3)).toEqual(expect.any(Number))
        expect(getMedian(testArr4)).toEqual(expect.any(Number))
    })
    test('empty array should return NaN', () => {
        expect(getMedian(testArr5)).toBe(NaN);
    })

})

describe('getMode function', () => {
    test('should return mode of all positive numbers as an array', () =>{
        expect(getMode(testArr1)).toEqual([1])
        expect(getMode(testArr2)).toContain(15)
        expect(getMode(testArr2)).toContain(234)
        expect(getMode(testArr2)).toContain(355)
        expect(getMode(testArr2)).toContain(7134)
        expect(getMode(testArr2)).toContain(7782)
    })
    test('should return mode of + & - numbers as an array', () =>{
        expect(getMode(testArr3)).toEqual([2])
        expect(getMode(testArr4)).toContain(-2125)
        expect(getMode(testArr4)).toContain(-35)
        expect(getMode(testArr4)).toContain(1351)
        expect(getMode(testArr4)).toContain(127)
        expect(getMode(testArr4)).toContain(-3)
        expect(getMode(testArr4)).toContain(623)
    })
    test('should return an array of numbers', () => {
        expect(getMode(testArr1)).toEqual(expect.any(Array))
        expect(getMode(testArr2)).toEqual(expect.any(Array))
        expect(getMode(testArr3)).toEqual(expect.any(Array))
        expect(getMode(testArr4)).toEqual(expect.any(Array))
    })
    test('empty array should return empty array', () => {
        expect( getMode(testArr5)).toEqual([])
    })

})

const testStr1 = '4,81,46,10'
const testStr2 = '10,9,8,4,3,2,0'
const testStr3 = '92,cat,18'
const testStr4 = ''


describe('convertAndCheckNumString function', () =>{
    test('should return numbered array', () =>{
        expect(convertAndCheckNumString(testStr1)).toEqual([4, 81, 46, 10])
        expect(convertAndCheckNumString(testStr2)).toEqual([10, 9, 8, 4, 3, 2, 0])
    })
    test('should return Error if any members NaN', () =>{
        expect(convertAndCheckNumString(testStr3)).toBeInstanceOf(Error)
        expect(convertAndCheckNumString(testStr3).message).toEqual('cat is not a number.')
    })
    test('should return Error if empty query string', () =>{
        expect(convertAndCheckNumString(testStr4)).toBeInstanceOf(Error)
        expect(convertAndCheckNumString(testStr4).message).toEqual('Empty query string.')
    })
})