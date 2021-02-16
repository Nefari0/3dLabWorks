SELECT COUNT(*) FROM model_likes WHERE model_id = $1
-- RETURNING *;

-- SELECT COUNT(*), ml.model_id FROM models m
-- JOIN model_likes ml ON m.model_id = ml.model_id
-- GROUP BY ml.model_id;