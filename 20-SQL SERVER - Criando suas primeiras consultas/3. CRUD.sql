/*
CRUD (Create, Read, Update, Delete) é um acrônimo para as maneiras de se operar em informação armazenada.
É um mnemônico para as quatro operações básicas de armazenamento persistente.
CRUD tipicamente refere-se a operações perfomadas em um banco de dados ou base de dados,
mas também pode aplicar-se para funções de alto nível de uma aplicação, como exclusões reversíveis,
onde a informação não é realmente deletada, mas é marcada como deletada via status.

CREATE	--> INSERT
READ	--> SELECT
UPDATE	--> UPDATE
DELETE	--> DELETE

*/

USE ecommerce;

INSERT INTO clientes (codigo, nome, tipopessoa) VALUES (1, 'Thiago', 'F');
INSERT clientes (codigo, nome, tipopessoa) VALUES (2, 'Lia', 'F');
INSERT clientes (tipopessoa, codigo, nome) VALUES ('F', 3, 'Lua');
INSERT clientes VALUES (4, 'Felipe', 'F');
INSERT clientes VALUES (5, 'Luiz', 'F'), (1, 'Mel', 'J');

SELECT * FROM clientes;

SELECT nome FROM clientes;

SELECT nome, tipopessoa FROM clientes;

SELECT * FROM clientes WHERE tipopessoa = 'J';

SET SQL_SAFE_UPDATES = 0; -- desativa o modo de atualização segura (Modo de atualização segura requer que o WHERE seja a PK, o que não é o caso aqui)
UPDATE clientes SET codigo = 6 WHERE nome = 'Mel';
SET SQL_SAFE_UPDATES = 1; -- ativa o modo de atualização segura

SET SQL_SAFE_UPDATES = 0;
DELETE FROM clientes WHERE codigo = 5;
DELETE FROM clientes WHERE codigo in(4, 3);
SET SQL_SAFE_UPDATES = 1;

SELECT * FROM clientes WHERE codigo = 1 AND tipopessoa = 'J';

SELECT * FROM clientes WHERE codigo = 1 OR tipopessoa = 'J';



INSERT produtos VALUES (1, 'Caneta', 'Caneta azul', 1.5), (2, 'Caderno', 'Caderno 200 folhas', 20.99);

SELECT * FROM produtos;


-- INSERT pedidos VALUES (1, getdate(), 0, 3, 7);
INSERT pedidos VALUES (1, curdate(), 0, 3, 7);
INSERT pedidos VALUES (1, current_date(), 0, 3, 7);
INSERT pedidos VALUES (1, now(), 0, 3, 7);

SELECT * FROM pedidos;

-- GET_ FORMAT([date | time | datetime ],[‘EUR’ |‘USA’ |’JIS’|’ISO’|‘INTERNAL’])


INSERT pedidoitem VALUES (1, 1, 2.3, 3);

SELECT * FROM pedidoitem;

INSERT produtos(nome, descricao,preco) VALUES ('Caneta', 'Caneta azul', 1.5), ('Caderno', 'Caderno 200 folhas', 20.99);
INSERT clientes (nome, tipopessoa) VALUES ('Lua', 'F'), ('Jonas', 'F'), ('Lia', 'F'), ('Thiago', 'F'), ('Luiz', 'F'), ('Felipe', 'F'), ('Ana', 'J');
INSERT StatusPedido(Descricao) VALUES ('Em Andamento'), ('Processado'), ('Pago'), ('Entregue');