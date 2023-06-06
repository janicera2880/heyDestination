class CreateVillas < ActiveRecord::Migration[6.1]
  def change
    create_table :villas do |t|
      t.string :name
      t.text :highlights
      t.text :overview
      t.text :features
      t.text :amenities
      t.decimal :rate
      t.integer :capacity
      t.integer :bedroom
      t.integer :bathroom
      t.text :services
      t.string :image
      t.integer :user_admin_id
      t.integer :location_id

      t.timestamps
    end
  end
end
