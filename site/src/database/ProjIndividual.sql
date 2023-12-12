create database ProjIndividual;

use ProjIndividual;

create table usuario (
idUsuario int primary key auto_increment,
username varchar(45),
email varchar(45),
senha varchar(45)
) auto_increment = 10000;

insert into usuario (username, email, senha) values
	('Auriel', 'aurielaarin@outlook.com', 'Aarin@2112'),
    ('Talos', 'talosxang@outlook.com', 'Talos@0410'),
    ('Chinua', 'chinua@hotmail.com', 'Asche@2401'),
    ('Shaba', 'shabadadu@gmail.com', 'Shaba@1234'),
    ('Avri', 'avrikha@hotmail.com', 'Avri@2112'),
    ('Shi', 'shirerus@outlook.com', 'Shi@0410'),
    ('Freya', 'freyawhite@gmail.com', 'Freya@2401'),
    ('Akane', 'akanelub@outlook.com', 'Akane@0410'),
    ('Erdeni', 'erdenando@outlook.com', 'Erdeni@2112'),
    ('Illya', 'illyablud@outlook.com', 'Illya@2401');

select * from usuario;

select count(fkClasse) as qtdClasse from usuario where fkClasse = 100;

select count(fkClasse) as qtdTotal from usuario;

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

select * from party;

create table musica (
idMusica int primary key auto_increment,
nomeMusica varchar(45),
expansao varchar(45)
);

insert into musica values 
	(null, 'Alexander', 'Heavensward'),
    (null, 'Titan', 'A Realm Reborn'),
    (null, 'Garuda', 'A Realm Reborn'),
    (null, 'Ultima', 'A Realm Reborn'),
    (null, 'Shiva', 'A Realm Reborn'),
    (null, 'Nidhogg', 'Heavensward');
    
select * from musica;

create table usuario_musica_contador (
fkUsuario int,
fkMusica int,
primary key (fkUsuario, fkMusica),
vezesEscutada int,
constraint fkUsuarioMusic foreign key (fkUsuario)
	references usuario(idUsuario),
constraint fkMusica foreign key (fkMusica)
	references musica(idMusica)
);

select * from usuario_musica_contador;

select vezesEscutada from usuario_musica_contador where fkMusica in (1,2,3,4,5,6) and fkUsuario = 10000;