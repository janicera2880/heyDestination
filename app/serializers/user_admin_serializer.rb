class UserAdminSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :phone

  has_many :villas
  has_many :inquiries, through: :villas
end
