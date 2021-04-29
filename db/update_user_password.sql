UPDATE d_user SET hash = $1 WHERE user_name = $2
RETURNING *;