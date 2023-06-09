class LocationSerializer < ActiveModel::Serializer
  attributes :id, :city, :country, :description, :image

  has_many :villas
  has_many :activity_locations
  has_many :activities, through: :activity_locations

end
