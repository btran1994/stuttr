json.extract! user, :id, :username

if user.pfp.attached?
    json.imageUrl url_for(user.pfp)
else
    json.imageUrl ""
end
