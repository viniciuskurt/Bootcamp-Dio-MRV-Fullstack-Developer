/*selecionar tabela PedidosItem*/
select * from PedidosItem

/*inserir dados na tabela PedidosItem*/
insert PedidosItem values (1, 1, 1.5, 2);

/*inserir dados na tabela Pedidos*/

insert Pedidos values(3, GETDATE(), 0, 22.49, 1);

/*selecionar tabela Pedidos*/
select * from Pedidos;

/*inserir dados na tabela PedidosItem*/
insert PedidosItem values (2, 1, 25.99, 3);

/*Selecionando dados com retorno especificado CASE*/
select *, 
		case	
			when TipoPessoa = 'J' then 'Juridica'
			when TipoPessoa = 'F' then 'Fisica'
			else 'Pessoa Indefinida'
			end
		from Clientes;

/*Convertendo tipo de dados na tabela*/
select *, convert(varchar, DataSolicitacao)
from Pedidos;

