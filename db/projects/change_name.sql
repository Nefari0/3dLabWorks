UPDATE models
SET name = $1 WHERE model_id = $2
RETURNING *;