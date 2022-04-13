SELECT * FROM d_user d
JOIN models m ON d.user_id = m.user_id
WHERE NOT is_hidden = TRUE

-- SELECT COUNT(*), ml.model_id FROM models m
-- JOIN model_likes ml ON m.model_id = ml.model_id
-- GROUP BY ml.model_id;