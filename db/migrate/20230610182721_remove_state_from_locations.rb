class RemoveStateFromLocations < ActiveRecord::Migration[6.1]
  def change
    remove_column :locations, :state, :string
  end
end
