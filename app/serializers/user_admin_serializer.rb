class UserAdminSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :admin, :profile_image_url

  has_many :villas
  has_many :inquiries, through: :villas

  def profile_image_url
    if object.profile_image.attached?
      Rails.application.routes.url_helpers.rails_blob_url(object.profile_image)
    else
      nil
    end
  end
end

