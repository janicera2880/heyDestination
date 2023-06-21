class AddProfileImageToUserAdmin < ActiveRecord::Migration[6.1]
  def change
    add_column :user_admins, :profile_image, :string
  end
end
