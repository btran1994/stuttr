json.extract! user, :username, :id, :created_at

if user.pfp.attached?
    json.imageUrl url_for(user.pfp)
else
    json.imageUrl ""
end
