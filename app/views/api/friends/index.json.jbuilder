@friends.each do |friend|
  json.username friend.username
  json.id friend.id
end
