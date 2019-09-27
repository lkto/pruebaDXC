import isAllNumber from '../validations/arrayNumber';

test('El array solo contiene numeros', () => {
    let data = [2,3,4,5];
    expect(isAllNumber(data)).toBe(true);
});

test('El formato del array es incorrecto', () => {
    let data = {
        data:[2,3,4,5]
    };
    expect(isAllNumber(data)).toBe(false);
});

test('El array solo debe contener numeros y este tiene letras', () => {
    let data = ['m','s', 'r'];
    expect(isAllNumber(data)).toBe(false);
});

test('No se aceptan string solo arrays', () => {
    let data = "soy ember";
    expect(isAllNumber(data)).toBe(false);
});