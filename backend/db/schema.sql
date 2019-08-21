DROP DATABASE IF EXISTS whoistheworld;
CREATE DATABASE whoistheworld;

\c whoistheworld;

CREATE TABLE stories
(
    id SERIAL PRIMARY KEY,
    title VARCHAR, 
    story VARCHAR,
    created_at TIMESTAMP
    WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- ###TODO Set title to 36 characters