class Api::FriendsController < ApplicationController

  def create
    @friendship = Friend.new(friends_params)
    if @friendship.save
      @friend = User.find_by(id: params[:friend][:friendee_id])
      render :show
    else
      render json: ['Cannot add friend'], status: 400
    end
  end

  def index
    user = current_user
    friend_ids = []
    @all_friends = Friend.all.select{ |friend| (friend.friender_id == user.id) || (friend.friendee_id == user.id)}
    @all_friends.each do |fri|
      fri.friender_id == user.id ? friend_ids.push(fri.friendee_id) : friend_ids.push(fri.friender_id)
    end
    @friends = User.all.select{ |user| friend_ids.include?(user.id)}
  end

  def destroy
    user_id = current_user.id
    friend_id = params[:id]
    @friend = User.find(params[:id])

    all_friends = Friend.all.select do |friend|
      friend.friender_id == user_id || friend.friendee_id == user_id
    end
    friendship = all_friends.select do |friend|
      friend.friender_id == friend_id || friend.friendee_id == friend_id.to_i
    end

    if friendship[0].destroy
      render :show
    else
      render json: ["Sorry, they're a friend for life"], status: 400
    end
  end

  private

  def friends_params
    params.require(:friend).permit(:friender_id, :friendee_id, :status)
  end

end
