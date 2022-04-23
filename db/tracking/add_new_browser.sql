INSERT INTO d_visitors (unique_id,assigned_browser,remount,clicked_projects,clicked_login,clicked_about)
values (
  $1,
  $2,
  1,
  0,
  0,
  0
)
RETURNING *;