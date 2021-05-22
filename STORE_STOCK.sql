DROP DATABASE IF EXISTS store_stock_aps;
CREATE DATABASE store_stock_aps;
USE store_stock_aps;

CREATE TABLE tbStore
(store_id INT AUTO_INCREMENT,
store_name VARCHAR(100) NOT NULL,
store_owner VARCHAR(100) NOT NULL,
email VARCHAR(100) NOT NULL,
password VARCHAR(30) NOT NULL,
PRIMARY KEY (store_id)
);

CREATE TABLE tbSection
(section_id INT AUTO_INCREMENT,
section_name VARCHAR(100) NOT NULL,
CONSTRAINT pk_tbSection PRIMARY KEY (section_id)
);

CREATE TABLE tbEmployee
(employee_id INT AUTO_INCREMENT,
employee_name VARCHAR(100) NOT NULL,
email VARCHAR(100) NOT NULL,
token_login VARCHAR(100),

section_id INT,
PRIMARY KEY (employee_id),
CONSTRAINT fk_tbSection_tbEmployee FOREIGN KEY (section_id)
REFERENCES tbSection (section_id) ON DELETE CASCADE
ON UPDATE CASCADE
);

CREATE TABLE tbProduct
(product_id INT AUTO_INCREMENT, 
product_name VARCHAR(100) NOT NULL,

section_id INT,
PRIMARY KEY (product_id),
CONSTRAINT fk_tbSection_tbProduct FOREIGN KEY (section_id)
REFERENCES tbSection (section_id)
);

#TESTE MY DATABASE
INSERT INTO tbStore(store_name, store_owner, email, password) VALUES('Love Bag Store', 'Monalisa Sousa Duarte', 'monalisa_drt@outlook.com', '12345678');