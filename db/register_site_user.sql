INSERT INTO d_user (user_name,hash,email,first_name,is_admin,is_sudo,photo_url)
VALUES($1,$2,$3,$4,$5,$6,$7)
RETURNING *;