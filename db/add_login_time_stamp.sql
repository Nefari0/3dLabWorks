UPDATE d_user
SET last_visit = $1, from_browser = $2 WHERE user_name = $3