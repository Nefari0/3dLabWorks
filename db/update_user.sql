UPDATE d_user SET photo_url = $1 WHERE user_id = $2
RETURNING *;