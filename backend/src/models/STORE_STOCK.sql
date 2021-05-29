DROP DATABASE IF EXISTS store_stock_aps;
CREATE DATABASE store_stock_aps;
USE store_stock_aps;

CREATE TABLE tbStore
(store_id INT,
store_name VARCHAR(100) NOT NULL,
store_owner VARCHAR(100) NOT NULL,
email VARCHAR(100) NOT NULL,
password VARCHAR(100) NOT NULL,
PRIMARY KEY (store_id)
);

CREATE TABLE tbSection
(section_id INT AUTO_INCREMENT,
section_name VARCHAR(100) NOT NULL,

store_id INT,
PRIMARY KEY (section_id),

CONSTRAINT fk_tbStore_tbSection FOREIGN KEY (store_id)
REFERENCES tbStore (store_id)
);

CREATE TABLE tbEmployee
(employee_id INT AUTO_INCREMENT,
employee_name VARCHAR(100) NOT NULL,
email VARCHAR(100) NOT NULL,
token_login VARCHAR(100),

section_id INT,
store_id INT,
PRIMARY KEY (employee_id),

CONSTRAINT fk_tbSection_tbEmployee FOREIGN KEY (section_id)
REFERENCES tbSection (section_id),

CONSTRAINT fk_tbStore_tbEmployee FOREIGN KEY (store_id)
REFERENCES tbStore (store_id)
);

CREATE TABLE tbProduct
(product_id INT AUTO_INCREMENT, 
product_name VARCHAR(100) NOT NULL,

section_id INT,
store_id INT,
PRIMARY KEY (product_id),

CONSTRAINT fk_tbSection_tbProduct FOREIGN KEY (section_id)
REFERENCES tbSection (section_id),

CONSTRAINT fk_tbStore_tbProduct FOREIGN KEY (store_id)
REFERENCES tbStore (store_id)
);

#ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
#flush privileges;

#TESTE MY DATABASE
#INSERT INTO tbStore(store_name, store_owner, email, password) VALUES('Love Bag Store', 'Monalisa Sousa Duarte', 'monalisa_drt@outlook.com', '12345678');
#INSERT INTO tbSection(section_name) VALUES('Produtos de limpeza');
#INSERT INTO tbEmployee(employee_name, email, token_login, section_id) VALUES('Raul Aquino', 'aquinoraul207@gmail.com', 'ASHJG64ASD464ADSAG', 1);
#INSERT INTO tbProduct(product_name, section_id) VALUES('Esponja', 1);

#SELECT email FROM store_stock_aps.tbstore WHERE email = 'monalisa_drt@outlook.com';