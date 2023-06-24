class Inquiry < ApplicationRecord

  belongs_to :villa
  has_one :user_admin, through: :villa
  belongs_to :location
  

    # Validations
    validates :arrival, :departure, presence: true
    validates :guests, presence: true, numericality: { only_integer: true, greater_than: 0 }
    validates :email, presence: true, format: { with: /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i }
    validates :phone, presence: true, format: { with: /\A\d{3}-\d{3}-\d{4}\z/, message: "should be in the format xxx-xxx-xxxx" }
    validates :message, length: { minimum: 50 }
    validate :validate_full_name
    validate :valid_dates

    # checks if both the departure date and arrival date are present, and if the departure date is less than the arrival date
    def valid_dates
      if departure.present? && arrival.present? && departure < arrival
        errors.add(:departure, "can't be before the arrival date")
      end
    end
    

    # Custom validation to ensure full name includes both first and last name
    def validate_full_name
        names = full_name.split(" ")
        if names.length < 2
          errors.add(:full_name, "must include both first and last name")
        end
    end
   
end