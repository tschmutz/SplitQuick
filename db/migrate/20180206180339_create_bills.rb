class CreateBills < ActiveRecord::Migration[5.1]
  def change
    create_table :bills do |t|
      t.integer :lender_id, null: false
      t.integer :lendee_id, null: false
      t.string :title, null: false
      t.string :description
      t.float :amount, null: false
      t.boolean :settled, null: false

      t.timestamps
    end

    add_index :bills, :lender_id
    add_index :bills, :lendee_id
  end
end
