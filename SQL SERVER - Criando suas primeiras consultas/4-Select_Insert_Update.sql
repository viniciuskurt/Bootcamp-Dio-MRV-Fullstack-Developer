/*selecionando tabela*/
select * from Clientes;

/*se vc selecionar o nome da tabela e aperta as teclas ALT + F1
aparecerá todas as informações da tabela*/

/*inserindo dados na tabela Cliente, modo1*/
insert into Clientes (codigo, nome, TipoPessoa) values (1, 'Vinicius', 'F');

/*inserindo dados na tabela Cliente, modo2*/
insert Clientes (codigo, nome, TipoPessoa) values (2, 'Luisa', 'F');

/*inserindo dados na tabela Cliente, modo3*/
/*nesse modo ele presume que vc está inserindo os dados na ordem que as colunas estão*/
insert Clientes values (3, 'Tiago', 'F');

/*Selecionado tipo específico de cliente*/
select * from Clientes 
	where TipoPessoa = 'F';

/*Atualizando dados na tabela*/
update Clientes 
	set Codigo = 2
		Nome = 'Luisa'
		where TipoPessoa = 'J';

/*Fazer update sem o where atualiza todos os registros da tabela*/

/*Deletando dados de uma tabela*/
/*Fazer delete sem o Where exclui todos os dados de uma tabela*/
delete from Clientes;

delete from Clientes where Codigo = 3;

