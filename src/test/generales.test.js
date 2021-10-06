
describe ('probando Jest', () => {
    test ('prueba de objetos iguales', () => {
        const datos1 = {
            nombre: 'Daniela',
            edad: 22
        };
        const datos2 = {
            nombre: 'Daniela',
            edad: 22
        };
        expect(datos1).toEqual(datos2);
    })
})