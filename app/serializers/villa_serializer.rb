class VillaSerializer < ActiveModel::Serializer
  attributes :id, :name, :highlights, :features, :services, :overview, :features, :amenities, :rate, :capacity, :bedroom, :bathroom, :image, :user_admin_id, :location_id

  belongs_to :user
  belongs_to :location
  has_many :inquiries
end