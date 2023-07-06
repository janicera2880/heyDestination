require 'net/http'

class Villa < ApplicationRecord

    # Associations
    belongs_to :user_admin
    belongs_to :location
    has_many :inquiries
   

    # Validations
    # Ensures length is correct and presence of attributes
    # Integers have a non-negative numerical value
    validates :name, presence: true
    validates :highlights, :amenities, presence: true
    validates :features, :services, presence: true, length: { minimum: 50 }
    validates :overview, presence: true, length: { minimum: 100 }
    validates :rate, :capacity, :bedroom, :bathroom, presence: true, numericality: { greater_than_or_equal_to: 0 }
    validate :validate_images

  def validate_images
    (1..10).each do |index|
      image = send(:"image#{index}")
      errors.add(:"image#{index}", 'must be present') if image.blank?

      if image.present?
        unless valid_image_url?(image)
          errors.add(:"image#{index}", 'is not a valid image URL')
        end

        if broken_image_link?(image)
          errors.add(:"image#{index}", 'is a broken image link')
        end
      end
    end
  end

  private

  def valid_image_url?(url)
    uri = URI.parse(url)
    uri.kind_of?(URI::HTTP) || uri.kind_of?(URI::HTTPS)
  end

  def broken_image_link?(url)
    uri = URI.parse(url)
    response = Net::HTTP.get_response(uri)
    response.code.to_i != 200
  rescue StandardError
    true # Consider any exception as a broken link
  end
end