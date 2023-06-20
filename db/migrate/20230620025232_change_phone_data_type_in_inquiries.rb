class ChangePhoneDataTypeInInquiries < ActiveRecord::Migration[6.1]
  def change
    change_column :inquiries, :phone, :string
  end
end
