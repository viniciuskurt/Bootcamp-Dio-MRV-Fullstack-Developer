/*inserindo dados na tabela*/

insert Produtos values (1, 'Caneta', 'Caneta Azul', 1.5);

insert Produtos values (2, 'Caderno', 'Caderno Raul', 20);



select * from Pedidos;

insert Pedidos values(1, getdate(), 0, 3, 3); /*getdate() é uma função que retorna hora atual*/