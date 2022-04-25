INSERT INTO model_images (model_id,name,photo_url)
VALUES (
    $1,
    $2,
    $3
)
RETURNING *;