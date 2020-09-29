// IMPORT MODULES under test here:
import { countsAsYes , calculatePercent } from '../utilsOctopus.js';

const test = QUnit.test;

test('countsAsYes should take in a yes-like and return true', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const yes = 'yes\'m';
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = countsAsYes(yes);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('countsAsAYes should take in a no-like and return false', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const no = 'nope';
    const expected = false;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = countsAsYes(no);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('calculatePercentage should make a whole number percentage', (expect) => {
        const value = 1;
        const expected = 33;

        const actual = calculatePercent(value);
        expect.equal(actual, expected);
        console.log(actual, expected);
});
