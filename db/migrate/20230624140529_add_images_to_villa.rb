class AddImagesToVilla < ActiveRecord::Migration[6.1]
  def change
    add_column :villas, :image1, :string
    add_column :villas, :image2, :string
    add_column :villas, :image3, :string
    add_column :villas, :image4, :string
    add_column :villas, :image5, :string
    add_column :villas, :image6, :string
    add_column :villas, :image7, :string
    add_column :villas, :image8, :string
    add_column :villas, :image9, :string
    add_column :villas, :image10, :string
  end
end
