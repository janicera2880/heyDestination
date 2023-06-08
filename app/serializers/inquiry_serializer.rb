class InquirySerializer < ActiveModel::Serializer
  attributes :id, :arrival, :departure, :guests, :email, :phone, :message, :full_name

  belongs_to :villa
  has_one :user, through: :villa
  belongs_to :location
  
end
