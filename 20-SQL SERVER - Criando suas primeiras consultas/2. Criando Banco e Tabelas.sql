CREATE DATABASE ecommerce;

USE ecommerce;

CREATE TABLE Produtos
(
	Codigo INT AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(100),
    Descricao VARCHAR(200),
    Preco FLOAT
);

CREATE TABLE Clientes
(
	Codigo INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(200) NOT NULL,
    TipoPessoa CHAR(1) NOT NULL
);

CREATE TABLE StatusPedido
(
	Codigo INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Descricao VARCHAR(15)
);

CREATE TABLE Pedidos
(
	Codigo INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    DataSolicitacao DATETIME NOT NULL,
    FlagPago BIT NOT NULL,
    TotalPedido FLOAT NOT NULL,
    CodigoCliente INT NOT NULL,
    CodigoStatus INT NOT NULL,
    FOREIGN KEY (CodigoStatus) REFERENCES StatusPedido(Codigo)
);

CREATE TABLE PedidoItem
(
	CodigoPedido INT NOT NULL,
    FOREIGN KEY (CodigoPedido) REFERENCES Pedidos(Codigo),
    CodigoProduto INT NOT NULL,
    FOREIGN KEY (CodigoProduto) REFERENCES Produtos(Codigo),
    Preco FLOAT NOT NULL,
    Quantidade INT NOT NULL
);

