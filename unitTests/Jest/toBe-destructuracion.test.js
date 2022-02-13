import { retornaArreglo } from "../../base/07-deses-arr"

describe('Desestructuracion', () => {

    test('Debe retornar un string y un numero', () => {

        const [letras, numeros] = retornaArreglo(); //['ABC',123];

        expect(typeof letras).toBe('string');

        expect(typeof numeros).toBe('number');

    })

})
