UPDATE d_visitors
SET logged_in_as = $1 WHERE  unique_id = $2