/**
 * Created by wjabri on 24/03/2017.
 */

import RomanNumerals from './romanNumerals.js';
describe('ES6 Foo', function () {
    it('should add two numbers', () => {
        let romanNumerals = new RomanNumerals();
        let doSomething = romanNumerals.doSomething("I");
        expect(doSomething).toBe(1);
    });
});