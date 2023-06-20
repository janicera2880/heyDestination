class UserAdmin < ApplicationRecord
    has_secure_password # Provided by the bcrypt gem to handle secure password storage and authentication.

    has_many :villas
    has_many :inquiries, through: :villas
    #has_one_attached :profile_pic
	
    validates :first_name, :last_name, :email, :admin, presence: true
    validates :password, length: { in: 8..45 } # Validates length of password between 8 and 45 characters
    validates :email, uniqueness: true, format: { with: /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i } # Validates presence and format of email using a regular expression
    
    #validate :profile_pic
   
    #def profile_pic
        #errors.add(:profile_pic, "file is too big") if profile_pic.blob.byte_size > 1.megabyte
      
        #acceptable_types = ["image/jpeg", "image/png"]
        #unless acceptable_types.include?(profile_pic.blob.content_type)
          #errors.add(:profile_pic, "must be a JPEG or PNG")
        #end
      #end
end
