class UserAdminSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :phone, :admin

  has_many :villas
  has_many :inquiries, through: :villas
  has_one_attached :profile_pic
end