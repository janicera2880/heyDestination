class CreateActivities < ActiveRecord::Migration[6.1]
  def change
    create_table :activities do |t|
      t.string :name
      t.text :highlights
      t.string :image
      t.text :details
      t.string :categories

      t.timestamps
    end
  end
end
