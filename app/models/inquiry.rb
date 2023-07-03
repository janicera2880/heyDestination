class Inquiry < ApplicationRecord

  belongs_to :villa
  has_one :user_admin, through: :villa
  #belongs_to :location
  

    # Validations
    validates :arrival, :departure, presence: true
    validates :guests, presence: true, numericality: { only_integer: true, greater_than: 0 }
    validates :full_name, presence: true
    validates :email, presence: true, format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :phone, presence: true, length: { is: 10 }, numericality: { only_integer: true }
    validates :message, presence: true
    validate :valid_dates

    # checks if both the departure date and arrival date are present, and if the departure date is less than the arrival date
    def valid_dates
      if departure.present? && arrival.present? && departure < arrival
        errors.add(:departure, "can't be before the arrival date")
      end
    end
  
    
   
end