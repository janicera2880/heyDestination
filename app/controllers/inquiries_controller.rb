class InquiriesController < ApplicationController
  skip_before_action :authorize, only: :create
  # Create a new instance of Inquiry using the inquiry_params method
  def create
    inquiry = Inquiry.new(inquiry_params)

    if inquiry.save
      render json: inquiry, status: :created
    else
      render json: { errors: inquiry.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  # Retrieve and require the :inquiry parameter from the params object, and permit specific attributes.
  def inquiry_params
    params.require(:inquiry).permit(:arrival, :departure, :guests, :full_name, :email, :phone, :message, :villa_id, :location_id)
  end
  
end


