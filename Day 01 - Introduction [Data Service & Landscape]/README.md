# Day 1: SQL Queries - Procedures, Triggers, and SQL Agent

## Overview
On Day 1, we focused on SQL queries, specifically the use of stored procedures and triggers to synchronize two tables (`table_src` and `table_target`). The goal was to ensure that:

1. **Insertions**: When a new row is inserted into `table_src`, it is automatically inserted into `table_target`.
2. **Updates**: When a row in `table_src` is updated, a new row is created in `table_target` with the updated information.
3. **Deletions**: When a row in `table_src` is hard deleted, a soft delete is performed in `table_target`.

## Key Concepts

### Stored Procedures
- **InsertIntoTarget**: Inserts a row into `table_target`.
- **UpdateInTarget**: Inserts a new row into `table_target` when a row in `table_src` is updated.
- **SoftDeleteInTarget**: Marks a row as deleted in `table_target` when a row in `table_src` is deleted.

### Triggers
- **trg_InsertOnSource**: Triggered after an insert in `table_src` to call `InsertIntoTarget`.
- **trg_UpdateOnSource**: Triggered after an update in `table_src` to call `UpdateInTarget`.
- **trg_DeleteOnSource**: Triggered after a delete in `table_src` to call `SoftDeleteInTarget`.

### SQL Agent
- To achieve the same results without using triggers, we would employ SQL Agent Jobs to monitor changes in `table_src` and execute the necessary procedures.

## Example Queries

### Create Procedures and Triggers

```sql
-- Insert Procedure
CREATE PROCEDURE InsertIntoTarget
    @id INT,
    @name VARCHAR(100),
    @email VARCHAR(100),
    @created_at DATETIME
AS
BEGIN
    INSERT INTO table_target (id, name, email, created_at)
    VALUES (@id, @name, @email, @created_at);
END;

-- Insert Trigger
CREATE TRIGGER trg_InsertOnSource
ON table_src
AFTER INSERT
AS
BEGIN
    DECLARE @id INT, @name VARCHAR(100), @email VARCHAR(100), @created_at DATETIME;
    
    SELECT @id = inserted.id, 
           @name = inserted.name, 
           @email = inserted.email, 
           @created_at = inserted.created_at
    FROM inserted;

    EXEC InsertIntoTarget @id, @name, @email, @created_at;
END;

-- Update Procedure
CREATE PROCEDURE UpdateInTarget
    @id INT,
    @name VARCHAR(100),
    @email VARCHAR(100),
    @created_at DATETIME
AS
BEGIN
    INSERT INTO table_target (id, name, email, created_at)
    VALUES (@id, @name, @email, @created_at);
END;

-- Update Trigger
CREATE TRIGGER trg_UpdateOnSource
ON table_src
AFTER UPDATE
AS
BEGIN
    DECLARE @id INT, @name VARCHAR(100), @email VARCHAR(100), @created_at DATETIME;
    
    SELECT @id = inserted.id, 
           @name = inserted.name, 
           @email = inserted.email, 
           @created_at = inserted.created_at
    FROM inserted;

    EXEC UpdateInTarget @id, @name, @email, @created_at;
END;

-- Soft Delete Procedure
CREATE PROCEDURE SoftDeleteInTarget
    @id INT
AS
BEGIN
    UPDATE table_target
    SET is_deleted = 1
    WHERE id = @id;
END;

-- Delete Trigger
CREATE TRIGGER trg_DeleteOnSource
ON table_src
AFTER DELETE
AS
BEGIN
    DECLARE @id INT;
    
    SELECT @id = deleted.id 
    FROM deleted;

    EXEC SoftDeleteInTarget @id;
END;
```

### Testing Data

#### Insert Sample Data

```sql
INSERT INTO table_src (name, email, created_at) 
VALUES 
('John Doe', 'john.doe@example.com', GETDATE()),
('Jane Smith', 'jane.smith@example.com', GETDATE()),
('Alice Johnson', 'alice.johnson@example.com', GETDATE());
```

#### Update Sample Data

```sql
UPDATE table_src
SET name = 'Johnathan Doe'
WHERE id = 1;
```

#### Delete Sample Data

```sql
DELETE FROM table_src
WHERE id = 2;
```

#### Verify the Results

```sql
SELECT * FROM table_target;
```

This query will show how inserts, updates, and deletes in `table_src` affected `table_target`.
