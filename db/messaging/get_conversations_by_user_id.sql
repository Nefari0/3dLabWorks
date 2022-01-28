SELECT conversation_name,  conversation_id
FROM d_conversation dc
WHERE conversation_id in ( SELECT conversation_id FROM d_conversation_members WHERE user_id = $1)