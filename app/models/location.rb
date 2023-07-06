class Location < ApplicationRecord

    has_many :villas # Each location has many villas
    #has_many :inquiries # Each location has many inquiries
    has_many :activity_locations # Each location has many ActivityLocations
    has_many :activities, through: :activity_locations # Each location has many activities through ActivityLocations

  # Validations
  validates :city, :country, presence: true, length: { maximum: 50 }
  validates :description, length: { minimum: 100 }
  validates :image, presence: true

end