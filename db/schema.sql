CREATE DATABASE games_db;

use games_db;

CREATE TABLE games (
    id INT AUTO_INCREMENT, 
    game_name VARCHAR(100) NOT NULL,
    played BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);