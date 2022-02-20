DROP DATABASE IF EXISTS financeiro_db;

CREATE DATABASE financeiro_db;

USE financeiro_db;

CREATE TABLE receitas(
    id INT AUTO_INCREMENT PRIMARY KEY,
    descricao VARCHAR(100) NOT NULL,
    valor INT NOT NULL,
    data DATETIME NOT NULL
) ENGINE = InnoDB;

CREATE TABLE despesas(
    id INT AUTO_INCREMENT PRIMARY KEY,
    descricao VARCHAR(100) NOT NULL,
    valor INT NOT NULL,
    data DATETIME NOT NULL
    
) ENGINE = InnoDB;
