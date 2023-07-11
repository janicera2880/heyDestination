class UserAdminSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :id, :first_name, :last_name, :email, :admin, :profile_pic
  has_many :villas
  has_many :inquiries, through: :villas

  def profile_pic
    rails_blob_path(object.profile_pic, only_path: true) if object.profile_pic.attached?
  end

end

