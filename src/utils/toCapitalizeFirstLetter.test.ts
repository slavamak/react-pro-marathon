import { toCapitalizeFirstLetter } from './toCapitalizeFirstLetter';

describe('toCapitalizeFirstLetter', () => {
  test('Should be take a string and "some text" return a new string that starts with a capital letter, making all other letters lowercase', () => {
    const targetString = toCapitalizeFirstLetter('some text');

    expect(targetString).toEqual('Some text');
  });

  test('Should be take a string "some TEXT" and return a new string that starts with a capital letter, making all other letters lowercase', () => {
    const targetString = toCapitalizeFirstLetter('some TEXT');

    expect(targetString).toEqual('Some text');
  });
});
