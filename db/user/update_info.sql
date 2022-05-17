UPDATE d_user
SET
first_name = $1,
last_name = $2,
email = $3
WHERE user_id = $4