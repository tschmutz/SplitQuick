@friends.each do |friend|
  json.set! friend.id do
    json.username friend.username
    json.id friend.id
end 
end
