class VillaSerializer < ActiveModel::Serializer
  attributes :id, :name, :highlights, :features, :services, :overview, :features, :amenities, :rate, :capacity, :bedroom, :bathroom, :user_admin_id, :location_id, :image1, :image2, :image3, :image4, :image5, :image6, :image7, :image8, :image9, :image10

  belongs_to :user_admin
  belongs_to :location
  has_many :inquiries

  #def image_url
    #object.image.service_url if object.image.attached?
  #end
end