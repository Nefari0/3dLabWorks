SELECT * FROM d_user_admin_message duam
JOIN d_user d ON duam.user_id = d.user_id
ORDER BY date_created DESC;