class CreateInquiries < ActiveRecord::Migration[6.1]
  def change
    create_table :inquiries do |t|
      t.date :arrival
      t.date :departure
      t.integer :guests
      t.string :full_name
      t.string :email
      t.integer :phone
      t.text :message
      t.integer :villa_id
      t.integer :location_id

      t.timestamps
    end
  end
end
