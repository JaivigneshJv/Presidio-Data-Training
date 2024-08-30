# Day 4: PySpark and Hadoop

## Overview

### PySpark
PySpark is the Python API for Apache Spark, an open-source distributed computing system that provides an interface for programming entire clusters with implicit data parallelism and fault tolerance. PySpark allows you to write Spark applications using Python and perform large-scale data processing, making it a powerful tool for big data analytics.

### Hadoop
Hadoop is an open-source framework that allows for the distributed processing of large datasets across clusters of computers using simple programming models. It is designed to scale up from a single server to thousands of machines, each offering local computation and storage. Hadoop is the foundation of many big data processing workflows and is known for its reliability and scalability.

## Key Concepts

### Apache Spark
- **Resilient Distributed Dataset (RDD):** The fundamental data structure of Spark, representing an immutable, distributed collection of objects that can be processed in parallel.
- **DataFrame:** A distributed collection of data organized into named columns, similar to a table in a relational database.
- **SparkSession:** The entry point to programming Spark with the DataFrame and SQL API.

### Hadoop Distributed File System (HDFS)
- **HDFS:** The primary storage system used by Hadoop applications, providing high-throughput access to data and fault tolerance by replicating data across multiple nodes.

## PySpark Code Explanation

The provided PySpark script performs data analysis on a COVID-19 dataset using Spark DataFrames. Here’s a breakdown of the steps:

### 1. Setting Up SparkSession
```python
from pyspark.sql import SparkSession
spark = SparkSession.builder.appName("COVID Data Analysis").getOrCreate()
```
- **SparkSession:** This is the entry point for reading data, creating DataFrames, and executing SQL queries. It's similar to a connection object in databases.

### 2. Loading Data
```python
df = spark.read.csv("complete.csv", header=True, inferSchema=True)
```
- **DataFrame (`df`):** The CSV file is loaded into a DataFrame, which is similar to a table in a relational database. The `header=True` option indicates that the first row contains column names.

### 3. Data Transformation
```python
df = df.withColumn("Name of State / UT", lower(col("Name of State / UT")))
```
- **Data Transformation:** The state names are converted to lowercase to maintain consistency in data processing.

### 4. Analysis Tasks
The script performs several analysis tasks:
- **Finding the Day with the Greatest Number of COVID Cases:** 
  ```python
  max_cases_day = df.groupBy("Date") \
      .agg(sum("New cases").alias("Total Confirmed")) \
      .orderBy(col("Total Confirmed").desc()) \
      .first()
  ```
- **Identifying the State with the Second-Largest Number of COVID Cases:**
  ```python
  state_cases = df.groupBy("Name of State / UT") \
      .agg(sum("New cases").alias("Total Confirmed")) \
      .orderBy(col("Total Confirmed").desc())
  ```
- **Finding the Union Territory with the Least Number of Deaths:**
  ```python
  union_territory_deaths = df.filter(col("Name of State / UT").isin(unique_states)) \
      .groupBy("Name of State / UT") \
      .agg(sum("Death").alias("Total Deaths")) \
      .orderBy(col("Total Deaths").asc()) \
      .first()
  ```
- **Calculating the State with the Lowest Death to Total Confirmed Cases Ratio:**
  ```python
  df_with_ratio = df.withColumn("Death_to_Confirmed_Ratio", col("Death") / col("Total Confirmed cases"))
  ```
- **Determining the Month with the Most New Recovered Cases:**
  ```python
  max_recovered_month = df_with_month.groupBy("Month") \
      .agg(sum("New recovered").alias("Total Recovered")) \
      .orderBy(col("Total Recovered").desc()) \
      .first()
  ```

### 5. Output
The script prints the results of the analysis, such as the date with the most COVID cases, the state with the second-highest cases, and so on.

## Conclusion
This exercise demonstrates how PySpark can be used to perform complex data analysis on large datasets, leveraging the power of distributed computing. The integration of PySpark with Hadoop enables scalable and efficient processing of big data, making it an essential tool for data engineers and analysts.
