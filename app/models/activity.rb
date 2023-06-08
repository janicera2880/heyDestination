class Activity < ApplicationRecord

    # Associations
    # Has a one-to-many association with the ActivityLocation model. 
    # This means that an activity can have multiple activity locations.
    has_many :activity_locations
    has_many :locations, through: :activity_locations
    # Specifies a many-to-many association between the Activity model and the Location model through the ActivityLocation model.
    # This association allows an activity to be associated with multiple locations indirectly through the activity_locations table.
    
    # Validations
    validates :name, presence: true, length: { maximum: 100 }
    validates :highlights, :details, presence: true, length: { minimum: 50 }
    validates :image, presence: true
    validates :categories, presence: true, inclusion: { in: ['Sports', 'Lifestyle', 'Events', 'Unique'], message: "must be one of: Sports, Lifestyle, Events, Unique" }
end
