UPDATE d_friends
SET is_accepted = true WHERE user_id = $1 AND friend_id = $2