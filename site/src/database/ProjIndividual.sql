create database ProjIndividual;

use ProjIndividual;

create table usuario (
idUsuario int primary key auto_increment,
username varchar(45),
email varchar(45),
senha varchar(45)
) auto_increment = 10000;

select * from usuario;

select fkUsuario from party join usuario on fkUsuario = idUsuario;

create table classe (
idClasse int primary key auto_increment,
nomeClasse varchar(45),
roles varchar(45)
) auto_increment = 100;

insert into classe values
	(null, 'Warrior', 'Tank'),
    (null, 'Paladin', 'Tank'),
    (null, 'Dark Knight', 'Tank'),
    (null, 'Gunbreaker', 'Tank'),
    (null, 'White Mage', 'Healer'),
    (null, 'Scholar', 'Healer'),
    (null, 'Astrologian', 'Healer'),
    (null, 'Sage', 'Healer'),
    (null, 'Monk', 'DPS'),
    (null, 'Dragoon', 'DPS'),
    (null, 'Ninja', 'DPS'),
    (null, 'Samurai', 'DPS'),
    (null, 'Reaper', 'DPS'),
    (null, 'Bard', 'DPS'),
    (null, 'Machinist', 'DPS'),
    (null, 'Dancer', 'DPS'),
    (null, 'Black Mage', 'DPS'),
    (null, 'Summoner', 'DPS'),
    (null, 'Red Mage', 'DPS');
    
select * from classe;

alter table usuario add column fkClasse int,
	add constraint fkClasse foreign key (fkClasse)
		references classe(idClasse);
        
create table party (
idParty int auto_increment,
fkUsuario int unique,
primary key (idParty, fkUsuario),
firstMember varchar(45),
secondMember varchar(45),
thirdMember varchar(45)
) auto_increment = 1000;

create table musica (
idMusica int primary key auto_increment,
nomeMusica varchar(45),
expansao varchar(45)
);

insert into musica values 
	(null, 'Alexander', 'Heavensward'),
    (null, 'Titan', 'A Realm Reborn'),
    (null, 'Garuda', 'A Realm Reborn'),
    (null, 'Shiva', 'A Realm Reborn'),
    (null, 'Nidhogg', 'Heavensward');
    
select * from musica;

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