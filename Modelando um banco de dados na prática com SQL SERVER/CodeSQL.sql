/*Criando table Planetas*/
CREATE TABLE Planetas(
	idPlaneta int NOT NULL,
	Nome varchar(50) NOT NULL,
	Rotacao float NOT NULL,
	Orbita float NOT NULL,
	Diametro float NOT NULL,
	Clima varchar(50) NOT NULL,
	Populacao int NOT NULL,
	)
	GO
	ALTER TABLE Planetas ADD CONSTRAINT PK_Planetas PRIMARY KEY (IdPlaneta);

/*Criando table Pilotos*/
CREATE TABLE Pilotos(
	idPiloto int NOT NULL,
	Nome varchar(200) NOT NULL,
	AnoNascimento varchar(10) NOT NULL,
	IdPlaneta int NOT NULL,
	)
	GO
	ALTER TABLE Pilotos ADD CONSTRAINT PK_Pilotos PRIMARY KEY (IdPiloto);
	GO
	ALTER TABLE Pilotos ADD CONSTRAINT FK_Pilotos_Planetas FOREIGN KEY (IdPlaneta)
	REFERENCES Planetas (IdPlaneta)

/*Table PilotoNaves*/
CREATE TABLE PilotosNaves(
	idPiloto int NOT NULL,
	IdNave int NOT NULL,
	FlagAutorizado bit NOT NULL,
	)
	GO
	ALTER TABLE PilotosNaves ADD CONSTRAINT PK_PilotosNaves PRIMARY KEY (IdPiloto, IdNave);
	GO
	ALTER TABLE PilotosNaves ADD CONSTRAINT FK_PilotosNaves_Pilotos FOREIGN KEY (IdPiloto)
	REFERENCES Pilotos (idPiloto)
	GO
	ALTER TABLE PilotosNaves ADD CONSTRAINT FK_PilotosNaves_Naves FOREIGN KEY (IdNave)
	REFERENCES Naves (idNave)
	GO
	ALTER TABLE PilotosNaves ADD CONSTRAINT DF_PilotosNAves_FlagAutorizado DEFAULT (1) FOR FlagAutorizado

/*Table Histórico de Viagens*/
CREATE TABLE HistoricoViagens(
	IdNave int NOT NULL,
	IdPiloto int NOT NULL,
	DtSaida datetime NOT NULL,
	DtChegada datetime Null,
)
GO
	ALTER TABLE HistoricoViagens ADD CONSTRAINT FK_HistoricoViagens_PilotosNaves FOREIGN KEY (IdPiloto, idNave)
	REFERENCES PilotosNaves (IdPiloto, idNave)
	GO
	ALTER TABLE HistoricoViagens CHECK CONSTRAINT FK_HistoricoViagens_PilotosNaves
