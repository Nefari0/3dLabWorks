SELECT * FROM comments WHERE model_id = $1
order by date_created desc;