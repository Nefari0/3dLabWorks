-- SELECT * FROM d_friends WHERE friend_id = $1 AND is_accepted = false

SELECT user_id,photo_url,user_name
FROM d_user du
WHERE user_id IN ( SELECT user_id FROM d_friends df WHERE df.friend_id = $1 AND df.is_accepted = FALSE)