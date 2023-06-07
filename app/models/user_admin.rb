class UserAdmin < ApplicationRecord
    has_secure_password

    has_many :villas
	has_many :inquiries, through: :villas
	
    validates :first_name, :last_name, presence: true
    validates :email, presence: true, format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :phone_number, presence: true, format: { with: /\A\d{10}\z/, message: "should be a 10-digit number" }
    validates :password, length: { in: 8..20 }
    validates :admin, presence: true, inclusion: { in: [true, false] }
end
