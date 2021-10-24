INSERT INTO comments (user_id,model_id,text)
VALUES ($1,$2,$3)
RETURNING *;