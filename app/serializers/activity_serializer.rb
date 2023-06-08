class ActivitySerializer < ActiveModel::Serializer
  attributes :id, :name, :highlights, :details, :image, :categories

  has_many :activity_locations
  has_many :locations, through: :activity_locations
end
