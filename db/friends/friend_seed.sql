-- CREATE TABLE d_friends (
--   connection_id SERIAL PRIMARY KEY,
--   user_id INTEGER,
--   FOREIGN KEY(user_id) REFERENCES d_user(user_id),
--   friend_id INTEGER,
--   FOREIGN KEY(user_id) REFERENCES d_user(user_id)
-- )

-- INSERT INTO d_friends (user_id,friend_id)
-- VALUES (12,68,FALSE)