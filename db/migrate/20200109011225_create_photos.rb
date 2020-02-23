class CreatePhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :photos do |t|
      t.integer :user_id, null: false
      t.integer :group_id
      t.integer :album_id
      t.string :title, null: false
      t.string :pfp
      t.text :description, null: false


      t.timestamps
    end

    add_index :photos, :group_id
    add_index :photos, :album_id
  end
end
