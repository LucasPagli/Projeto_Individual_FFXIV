create database ProjIndividual;

use ProjIndividual;

create table usuario (
idUsuario int primary key auto_increment,
username varchar(45),
email varchar(45),
senha varchar(45)
);

select * from usuario;

create table classe (
idClasse int primary key auto_increment,
nomeClasse varchar(45),
roles varchar(45)
);

alter table usuario add column fkClasse int,
	add constraint fkClasse foreign key (fkClasse)
		references classe(idClasse);
        
create table party (
idParty int,
fkUsuario int unique,
primary key (idParty, fkUsuario),
firstMember varchar(45),
secondMember varchar(45),
thirdMember varchar(45)
);

create table musica (
idMusica int primary key auto_increment,
nomeMusica varchar(45),
expansao varchar(45)
);

create table usuario_musica_contador (
idUserMusic int,
fkUsuario int,
fkMusica int,
primary key (idUserMusic, fkUsuario, fkMusica),
vezesEscutada int,
constraint fkUsuarioMusic foreign key (fkUsuario)
	references usuario(idUsuario),
constraint fkMusica foreign key (fkMusica)
	references musica(idMusica)
);