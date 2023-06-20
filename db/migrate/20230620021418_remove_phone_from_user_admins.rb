class RemovePhoneFromUserAdmins < ActiveRecord::Migration[6.1]
  def change
    remove_column :user_admins, :phone, :string
  end
end
