# Day 2: Azure Data Factory (ADF)

## Overview
Azure Data Factory (ADF) is a cloud-based data integration service that allows you to create data-driven workflows for orchestrating and automating data movement and transformation. ADF is a powerful tool for building ETL (Extract, Transform, Load) processes.

### Key Concepts

#### 1. **Pipelines**
- A pipeline in ADF is a logical grouping of activities that together perform a task. A pipeline allows you to manage, schedule, and monitor the execution of various tasks. 
- Pipelines can have different types of activities, such as data movement, data transformation, and control flow activities.

#### 2. **Copy Activity**
- Copy Activity is the core activity in ADF used to copy data from a source to a destination. 
- It supports various source and destination data stores, including Azure Blob Storage, SQL Database, Data Lake, and more.
- The Copy Activity can handle data in different formats, and you can use it to move data between on-premises and cloud-based systems.

#### 3. **Expression Builder**
- Expression Builder is a feature in ADF that allows you to create expressions to transform data, build dynamic content, and set properties dynamically.
- It supports functions like string manipulation, date-time functions, mathematical operations, and logical functions.
- Expression Builder is often used in activities like Copy Data, where you might need to create dynamic filenames, folder paths, or filter data.

#### 4. **Variables vs Parameters**
- **Variables**:
  - Used to store and manage values within a pipeline.
  - Their scope is limited to the pipeline where they are defined.
  - They can change during the execution of the pipeline.
- **Parameters**:
  - Used to pass values into a pipeline at runtime.
  - Their scope is broader as they can be set at the pipeline level and used across different activities.
  - Parameters are immutable during pipeline execution.

#### 5. **Bulk Insert**
- Bulk Insert is a method to efficiently load large volumes of data into a database.
- In ADF, Bulk Insert can be achieved by using the Copy Activity with high-performance settings, allowing you to load data in parallel and with minimal overhead.
- Bulk Insert is particularly useful when dealing with large datasets that need to be ingested into a database quickly.

### Practical Applications

- **Creating Pipelines**: Design pipelines to orchestrate data flow between various services and to perform complex data transformations.
- **Using Copy Activity**: Move large datasets from on-premises to cloud, or between different cloud services, with minimal effort.
- **Expression Builder**: Dynamically generate file names, paths, or even conditional logic within your data workflows.
- **Setting Variables and Parameters**: Use variables to manage state within a pipeline, and parameters to make your pipelines flexible and reusable across different scenarios.
- **Executing Bulk Inserts**: Handle large-scale data ingestion into databases or data warehouses efficiently, ensuring that data is loaded with optimal performance.

### Hands-On Practice
- **Building a Simple Pipeline**: Create a pipeline that copies data from an Azure Blob Storage to an Azure SQL Database.
- **Dynamic Data Copy**: Use Expression Builder to create a dynamic folder structure for storing copied data.
- **Using Parameters**: Design a pipeline where the source and destination are parameterized to allow reuse of the pipeline across different environments.
