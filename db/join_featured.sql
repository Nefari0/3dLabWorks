SELECT * FROM featured_projects fp
JOIN models m on fp.model_id = m.model_id
WHERE NOT is_hidden  = TRUE
-- JOIN d_user d on m.user_id = d.user_id