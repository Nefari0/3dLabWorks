INSERT INTO models (user_id,name,description,firebase_url,firebase_url01,firebase_url02,likes)
VALUES ($1,$2,$3,$4,$5,$6,$7)
RETURNING *;