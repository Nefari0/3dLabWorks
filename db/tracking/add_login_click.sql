UPDATE d_visitors
SET clicked_login = clicked_login + 1 WHERE unique_id = $1