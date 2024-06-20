-- Создание базы данных
CREATE DATABASE attendance;

-- Переключение на созданную базу данных
USE attendance;

-- Создание таблицы Specialization
CREATE TABLE specialization (
    specialization_id INT AUTO_INCREMENT,
    specialization_name VARCHAR(255),
    PRIMARY KEY (specialization_id)
);

-- Создание таблицы Group_info
CREATE TABLE group_info (
    group_id INT AUTO_INCREMENT,
    group_number VARCHAR(10),
    specialization_id INT,
    user_id INT,
    PRIMARY KEY (group_id),
    FOREIGN KEY (specialization_id) REFERENCES specialization(specialization_id),
    FOREIGN KEY (user_id) REFERENCES user_account(user_id)
);

-- Создание таблицы User_account
CREATE TABLE user_account (
    user_id INT AUTO_INCREMENT,
    login VARCHAR(50),
    password VARCHAR(16),
    role BOOLEAN,
    PRIMARY KEY (user_id)
);

-- Создание таблицы Teacher_info
CREATE TABLE teacher_info (
    teacher_id INT AUTO_INCREMENT,
    surname VARCHAR(15),
    first_name VARCHAR(15),
    patronymic VARCHAR(15),
    user_id INT,
    PRIMARY KEY (teacher_id),
    FOREIGN KEY (user_id) REFERENCES user_account(user_id)
);

-- Создание таблицы Lesson_type
CREATE TABLE lesson_type (
    lesson_type_id INT AUTO_INCREMENT,
    lesson_type_name VARCHAR(15),
    PRIMARY KEY (lesson_type_id)
);

-- Создание таблицы Subgroup_info
CREATE TABLE subgroup_info (
    subgroup_id INT AUTO_INCREMENT,
    subgroup_number VARCHAR(1),
    group_id INT,
    PRIMARY KEY (subgroup_id),
    FOREIGN KEY (group_id) REFERENCES group_info(group_id)
);

-- Создание таблицы Student_group
CREATE TABLE student_group (
    student_group_id INT AUTO_INCREMENT,
    student_id INT,
    group_id INT,
    PRIMARY KEY (student_group_id),
    FOREIGN KEY (student_id) REFERENCES student(student_id),
    FOREIGN KEY (group_id) REFERENCES group_info(group_id)
);

-- Создание таблицы Lesson_schedule
CREATE TABLE lesson_schedule (
    lesson_id INT AUTO_INCREMENT,
    group_id INT,
    teacher_id INT,
    discipline_id INT,
    lesson_type_id INT,
    week_type_id INT,
    day_of_week_id INT,
    semester VARCHAR(2),
    lesson_number VARCHAR(1),
    PRIMARY KEY (lesson_id),
    FOREIGN KEY (group_id) REFERENCES group_info(group_id),
    FOREIGN KEY (teacher_id) REFERENCES teacher_info(teacher_id),
    FOREIGN KEY (discipline_id) REFERENCES discipline(discipline_id),
    FOREIGN KEY (lesson_type_id) REFERENCES lesson_type(lesson_type_id),
    FOREIGN KEY (week_type_id) REFERENCES week_type(week_type_id),
    FOREIGN KEY (day_of_week_id) REFERENCES day_of_week(day_of_week_id)
);

-- Создание таблицы Discipline
CREATE TABLE discipline (
    discipline_id INT AUTO_INCREMENT,
    discipline_name VARCHAR(255),
    PRIMARY KEY (discipline_id)
);

-- Создание таблицы Week_type
CREATE TABLE week_type (
    week_type_id INT AUTO_INCREMENT,
    week_type_name VARCHAR(10),
    PRIMARY KEY (week_type_id)
);

-- Создание таблицы Day_of_week
CREATE TABLE day_of_week (
    day_of_week_id INT AUTO_INCREMENT,
    day_of_week_name VARCHAR(10),
    PRIMARY KEY (day_of_week_id)
);

-- Создание таблицы Lesson_attendance
CREATE TABLE lesson_attendance (
    lesson_attendance_id INT AUTO_INCREMENT,
    lesson_id INT,
    student_id INT,
    status_id INT,
    PRIMARY KEY (lesson_attendance_id),
    FOREIGN KEY (lesson_id) REFERENCES lesson_done(lesson_id),
    FOREIGN KEY (student_id) REFERENCES student(student_id),
    FOREIGN KEY (status_id) REFERENCES status(status_id)
);

-- Создание таблицы Lesson_done
CREATE TABLE lesson_done (
    lesson_id INT AUTO_INCREMENT,
    lesson_theme VARCHAR(255),
    lesson_date DATE,
    lesson_description VARCHAR(255),
    PRIMARY KEY (lesson_id)
);

-- Создание таблицы Status
CREATE TABLE status (
    status_id INT AUTO_INCREMENT,
    status_name VARCHAR(10),
    PRIMARY KEY (status_id)
);

-- Создание таблицы Student
CREATE TABLE student (
    student_id INT AUTO_INCREMENT,
    student_name VARCHAR(50),
    PRIMARY KEY (student_id)
);