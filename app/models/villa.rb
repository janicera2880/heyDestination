class Villa < ApplicationRecord

    # Associations
    belongs_to :user_admin
    belongs_to :location
    has_many :inquiries
    #has_many_attached :images

    # Validations
    # Ensures length is correct and presence of attributes
    # Integers have a non-negative numerical value
    validates :name, presence: true
    validates :highlights, :amenities, presence: true
    validates :features, :services, presence: true, length: { minimum: 50 }
    validates :overview, presence: true, length: { minimum: 100 }
    validates :rate, :capacity, :bedroom, :bathroom, presence: true, numericality: { greater_than_or_equal_to: 0 }
    validates :image1, presence: true
    validates :image2, presence: true
    validates :image3, presence: true
    validates :image4, presence: true
    validates :image5, presence: true
    validates :image6, presence: true
    validates :image7, presence: true
    validates :image8, presence: true
    validates :image9, presence: true
    validates :image10, presence: true
    #validate :acceptable_images

    #def acceptable_images
        #return unless images.attached?
      
        #images.each do |image|
          #if image.blob.byte_size > 1.megabyte
            #errors.add(:images, "file is too big")
          #end
    
          #acceptable_types = ["image/jpeg", "image/png"]
          #unless acceptable_types.include?(image.blob.content_type)
           # errors.add(:images, "must be a JPEG or PNG")
          #end
        #end
      #end

end