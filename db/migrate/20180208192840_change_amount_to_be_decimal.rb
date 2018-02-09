class ChangeAmountToBeDecimal < ActiveRecord::Migration[5.1]
  def change
    change_column :bills, :amount, :decimal, :precision => 16, :scale => 2
  end
end
