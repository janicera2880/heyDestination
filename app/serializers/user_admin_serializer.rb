class UserAdminSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :phone, :profile_pic

  has_many :villas
  has_many :inquiries, through: :villas

  def profile_pic
    if object.profile_pic.attached?
      {
        url: Rails.application.routes.url_helpers.url_for(object.profile_pic),
        content_type: object.profile_pic.blob.content_type
      }
    end
  end
end