SELECT * FROM comments WHERE model_id = $1
-- JOIN d_user d ON c.user_id = d.user_id
order by date_created desc;