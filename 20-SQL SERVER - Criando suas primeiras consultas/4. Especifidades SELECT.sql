USE ecommerce;

ALTER TABLE Clientes
ADD COLUMN DataCriacao DATE AFTER TipoPessoa;

INSERT clientes (Codigo, Nome, TipoPessoa) VALUES (8, 'Hugo', 'J');

SELECT * FROM clientes;

SELECT isnull(DataCriacao)
FROM clientes;

SELECT isnull(DataCriacao, getdate()), *
FROM clientes;

SELECT *,
		CASE
			WHEN TipoPessoa = 'J' THEN 'Jurídica'
            WHEN TipoPessoa = 'F' THEN 'Física'
            ELSE 'Pessoa Indefinida'
		END
FROM clientes;


SELECT *, CONVERT(VARCHAR, DataSolicitacao, 103)
FROM Pedidos;