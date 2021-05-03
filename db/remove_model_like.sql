UPDATE models
SET likes = likes - $1 WHERE model_id = $2