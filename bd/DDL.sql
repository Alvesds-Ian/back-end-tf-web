CREATE TABLE membro ( 
id serial PRIMARY KEY,
email VARCHAR ( 255 ) UNIQUE NOT NULL, 
nome VARCHAR ( 50 ) NOT NULL, 
senha VARCHAR ( 50 ) NOT NULL, 
cargo VARCHAR ( 50 ) NOT NULL, 
funcao VARCHAR ( 50 ) NOT NULL,
imagem VARCHAR (100) NOT NULL
);

CREATE TABLE documento ( 
id serial PRIMARY KEY, 
titulo VARCHAR ( 50 ) UNIQUE NOT NULL, 
endereco VARCHAR ( 1000 ) NOT NULL, 
descricao VARCHAR (1000) NOT NULL, 
data_doc date NOT NULL 
); 

