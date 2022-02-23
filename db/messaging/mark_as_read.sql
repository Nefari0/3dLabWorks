UPDATE d_conversation
SET read_by = $1 WHERE conversation_id = $2