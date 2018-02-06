class CreateBills < ActiveRecord::Migration[5.1]
  def change
    create_table :bills do |t|
      t.integer :creator_id, null: false
      t.string :title, null: false
      t.string :description
      t.float :amount, null: false

      t.timestamps
    end
  end
end
