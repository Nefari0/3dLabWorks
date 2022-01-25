UPDATE models
SET name = $1, description = $2 WHERE model_id = $3
RETURNING *;