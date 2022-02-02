SELECT * FROM models m 
JOIN d_user d ON m.user_id = d.user_id
WHERE d.user_id = $1