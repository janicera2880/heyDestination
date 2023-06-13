class VillaSerializer < ActiveModel::Serializer
  attributes :id, :name, :highlights, :features, :services, :overview, :features, :amenities, :rate, :capacity, :bedroom, :bathroom, :user_admin_id, :location_id, :image_url

  belongs_to :user
  belongs_to :location
  has_many :inquiries

  def image_url
    object.image.service_url if object.image.attached?
  end
end