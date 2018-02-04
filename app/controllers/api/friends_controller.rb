class Api::FriendsController < ApplicationController

  def create
    friendee = currentUser.id
    @friend = Friend.new(currentUser, params[:id], 'active' )
  end

  def index
    user = current_user
    friend_ids = []
    @all_friends = Friend.all.select{ |friend| (friend.friender_id == user.id) || (friend.friendee_id == user.id)}
    @all_friends.each do |fri|
       fri.friender_id == user.id ? friend_ids.push(fri.friendee_id) : friend_ids.push(fri.friender_id)
       @friends = User.all.select{ |user| friend_ids.include?(user.id)}
     end
  end

  def destroy
  end
end