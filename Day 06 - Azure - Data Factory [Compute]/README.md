# **Team 4: Education Data Management Project**

## **Overview**

This project is designed to provide a comprehensive data management solution for an educational institution. The project is divided into two main tasks: **Data Lake** and **Data Warehouse**. Additionally, a comparison between Data Lake and Data Warehouse integration with BI Tools (such as Amazon Quicksight) is included.

## **My Role**

I am part of Team 4, and my primary focus is on the **Data Lake Task**. Comparision of data lake and data warehouse integrations with BI Tools (AWS QuickSight)

[Presentation Link](https://www.canva.com/design/DAGOqd4tBQw/ZBTKYfBIxBl9juR5C7pfJA/edit?utm_content=DAGOqd4tBQw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)


## **1. Data Lake Task**

### **Objective**

Design a Data Lake for an educational institution to store and analyze data from various sources such as student information systems, online learning platforms, and feedback forms.

### **Solution Components**

#### **Folder Structure**

We propose the following folder structure for organizing the data within the Data Lake:

```
/data-lake
├── /landing
│   ├── /student-info
│   │   ├── /year
│   │   │   └── /month
│   │   │       └── student_data_2024_08.csv
│   ├── /course-materials
│   │   ├── /course-code
│   │   │   ├── /year
│   │   │   │   └── /semester
│   │   │   │       └── course_material_ENG101_2024_Spring.pdf
│   ├── /assessments
│   │   ├── /course-code
│   │   │   ├── /year
│   │   │   │   └── /semester
│   │   │   │       └── assessment_data_ENG101_2024_Spring.csv
│   ├── /feedback
│       ├── /year
│       │   └── /month
│       │       └── feedback_data_2024_08.csv

├── /staging
│   ├── /student-info
│   ├── /course-materials
│   ├── /assessments
│   └── /feedback

├── /curated
│   ├── /student-performance
│   ├── /course-outcomes
│   └── /feedback-analysis

├── /production
│   ├── /dashboards
│   └── /reports

└── /experimental
    ├── /machine-learning-models
    └── /data-science-projects
```

This structure helps in organizing data systematically across five key zones:

- **Landing**: Raw data directly from sources.
- **Staging**: Pre-processed and cleaned data.
- **Curated**: Refined and processed data ready for analysis.
- **Production**: Final outputs such as reports and dashboards.
- **Experimental**: Sandbox environment for data experiments.

#### **Data Security and Privacy**

To ensure the security and privacy of student data, the following measures are proposed:

- **Data Encryption**: All sensitive data should be encrypted both at rest and in transit.
- **Access Control**: Implement role-based access control (RBAC) to ensure that only authorized personnel can access sensitive data.
- **Data Masking**: Apply data masking techniques for non-essential data fields to prevent exposure of personal information.
- **Compliance with FERPA**: Regular audits and compliance checks to ensure adherence to FERPA regulations, which govern the privacy of student education records.

#### **Integration and Analytics**

To integrate real-time data from online learning platforms and analyze it for insights, the following methods are suggested:

- **Streaming Data Ingestion**: Use tools like Apache Kafka or AWS Kinesis to ingest real-time data from various educational platforms.
- **Real-Time Analytics**: Implement real-time analytics using technologies like Apache Spark Streaming or Flink to process data as it arrives.
- **Predictive Analytics**: Use machine learning models to analyze data and identify students at risk of falling behind, providing timely interventions.

---

## **2. Data Warehouse Task**

### **Objective**

Develop a Data Warehouse for an educational institution to track and analyze student performance, enrollment trends, and resource usage.

### **Solution Components**

#### **Schema Design**

Design a schema with the following:

- **Fact Tables**:
  - **Grades**: Stores student grades data.
  - **Attendance**: Tracks student attendance records.
  - **Resource Utilization**: Captures data on the use of educational resources.
- **Dimension Tables**:
  - **Students**: Contains student information.
  - **Courses**: Stores course details.
  - **Instructors**: Information about instructors.
  - **Semesters**: Details of academic semesters.

#### **Predictive Analytics**

Use the data to create the following charts in a BI Tool like PowerBI:

- **Student Performance Trends**: Line charts showing trends in grades over time.
- **Enrollment Trends**: Bar charts comparing enrollment numbers across semesters.
- **Resource Usage Analysis**: Heatmaps showing peak usage times for different resources.

#### **ETL Process**

Outline the ETL process as follows:

- **Extraction**: Pull data from various academic systems (e.g., Student Information Systems, LMS).
- **Transformation**: Clean, normalize, and aggregate data to prepare it for analysis.
- **Loading**: Load the transformed data into the Data Warehouse for reporting and analytics.

---

## **3. Comparison**

### **Data Lake vs. Data Warehouse Integration with BI Tools**

- **Data Lake**: Integrating a Data Lake with BI tools like Amazon Quicksight allows for the analysis of large volumes of raw and semi-structured data. The flexibility of a Data Lake supports data scientists in performing exploratory analytics and machine learning tasks.
- **Data Warehouse**: A Data Warehouse, integrated with BI tools, offers structured and aggregated data, making it ideal for generating standardized reports and dashboards for business users.
