UPDATE d_visitors
SET clicked_projects = clicked_projects + 1 WHERE unique_id = $1