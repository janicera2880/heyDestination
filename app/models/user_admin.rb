class UserAdmin < ApplicationRecord
  has_secure_password

  has_many :villas
  has_many :inquiries, through: :villas
  #has_one_attached :profile_pic

  validates :first_name, :last_name, :admin, presence: true
  validates :password, length: { in: 8..45 }
  validates :email, uniqueness: true, format: { with: /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i }
  validates :profile_image, presence: true

  #def profile_pic_validation
    #if profile_pic.attached?
     # if profile_pic.blob.byte_size > 1.megabyte
       # errors.add(:profile_pic, "file is too big")
      #end

      #acceptable_types = ["image/jpeg", "image/png"]
      #unless acceptable_types.include?(profile_pic.blob.content_type)
       # errors.add(:profile_pic, "must be a JPEG or PNG")
      #end
    #else
      #errors.add(:profile_pic, "must be attached")
    #end
  #end
end

