INSERT INTO students_table (name,level,date_of_birth) VALUES ('Peter',25,'1995-05-15');
INSERT INTO students_table (name,level,date_of_birth) VALUES ('John',10,'1985-06-16');
INSERT INTO students_table (name,level,date_of_birth) VALUES ('Simon',20,'1987-07-17');

INSERT INTO students_table (name,level,date_of_birth) VALUES ('Peter2',25,'1995-05-15'),('John2',10,'1985-06-16'),('Simon2',20,'1987-07-17');

ALTER TABLE students_table ADD COLUMN date_of_birth2 date;

SELECT * FROM students_table order by name ;

update students_table set level = 100 where name = 'Peter';
