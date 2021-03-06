/* Creating a table
 
 We can create a table by using the clause 'CREATE TABLE', pretty straight forward syntax to
 remember. 
 
 The syntax for this would be:
 
 CREATE TABLE table_name (
 column_1 data_type,
 column_2 data_type,
 column_3 data_type
 )
 
 In the example below we are going to create an example table using SQL.
 */

CREATE TABLE person (name TEXT, age INTEGER,);



/* Inserting data into a table
 
 We can now use the 'INSERT' clause to insert a new row into a table.
 
 The syntax for this would be:
 
 INSERT INTO table_name (column_1, column_2, column_3)
 VALUES (column_1_data, column_2_data, column_3_data);
 
 In the example below we will insert two rows.
 */

INSERT INTO person (name, age)
VALUES ('Tom', 18);

INSERT INTO person (name, age)
VALUES ('Kevin', 22);



/* Selecting data from a database
 
 We can now use 'SELECT' statements to fetch data from a database. Select statements
 always return a new table called the 'result set'.
 
 The syntax for this would be:
 
 SELECT column_name FROM table_name; -- Selects all data from a specific column of a database
 SELECT * FROM table_name; -- Selects all data from the database
 
 In the example below we will select the name and then all the data.
 */

SELECT name FROM person; -- Selecting just the names.

SELECT * FROM person; -- Selecting all the data



/* Adding new columns to tables
 
 If we wanted to add a new column to a table we can use the 'ALTER TABLE' clause.
 
 The syntax for this would be:
 
 ALTER TABLE table_name
 ADD COLUMN column_name data_type;
 
 In the example below we are going to add two more columns, nickname and birth year.
 */

ALTER TABLE person
ADD COLUMN nickname TEXT;

ALTER TABLE person
ADD COLUMN birth_year INTEGER;



/* Updating data in a table
 
 If we wanted to update the data in a row we can use the 'UPDATE' clause.
 
 The syntax for this would be:
 
 UPDATE table_name
 SET column_name = data
 WHERE column_name = 'Something';
 
 In the example below we are going update both the 'nickname' and the 'birth_year' for
 'Tom' but we will only update the 'nickname' for 'Kevin'
 */

UPDATE person
SET nickname = 'Exxon'
WHERE name = 'Tom';

UPDATE person
SET birth_year = 1923
WHERE name = 'Tom';



/* Deleting data from a table
 
 If we wanted to delete data from a table we can use the 'DELETE' clause.
 
 The syntax for this would be:
 
 DELETE FROM table_name
 WHERE column_name IS NULL;
 
 or
 
 DELETE FROM table_name
 WHERE column_name = 'Something';
 
 In the example below we will delete both if birth-year is null.
 */

DELETE FROM person
WHERE birth_year IS NULL;