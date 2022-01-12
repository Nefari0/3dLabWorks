SELECT c.text, d.user_id, d.photo_url, d.user_name, c.comment_id, date_created
FROM comments c
JOIN d_user d on c.user_id = d.user_id AND c.model_id = $1
ORDER BY date_created DESC