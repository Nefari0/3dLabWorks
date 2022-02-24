UPDATE d_visitors
SET remount = remount + 1 WHERE unique_id = $1