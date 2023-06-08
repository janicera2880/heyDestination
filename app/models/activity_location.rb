class ActivityLocation < ApplicationRecord

    # Represents a joined table in a many-to-many relationship between the Activity and Location models.

    belongs_to :activity
    belongs_to :location

end