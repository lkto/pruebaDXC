import {sum, subtraction, multiplication, division} from '../service/calculator';

test('La suma esta funcionando correctamente', () => {
    let data = [2,3,4,5];
    expect(sum(data)).toBe(14);
});

test('La resta esta funcionando correctamente', () => {
    let data = [2,3,4,5];
    expect(subtraction(data)).toBe(-10);
});

test('La multiplicasion esta funcionando correctamente', () => {
    let data = [2,3,4,5];
    expect(multiplication(data)).toBe(120);
});

test('La divicion esta funcionando correctamente', () => {
    let data = [2,3,4,5];
    expect(division(data)).toBe(0.03333333333333333);
});