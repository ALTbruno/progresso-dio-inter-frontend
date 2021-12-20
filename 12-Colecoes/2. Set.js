// Sets são estruturas que armazenam valores únicos

const mySet = new Set();

//Métodos
mySet.add(1);
mySet.add(5);

mySet.has(1); // true

mySet.has(3); //false

mySet.delete(5);

/*
SET VS ARRAY
- Possui valores únicos;
- Em vez da propriedade length, consulta-se o números de registros pela propriedade size;
- Não possui os métodos map, filter, reduce etc.
*/
