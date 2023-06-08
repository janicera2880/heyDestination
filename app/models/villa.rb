class Villa < ApplicationRecord

    # Associations
    belongs_to :user
    belongs_to :location
    has_many :inquiries

    # Validations
    # Ensures length is correct and presence of attributes
    # Integers have a non-negative numerical value
    validates :name, presence: true, length: { maximum: 100 }
    validates :highlights, :features, :services, presence: true, length: { minimum: 200 }
    validates :overview, :features, :amenities, presence: true, length: { minimum: 300 }
    validates :rate, :capacity, :bedroom, :bathroom, presence: true, numericality: { greater_than_or_equal_to: 0 }
    validates :image, presence: true

end