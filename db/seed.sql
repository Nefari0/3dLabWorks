
-- main user for testing
-- new6
-- id:12,
-- pass:pass

-- CREATE TABLE d_user (
--     user_id SERIAL PRIMARY KEY,
--     user_name VARCHAR(100) NOT NULL,
--     email VARCHAR(100) NOT NULL,
--     phone DECIMAL(10),
--     first_name VARCHAR(100) NOT NULL,
--     last_name VARCHAR(100),
--     hash text NOT NULL,
--     is_admin BOOLEAN
-- )

-- INSERT INTO d_user (user_name,email,first_name,last_name)
-- VALUES(
--   'madmax',
--   'mad@max.com',
--   'max',
--   'machinegun'
-- )

-- -----------models------------- --
-- CREATE TABLE models (
--   model_id SERIAL PRIMARY KEY,
--   user_id INTEGER,
--   FOREIGN KEY(user_id) REFERENCES d_user(user_id),
--   name VARCHAR(250) NOT NULL, 
--   description VARCHAR(500),
--   firebase_url text
-- );

-- ----------icons -------------- --
-- CREATE TABLE d_icons (
--   icon_id SERIAL PRIMARY KEY,
--   h_statement VARCHAR(250),
--   p_statement VARCHAR(500),
--   icon_url VARCHAR(500)
-- )