class RemoveProfileImageFromUserAdmins < ActiveRecord::Migration[6.1]
  def change
    remove_column :user_admins, :profile_image, :string
  end
end
