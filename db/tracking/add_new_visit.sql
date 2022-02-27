UPDATE d_visitors
SET remount = remount + 1, last_visit = $1 WHERE unique_id = $2