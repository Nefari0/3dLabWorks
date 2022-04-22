INSERT INTO d_user (user_name,hash,email,first_name,is_admin,is_sudo)
VALUES($1,$2,$3,$4,$5,$6)
RETURNING *;