photo ||= @photo

json.extract! photo, :title, :description, :id, :user_id, :user

if photo.image.attached?
    json.imageUrl url_for(photo.image)
else
    json.imageUrl ""
end