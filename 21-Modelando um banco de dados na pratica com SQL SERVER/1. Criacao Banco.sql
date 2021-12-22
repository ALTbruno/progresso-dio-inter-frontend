CREATE DATABASE EstrelaDaMorte;

USE EstrelaDaMorte;

-- PLANETAS
CREATE TABLE Planetas(
	IdPlaneta int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	Nome varchar(50) NOT NULL,
	Rotacao float NOT NULL,
	Orbita float NOT NULL,
	Diametro float NOT NULL,
	Clima varchar(50) NOT NULL,
	Populacao int NOT NULL
);

-- NAVES
CREATE TABLE Naves(
	IdNave int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	Nome varchar(100) NOT NULL,
	Modelo varchar(150) NOT NULL,
	Passageiros int NOT NULL,
	Carga float NOT NULL,
	Classe varchar(100) NOT NULL
);

-- PILOTOS
CREATE TABLE Pilotos(
	IdPiloto int NOT NULL  AUTO_INCREMENT PRIMARY KEY,
	Nome varchar(200) NOT NULL,
	AnoNascimento varchar(10) NOT NULL,
	IdPlaneta int NOT NULL,
    FOREIGN KEY(IdPlaneta) REFERENCES Planetas(IdPlaneta)
);

-- PILOTOS NAVES
CREATE TABLE PilotosNaves(
	IdPiloto int NOT NULL,
    FOREIGN KEY(IdPiloto) REFERENCES Pilotos(IdPiloto),
	IdNave int NOT NULL,
    FOREIGN KEY(IdNave) REFERENCES Naves(IdNave),
	FlagAutorizado bit NOT NULL
);

-- HISTÓRICO DE VIAGENS
CREATE TABLE HistoricoViagens(
	IdNave int NOT NULL,
    FOREIGN KEY(IdNave) REFERENCES Naves(IdNave),
	IdPiloto int NOT NULL,
    FOREIGN KEY(IdPiloto) REFERENCES Pilotos(IdPiloto),
	DtSaida datetime NOT NULL,
	DtChegada datetime NULL
)
