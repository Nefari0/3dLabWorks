INSERT INTO d_visitors (unique_id,remount,clicked_projects,clicked_login,clicked_about)
values (
  $1,
  1,
  0,
  0,
  0
)
RETURNING *;