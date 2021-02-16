
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

-- INSERT INTO models (user_id,name,description,firebase_url01)
-- VALUES (
--   12,
--   'A model',
--   'is 3d printable',
--   'https://s3.us-east-2.amazonaws.com/ari.my.leach.chose.peach.nova/17155399_10155003704484259_8760045685703876866_n.jpg'
-- )

--------model_likes---------
-- CREATE TABLE model_likes (
--   user_id INTEGER,
--   FOREIGN KEY(user_id) REFERENCES d_user(user_id),
--   model_id INTEGER,
--   FOREIGN KEY(model_id) REFERENCES models(model_id)
-- )

-- INSERT INTO model_likes(user_id,model_id)
-- VALUES (12,27)


-- ----------icons -------------- --
-- CREATE TABLE d_icons (
--   icon_id SERIAL PRIMARY KEY,
--   h_statement VARCHAR(250),
--   p_statement VARCHAR(500),
--   icon_url VARCHAR(500)
-- )
