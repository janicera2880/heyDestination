class UserAdmin < ApplicationRecord
    has_secure_password # Provided by the bcrypt gem to handle secure password storage and authentication.

    has_many :villas
	has_many :inquiries, through: :villas
	
    validates :first_name, :last_name, presence: true # Validates presence of first_name and last_name
    validates :email, presence: true, format: { with: URI::MailTo::EMAIL_REGEXP } # Validates presence and format of email using a regular expression
    validates :phone_number, presence: true, format: { with: /\A\d{10}\z/, message: "should be a 10-digit number" } # Validates presence and format of phone_number using a regular expression
    validates :password, length: { in: 8..45 } # Validates length of password between 8 and 45 characters
    validates :admin, presence: true, inclusion: { in: [true, false] } # Validates presence and inclusion of admin, which should be either true or false
end
