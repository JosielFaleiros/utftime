create database if not exists  utftime;
SET FOREIGN_KEY_CHECKS=0;
drop table if exists utftime.curso;
create table if not exists utftime.curso(
id_curso	int primary key auto_increment,
nome_curso	varchar(100) not null
);
drop table if exists utftime.usuario;
create table if not exists utftime.usuario (
nome 		varchar(155) not null,
email		varchar(45) primary key,
senha		int(11) not null,
curso		int not null,
foreign key (curso) references curso(id_curso)
)engine=InnoDB;

drop table if exists utftime.documento;
create table if not exists utftime.documento (

id_documento  	int primary key auto_increment,
email			varchar(100) not null,
dono 			varchar(45) not null,
pontuacao		int not null  default 0,
estado			varchar(45) not null,
grupo			varchar(45) not null,
foreign key (email) references usuario(email),
check (estado in ( 'aprovado', 'devolvido', 'em análise'))
)engine=InnoDB;
SET FOREIGN_KEY_CHECKS=1;
