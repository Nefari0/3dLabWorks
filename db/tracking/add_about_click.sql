UPDATE d_visitors
SET clicked_about = clicked_about + 1 WHERE unique_id = $1