class Api::BillsController < ApplicationController


  def create
    @bill = Bill.new(bill_params)
    if @bill.save
      @bills_owed = current_user.bills_owed
      @bills_lent = current_user.bills_lent
      render :index
    else
      render json: ['Bill Create Error'], status: 400
    end
  end

  def update
    @bill = Bill.find(params[:id])
    @bill.settled = true
    @bill.save
    @bills_owed = current_user.bills_owed
    @bills_lent = current_user.bills_lent
    render :index
  end

  def index
    @bills_owed = current_user.bills_owed
    @bills_lent = current_user.bills_lent

    render :index
  end

  def show
  end

  def destroy
    @bill = Bill.find(params[:id])
    if @bill.destroy
      render json: ['destroyed!!!']
    else
      render json: ['Sorry, you cant get rid of this bill']
    end
  end

  private

  def bill_params
    params.require(:bill).permit(:lender_id, :lendee_id, :title, :amount, :settled)
  end
end
