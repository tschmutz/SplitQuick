class CreateFriends < ActiveRecord::Migration[5.1]
  def change
    create_table :friends do |t|
      t.integer :friender_id, null: false
      t.integer :friendee_id, null: false
      t.string :status, null: false

      t.timestamps
    end

    add_index :friends, [:friender_id, :friendee_id], unique: true;
  end
end
