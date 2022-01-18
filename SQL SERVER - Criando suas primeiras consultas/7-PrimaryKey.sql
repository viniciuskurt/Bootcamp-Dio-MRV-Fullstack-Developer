/*Chave Primaria, indexa os registros */

/*alterando a tabela e adicionando chave primaria*/
alter table Clientes add constraint pk_Cliente primary key (Codigo);

select * from Clientes;

