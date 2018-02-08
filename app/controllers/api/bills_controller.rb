class Api::BillsController < ApplicationController


  def create
  end

  def update
  end

  def index
     @bills_owed = current_user.bills_owed
     @bills_lent = current_user.bills_lent
    render :index
  end

  def show
  end

  def destroy
  end
end
