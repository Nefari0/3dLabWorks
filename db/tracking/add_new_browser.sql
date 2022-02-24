INSERT INTO d_visitors (unique_id,remount)
values (
  $1,
  1
)
RETURNING *;