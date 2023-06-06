class CreateUserAdmins < ActiveRecord::Migration[6.1]
  def change
    create_table :user_admins do |t|
      t.string :first_name
      t.string :last_name
      t.string :password_digest
      t.string :email
      t.integer :phone
      t.boolean :admin

      t.timestamps
    end
  end
end
