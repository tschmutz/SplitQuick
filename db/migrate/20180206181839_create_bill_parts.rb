class CreateBillParts < ActiveRecord::Migration[5.1]
  def change
    create_table :bill_parts do |t|
      t.integer :bill_id, null: false
      t.integer :user_id, null: false
      t.float :amount, null: false

      t.timestamps
    end

    add_index :bill_parts, :bill_id
    add_index :bill_parts, :user_id
  end
end
