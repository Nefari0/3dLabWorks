--  ACTUAL ALBUM --
-- CREATE TABLE photo_albums (
--   title VARCHAR(150),
--   user_id INTEGER,
--   FOREIGN KEY(user_id) REFERENCES d_user(user_id),
--   album_id SERIAL PRIMARY KEY
-- )

-- INSERT INTO photo_albums (title,user_id)
-- VALUES(
--   'first album',
--   12
-- )

--  ACTUAL PHOTO --
-- CREATE TABLE user_photos (
--   photo_id SERIAL PRIMARY KEY,
--   album_id INTEGER,
--   FOREIGN KEY(album_id) REFERENCES photo_albums(album_id),
--   image_url text NOT NULL
-- )

-- INSERT INTO phot