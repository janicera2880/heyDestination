class CreateActivityLocations < ActiveRecord::Migration[6.1]
  def change
    create_table :activity_locations do |t|
      t.integer :activity_id
      t.integer :location_id

      t.timestamps
    end
  end
end
