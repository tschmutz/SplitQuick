class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      log_in(@user)
      render 'api/users/show'
    elsif User.find_by(username: @user.username)
      render json: ['Username already taken'], status: 400
    else
      render json: ['Invalid username or password'], status: 400;
    end
  end

  def index
    @users = User.all
  end



  private

  def user_params
    params.require(:user).permit(:username, :password)
  end

end
