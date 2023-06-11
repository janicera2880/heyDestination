class Villa < ApplicationRecord

    # Associations
    belongs_to :user
    belongs_to :location
    has_many :inquiries
    has_many_attached :images

    # Validations
    # Ensures length is correct and presence of attributes
    # Integers have a non-negative numerical value
    validates :name, presence: true, length: { maximum: 100 }
    validates :highlights, :features, :services, presence: true, length: { minimum: 200 }
    validates :overview, :features, :amenities, presence: true, length: { minimum: 300 }
    validates :rate, :capacity, :bedroom, :bathroom, presence: true, numericality: { greater_than_or_equal_to: 0 }
    validate :acceptable_image

    def acceptable_image
        return unless images.attached?
      
        unless main_image.blob.byte_size <= 1.megabyte
          errors.add(:images, "file too big")
        end

        acceptable_types = ["image/jpeg", "image/png"]
        unless acceptable_types.include?(images.content_type)
        errors.add(:images, "must be a JPEG or PNG")
        end
      end

end