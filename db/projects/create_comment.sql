INSERT INTO comments (user_id,model_id,user_name,text)
VALUES ($1,$2,$3,$4)
RETURNING *;