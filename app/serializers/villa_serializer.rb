class VillaSerializer < ActiveModel::Serializer
  attributes :id

  belongs_to :user
  belongs_to :location
  has_many :inquiries
end