drop database if exists prodCantina;
create database prodCantina;
use prodCantina;

create table produtos(
    id integer primary key auto_increment,
    nome varchar(40) unique not null,
    preco decimal(3,2) not null,
    quantidade int not null
);

describe produtos;

insert into produtos(nome, preco, quantidade) VALUES
("Pão de Queijo", "5.00", "10"),
("Coxinha de Frango", "7.50", "12"),
("Hamburguer de Carne", "7.50", "20"),
("Hamburger de Cheddar", "7.50", "20"),
("Refrigerante lata Fanta Uva", "5.50", "10"),
("Refrigerante lata Fanta Laranja", "5.50", "10"),
("Refrigerante lata Sprite", "5.50", "10"),
("Refrigerante lata CocaCola", "5.50", "10"),
("Refrigerante lata CocaCola Zero", "5.50", "10");

select * from produtos;