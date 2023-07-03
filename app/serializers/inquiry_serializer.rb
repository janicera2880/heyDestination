class InquirySerializer < ActiveModel::Serializer
  attributes :id, :arrival, :departure, :guests, :email, :phone, :message, :full_name, :villa_id

  belongs_to :villa
  has_one :user_admin, through: :villa
  #belongs_to :location
  
end
