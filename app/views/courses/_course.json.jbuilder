json.extract! course, :id, :title, :content, :created_at, :updated_at
json.url course_url(course, format: :json)