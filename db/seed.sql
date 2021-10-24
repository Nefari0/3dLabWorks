
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
--   like_id SERIAL PRIMARY KEY,
--   user_id INTEGER,
--   FOREIGN KEY(user_id) REFERENCES d_user(user_id),
--   model_id INTEGER,
--   FOREIGN KEY(model_id) REFERENCES models(model_id)
-- )

-- INSERT INTO model_likes(user_id,model_id)
-- VALUES (12,27)

-- ------ comments ------- --
-- CREATE TABLE comments (
--   comment_id SERIAL PRIMARY KEY,
--   user_id INTEGER,
--   FOREIGN KEY(user_id) REFERENCES d_user(user_id),
--   model_id INTEGER,
--   FOREIGN KEY(model_id) REFERENCES models(model_id),
--   text VARCHAR(500),
--   date_created timestamp DEFAULT CURRENT_TIMESTAMP
-- );

-- INSERT INTO comments(user_id,model_id,text)
-- VALUES (12,
--     5,
--     'this is text for testing comments on model_id = 5'
--     )


-- ----------icons -------------- --
-- CREATE TABLE d_icons (
--   icon_id SERIAL PRIMARY KEY,
--   h_statement VARCHAR(250),
--   p_statement VARCHAR(500),
--   icon_url VARCHAR(500)
-- )

-- ----------featured projects---- --
-- CREATE TABLE featured_projects (
--   model_id INTEGER,
--   FOREIGN KEY(model_id) REFERENCES models(model_id)

  -- INSERT INTO featured_projects(model_id)
-- VALUES (
  -- 1
-- )

-- ---------- track deleted firebase items ----------- -- 
-- CREATE TABLE deleted_fb_items(
--   item_id SERIAL PRIMARY key,
--   user_id INTEGER,
--   FOREIGN KEY(user_id) REFERENCES d_user(user_id),
--   firebase_url text  
-- );

-- INSERT INTO deleted_fb_items (user_id, firebase_url)
-- VALUES (
--   2,
--   'firebase_test_url'
-- )


-- --------------- documents db ----------------- --
-- CREATE TABLE d_document (
--   doc_id SERIAL PRIMARY KEY,
--   user_id INTEGER,
--   FOREIGN KEY(user_id) REFERENCES d_user(user_id),
--   tag TEXT,
--   content TEXT
-- )

-- INSERT into d_document(user_id,tag,content)
-- VALUES (12,'general','This site is an ongoing project. As of 10/4/2021 it is still under construction. Developers are working towards utilizing in app 3d rendering tools to allow users to upload .stl and .mtl files that will automatically be displayed in the app. Since this is currently not supported, it is recommended that you upload a screenshot of your project along with the file so other users can preview your work before downloading the file')

-- UPDATE d_document SET content = 'This site is an ongoing project. As of 10/4/2021 it is still under construction. Developers are working towards utilizing in app 3d rendering tools to allow users to upload .stl and .mtl files that will automatically be displayed in the app. Since this is currently not supported, it is recommended that you upload a screenshot of your project along with the file so other users can preview your work before downloading the file' WHERE tag = 'general'

