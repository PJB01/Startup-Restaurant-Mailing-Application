CREATE TABLE users (
    email VARCHAR(255) PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    comment_text VARCHAR(255),
    created_at TIMESTAMP DEFAULT NOW()
);

#Inserting Test Data
INSERT INTO users (email, full_name, comment_text) VALUES
('john21@gmail.com', 'John Smith', 'Im really excited for this'),
('Sarah219@gmail.com', 'Sarah Smith', 'Any chance I could work here once youre open?');
INSERT INTO users (email, full_name) VALUES
('thatguy123@hotmail.com', 'Mr Guy'),
('PhilMccray@outlook.com', 'Phil Mccray');

