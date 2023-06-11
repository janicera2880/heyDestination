class RemoveImageFromVillas < ActiveRecord::Migration[6.1]
  def change
    remove_column :villas, :image, :string
  end
end
