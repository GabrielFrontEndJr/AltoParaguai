CREATE TABLE terrasind (
    loc varchar(250) not null,
    nome varchar(50) not null,
    pop int,
    etinia varchar(250),
    minfo varchar(250)
);

CREATE TABLE usinas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    loc_lat FLOAT NOT NULL,
    loc_long FLOAT NOT NULL,
    tipo VARCHAR(20) NOT NULL,
    title VARCHAR(50) NOT NULL,
    rio VARCHAR(20) NOT NULL,
    img VARCHAR(50) NOT NULL
);

INSERT INTO usinas (loc_lat, loc_long, tipo, title, rio, img) VALUES 
(-15.38228, -58.08322, 'Usina', 'Cabaçal 1: PCH', 'cabacal', 'images/Mark/usin.png'),
(-15.27931, -58.27703, 'Usina', 'Cabaçal 2: PCH', 'cabacal', 'images/Mark/usin.png'),
(-15.121, -58.43728, 'Usina', 'Cabaçal 3: PCH', 'cabacal', 'images/Mark/usin.png'),
(-15.10908, -58.46278, 'Usina', 'Cabaçal 4: PCH', 'cabacal', 'images/Mark/usin.png'),
(-15.11089, -58.475, 'Usina', 'Cabaçal 5: PCH', 'cabacal', 'images/Mark/usin.png'),
(-15.10339, -58.48783, 'Usina', 'Cabaçal 6: PCH', 'cabacal', 'images/Mark/usin.png'),
(-14.94944, -58.05722, 'Usina', 'Caramujo: PCH', 'caramujo', 'images/Mark/usin.png'),
(-14.80404, -56.37655, 'Usina', 'Perudá Montante: PCH', 'cuiaba', 'images/Mark/usin.png'),
(-15.2732, -56.28454, 'Usina', 'Iratambé II: PCH', 'cuiaba', 'images/Mark/usin.png'),
(-15.34112, -56.27704, 'Usina', 'Iratambé I: PCH', 'cuiaba', 'images/Mark/usin.png'),
(-15.54608, -56.1709, 'Usina', 'Guapira II: PCH', 'cuiaba', 'images/Mark/usin.png'),
(-14.95457, -56.44505, 'Usina', 'Angatu II Montante: PCH', 'cuiaba', 'images/Mark/usin.png'),
(-15.15478, -56.44721, 'Usina', 'Angatu I: PCH', 'cuiaba', 'images/Mark/usin.png'),
(-15.34817, -56.995, 'Usina', 'Araras: PCH', 'jauquara', 'images/Mark/usin.png'),
(-14.89599, -58.65021, 'Usina', 'Trairão 3: PCH', 'jauru', 'images/Mark/usin.png'),
(-14.65784, -58.49849, 'Usina', 'Areia Branca 3: AHE', 'jauru', 'images/Mark/usin.png'),
(-14.80398, -58.58796, 'Usina', 'Alagados 3: AHE', 'jauru', 'images/Mark/usin.png'),
(-14.83869, -58.62181, 'Usina', 'Estivadinho 3: PCH', 'jauru', 'images/Mark/usin.png'),
(-16.43944, -55.30278, 'Usina', 'Mutum I: PCH', 'mutum', 'images/Mark/usin.png'),
(-16.45, -55.32, 'Usina', 'Mantovilis: PCH', 'mutum', 'images/Mark/usin.png'),
(-14.67944, -57.75694, 'Usina', 'Paiguás: PCH', 'sepotuba', 'images/Mark/usin.png'),
(-14.68917, -57.80222, 'Usina', 'Salto Maciel: PCH', 'sepotuba', 'images/Mark/usin.png'),
(-15.00778, -58.07472, 'Usina', 'Salto do Céu: PCH', 'rioVermelho', 'images/Mark/usin.png'),
(-15.05528, -57.98917, 'Usina', 'Salto Caramujo : PCH', 'rioVermelho', 'images/Mark/usin.png'),
(-15.02417, -58.05444, 'Usina', 'Salto Vermelho I: PCH', 'rioVermelho', 'images/Mark/usin.png'),
(-15.02417, -58.05444, 'Usina', 'Salto Vermelho I: PCH', 'rioVermelho', 'images/Mark/usin.png');

