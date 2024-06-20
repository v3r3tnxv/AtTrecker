CREATE DATABASE IF NOT EXISTS attrecker;
USE attrecker;

CREATE TABLE IF NOT EXISTS Users (
    id INT AUTO_INCREMENT NOT NULL,
    login VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    role VARCHAR(20) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS WeekTypes (
    id INT AUTO_INCREMENT NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS WeekDays (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(20) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS LessonTypes (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS Status (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS Specialties (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS Subjects (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS Groups (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(50) NOT NULL,
    specialty INT NOT NULL,
    user INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (specialty) REFERENCES Specialties(id)
    FOREIGN KEY (user) REFERENCES Users(id)
);

CREATE TABLE IF NOT EXISTS SubGroups (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(50) NOT NULL,
    group INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (group) REFERENCES Groups(id)
);

CREATE TABLE IF NOT EXISTS Teachers (
    id INT AUTO_INCREMENT NOT NULL,
    surname VARCHAR(50) NOT NULL,
    name VARCHAR(50) NOT NULL,
    patronymic VARCHAR(50) NOT NULL,
    user INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (user) REFERENCES Users(id)
);

CREATE TABLE IF NOT EXISTS Students (
    id INT AUTO_INCREMENT NOT NULL,
    surname VARCHAR(50) NOT NULL,
    name VARCHAR(50) NOT NULL,
    patronymic VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS StudentsInGroups (
    id INT AUTO_INCREMENT NOT NULL,
    group INT NOT NULL,
    student INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (group) REFERENCES Groups(id),
    FOREIGN KEY (student) REFERENCES Students(id)
);

CREATE TABLE IF NOT EXISTS Lessons (
    id INT AUTO_INCREMENT NOT NULL,
    group INT NOT NULL,
    teacher INT NOT NULL,
    subject INT NOT NULL,
    number INT NOT NULL,
    type INT NOT NULL,
    day INT NOT NULL,
    semester INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (group) REFERENCES Groups(id),
    FOREIGN KEY (teacher) REFERENCES Teachers(id),
    FOREIGN KEY (subject) REFERENCES Subjects(id),
    FOREIGN KEY (type) REFERENCES LessonTypes(id),
    FOREIGN KEY (day) REFERENCES WeekDays(id),
    FOREIGN KEY (semester) REFERENCES Semesters(id)
);

CREATE TABLE IF NOT EXISTS LessonVisits (
    id INT AUTO_INCREMENT NOT NULL,
    lesson INT NOT NULL,
    student INT NOT NULL,
    status VARCHAR(20) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (lesson) REFERENCES Lessons(id),
    FOREIGN KEY (student) REFERENCES Students(id)
);

CREATE TABLE IF NOT EXISTS ConductedLessons (
    id INT AUTO_INCREMENT NOT NULL,
    lesson INT NOT NULL,
    topic VARCHAR(255) NOT NULL,
    date DATE NOT NULL,
    description TEXT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (lesson) REFERENCES Lessons(id)
);