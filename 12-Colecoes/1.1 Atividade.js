/*
Crie uma função que retorna o nome dos membros de um Map que tem o papel 'ADMIN' no sistema.
- Crie uma função getAdmins que recebe um Map;
- Crie um Map e popule-o com nomes de usuários e seus papéis nos sistema (Ex.: 'Luiz' => 'Admin');
- Dentro de getAdmins, utilize o loop for...of para retornar uma lista com os nomes dos usuários que são administradores;
*/

const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Stephany', 'Admin');
usuarios.set('Jorge', 'User');
usuarios.set('Natália', 'Admin');

function getAdmins(map) {

    let admins = [];

    for([key, value] of map) {
        if(value === 'Admin'){
            admins.push(key);
        }
    }

    return admins;
};

getAdmins(usuarios); // [ 'Luiz', 'Stephany', 'Natália' ]