class UserAdmin < ApplicationRecord
  has_secure_password

  has_many :villas
  has_many :inquiries, through: :villas
  has_one_attached :profile_image

  validates :first_name, :last_name, :admin, presence: true
  validates :password, length: { in: 8..45 }
  validates :email, uniqueness: true, format: { with: /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i }
  validate :profile_image_validation

  def profile_image_validation
    if profile_image.attached?
      if profile_image.blob.byte_size > 1.megabyte
        errors.add(:profile_image, "file is too big")
      end

      acceptable_types = ["image/jpeg", "image/png"]
      unless acceptable_types.include?(profile_image.blob.content_type)
        errors.add(:profile_image, "must be a JPEG or PNG")
      end
    else
      errors.add(:profile_image, "must be attached")
    end
  end
end

