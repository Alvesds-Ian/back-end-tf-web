CREATE TABLE membro ( 
id serial PRIMARY KEY,
email VARCHAR ( 255 ) UNIQUE NOT NULL, 
nome VARCHAR ( 50 ) NOT NULL, 
senha VARCHAR ( 50 ) NOT NULL, 
cargo VARCHAR ( 50 ) NOT NULL, 
funcao VARCHAR ( 50 ) NOT NULL,
imagem VARCHAR (100) NOT NULL
);

INSERT INTO membro (nome, senha, email, cargo, funcao, imagem) VALUES 
('Ian', '111','i@email.com','Tesoureiro','nenhuma', 'a.png'), 
('Santiago', '222','s@email.com','Presidente','lider', 'b.png'), 
('Cristian', '333','c@email.com','Vice Presidente','nenhuma', 'c.png');

CREATE TABLE documento 
( id serial PRIMARY KEY, 
titulo VARCHAR ( 50 ) UNIQUE NOT NULL, 
endereco VARCHAR ( 1000 ) NOT NULL, 
descricao VARCHAR (1000) NOT NULL, 
data_doc date NOT NULL 
); 

INSERT INTO documento (titulo, endereco, descricao, data_doc) VALUES 
('Doc 1', 'aaaaa', 'desc1', '2023-11-27'), 
('Doc 2', 'bbbb', 'desc2', '2023-10-30'), 
('Doc 3', 'cccc', 'desc3', '2023-06-17');