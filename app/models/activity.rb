class Activity < ApplicationRecord
  # Associations
  has_many :activity_locations
  has_many :locations, through: :activity_locations

  def formatted_locations
    self.locations.map do |location|
      {
        id: location.id,
        city: location.city,
        country: location.country
      }
    end
  end

  # Validations
  validates :name, presence: true, length: { maximum: 100 }
  validates :highlights, :details, presence: true, length: { minimum: 50 }
  validates :image, presence: true
  validates :categories, presence: true, inclusion: { in: ['Sports', 'Lifestyle', 'Events', 'Unique'], message: "must be one of: Sports, Lifestyle, Events, Unique" }
end
