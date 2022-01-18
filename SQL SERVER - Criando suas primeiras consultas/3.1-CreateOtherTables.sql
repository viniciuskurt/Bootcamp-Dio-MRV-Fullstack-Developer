/*cria tabela Pedidos*/
create table Pedidos(
	Codigo int not null,
	DataSolicitacao datetime not null,
	FlagPago bit not null,
	TotalPedido float not null,
	CodigoCliente int not null
);

/*cria tabela PedidosItem*/
create table PedidosItem(
	CodigoPedido int not null,
	CodigoProduto int not null,
	Preco float not null,
	Quantidade int not null
);