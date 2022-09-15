import { convertToObject } from "typescript"

const {shuffleArray} = require('./utils')
const {bots} = require('./data.js')

const testArr1 = [1,2,3,4]
const testArr2 = []
const testArr3 = ['this', 'should', 'be', 'shuffled', 'really', 'well']
const testArr4 = bots

describe('shuffleArray should', () => {
    test('return an array', () => {
        expect(Array.isArray(shuffleArray(testArr1))).toBe(true)
        expect(Array.isArray(shuffleArray(testArr2))).toBe(true)
        expect(Array.isArray(shuffleArray(testArr3))).toBe(true)
        expect(Array.isArray(shuffleArray(testArr4))).toBe(true)


    
    })

    test('have its output array have the same length as its input array',  () => {
        expect(shuffleArray(testArr1).length).toHaveLength(testArr1.length)
        expect(shuffleArray(testArr2).length).toHaveLength(testArr2.length)
        expect(shuffleArray(testArr3).length).toHaveLength(testArr3.length)
        expect(shuffleArray(testArr4).length).toHaveLength(testArr4.length)
    })
})