class UserAdmin < ApplicationRecord
    has_secure_password # Provided by the bcrypt gem to handle secure password storage and authentication.

    has_many :villas
    has_many :inquiries, through: :villas
    has_one_attached :profile_pic
	
    validates :first_name, :last_name, presence: true # Validates presence of first_name and last_name
    validates :email, uniqueness: true, format: { with: /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i } # Validates presence and format of email using a regular expression
    validates :phone, presence: true, format: { with: /\A\d{3}-\d{3}-\d{4}\z/, message: "should be in the format xxx-xxx-xxxx" } # Validates presence and format of phone number using a regular expression
    validates :password, length: { in: 8..45 } # Validates length of password between 8 and 45 characters
    validates :admin, presence: true, inclusion: { in: [true, false] } # Validates presence and inclusion of admin, which should be either true or false
    validate :profile_pic
    # Validates presence of profile_pic
    def profile_pic
        return unless profile_pic.attached?
        errors.add(:profile_pic, "file is too big") if profile_pic.blob.byte_size > 1.megabyte
        acceptable_types = ["image/jpeg", "image/png"]
        unless acceptable_types.include?(profile_pic.blob.content_type)
            errors.add(:profile_pic, "must be a JPEG or PNG")
        end
    end
end
