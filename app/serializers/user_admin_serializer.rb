class UserAdminSerializer < ActiveModel::Serializer
attributes :id, :first_name, :last_name, :email, :phone, :admin, :profile_pic_url

has_many :villas
has_many :inquiries, through: :villas

  def profile_pic_url
    if object.profile_pic.attached?
    Rails.application.routes.url_helpers.rails_blob_url(object.profile_pic)
    end
  end
end
