CREATE DATABASE university;
USE university;

CREATE TABLE Specialties (
    ID_specialty INT PRIMARY KEY AUTO_INCREMENT,
    Specialty_name VARCHAR(255)
);

CREATE TABLE Groups (
    ID_group INT PRIMARY KEY AUTO_INCREMENT,
    Group_number INT,
    ID_specialty INT,
    FOREIGN KEY (ID_specialty) REFERENCES Specialties(ID_specialty)
);

CREATE TABLE Users (
    ID_user INT PRIMARY KEY AUTO_INCREMENT,
    Login VARCHAR(50),
    Password VARCHAR(50),
    Role VARCHAR(20)
);

CREATE TABLE Teachers (
    ID_teacher INT PRIMARY KEY AUTO_INCREMENT,
    Surname VARCHAR(50),
    Name VARCHAR(50),
    Patronymic VARCHAR(50),
    ID_user INT,
    FOREIGN KEY (ID_user) REFERENCES Users(ID_user)
);

CREATE TABLE Students (
    ID_student INT PRIMARY KEY AUTO_INCREMENT,
    Surname VARCHAR(50),
    Name VARCHAR(50),
    Patronymic VARCHAR(50)
);

CREATE TABLE Students_in_groups (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    ID_group INT,
    ID_student INT,
    FOREIGN KEY (ID_group) REFERENCES Groups(ID_group),
    FOREIGN KEY (ID_student) REFERENCES Students(ID_student)
);

CREATE TABLE Disciplines (
    ID_discipline INT PRIMARY KEY AUTO_INCREMENT,
    Discipline_name VARCHAR(255)
);

CREATE TABLE Lesson_types (
    ID_lesson_type INT PRIMARY KEY AUTO_INCREMENT,
    Lesson_type_name VARCHAR(50)
);

CREATE TABLE Semesters (
    ID_semester INT PRIMARY KEY AUTO_INCREMENT
);

CREATE TABLE Week_days (
    ID_week_day INT PRIMARY KEY AUTO_INCREMENT,
    Week_day_name VARCHAR(20)
);

CREATE TABLE Lessons (
    ID_lesson INT PRIMARY KEY AUTO_INCREMENT,
    ID_group INT,
    ID_teacher INT,
    ID_discipline INT,
    Lesson_number INT,
    ID_lesson_type INT,
    ID_week_day INT,
    ID_semester INT,
    FOREIGN KEY (ID_group) REFERENCES Groups(ID_group),
    FOREIGN KEY (ID_teacher) REFERENCES Teachers(ID_teacher),
    FOREIGN KEY (ID_discipline) REFERENCES Disciplines(ID_discipline),
    FOREIGN KEY (ID_lesson_type) REFERENCES Lesson_types(ID_lesson_type),
    FOREIGN KEY (ID_week_day) REFERENCES Week_days(ID_week_day),
    FOREIGN KEY (ID_semester) REFERENCES Semesters(ID_semester)
);

CREATE TABLE Lesson_visits (
    ID_visit INT PRIMARY KEY AUTO_INCREMENT,
    ID_lesson INT,
    ID_student INT,
    Visit_status VARCHAR(20),
    FOREIGN KEY (ID_lesson) REFERENCES Lessons(ID_lesson),
    FOREIGN KEY (ID_student) REFERENCES Students(ID_student)
);

CREATE TABLE Conducted_lessons (
    ID_conducted_lesson INT PRIMARY KEY AUTO_INCREMENT,
    ID_lesson INT,
    Lesson_topic VARCHAR(255),
    Lesson_date DATE,
    Lesson_description TEXT,
    FOREIGN KEY (ID_lesson) REFERENCES Lessons(ID_lesson)
);