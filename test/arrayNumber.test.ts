//import  {isAllNumber}  from '../validations/arrayNumber';
const arrayNumber = require('./../validations/arrayNumber');

test('El array solo contiene numeros', () => {
    let data = [2,3,4,5];
    expect(arrayNumber.isAllNumber(data)).toBe(false);
});

test('El formato del array es incorrecto', () => {
    let data = {
        data:[2,3,4,5]
    };
    expect(arrayNumber.isAllNumber(data)).toBe(true);
});

test('El array solo debe contener numeros y este tiene letras', () => {
    let data = ['m','s', 'r'];
    expect(arrayNumber.isAllNumber(data)).toBe(true);
});