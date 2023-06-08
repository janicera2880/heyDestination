class Location < ApplicationRecord

    has_many :villas # Each location has many villas
    has_many :inquiries # Each location has many inquiries
    has_many :activity_locations # Each location has many ActivityLocations
    has_many :activities, through: :activity_locations # Each location has many activities through ActivityLocations

    # Validations
    validates :city, :state, :country, presence: true, length: { maximum: 50 }
    validates :description, length: { minimum: 500 }
    validates :image, presence: true
    validate :validate_state_belongs_to_country


    def validate_state_belongs_to_country
        # Custom validation logic to check if the state belongs to the country
        errors.add(:state, "must belong to the selected country") unless State.where(country: country).exists?
    end
end