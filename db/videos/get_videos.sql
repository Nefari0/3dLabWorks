-- SELECT *
-- FROM d_videos dv
-- JOIN models m ON m.model_id = dv.model_id

SELECT du.photo_url, du.user_name, m.model_id, m.name, m.firebase_url, dv.category, dv.tag, dv.video_url, dv.video_id
from d_user du
join models m on du.user_id = m.user_id
join d_videos dv on dv.model_id = m.model_id
