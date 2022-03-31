-- SELECT * FROM d_friends df
-- JOIN d_user du ON df.user_id = du.user_id

SELECT user_id,photo_url,user_name
FROM d_user du
WHERE user_id IN ( SELECT friend_id FROM d_friends df WHERE df.user_id = $1 AND df.is_accepted = true)
-- WHERE user_id IN ( SELECT friend_id FROM d_friends df WHERE df.user_id = $1 OR df.friend_id = 12 AND df.is_accepted = TRUE)
-- WHERE user_id IN ( SELECT friend_id FROM d_friends df WHERE df.user_id = $1 AND df.is_accepted = true OR df.friend_id = $1 AND df.is_accepted = true)

-- WHERE user_id in ( select friend_id from d_friends where user_id = $1 )