DROP DATABASE IF EXISTS store_stock_aps;
CREATE DATABASE store_stock_aps;
USE store_stock_aps;

CREATE TABLE tbStore
(store_id INT,
store_name VARCHAR(100) NOT NULL,
store_owner VARCHAR(100) NOT NULL,
email VARCHAR(100) NOT NULL,
password VARCHAR(30) NOT NULL
);

CREATE TABLE tbSection
(section_id INT,
section_name VARCHAR(100) NOT NULL,
CONSTRAINT pk_tbSection PRIMARY KEY (section_id)
);

CREATE TABLE tbEmployee
(employee_id INT AUTO_INCREMENT,
employee_name VARCHAR(100) NOT NULL,
email VARCHAR(100) NOT NULL,
token_login VARCHAR(100),

PRIMARY KEY (employee_id),
FOREIGN KEY (employee_id)
REFERENCES tbSection (employee_id)

);

