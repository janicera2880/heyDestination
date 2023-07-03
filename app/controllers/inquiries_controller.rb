class InquiriesController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  skip_before_action :authorize, only: [:create]
  
  # Create a new instance of Inquiry using the inquiry_params method

  def index
    inquiries = Inquiry.all
    render json: inquiries
  end

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
    params.require(:inquiry).permit(:arrival, :departure, :guests, :full_name, :email, :phone, :message, :villa_id)
  end

  def render_not_found_response
    render json: { error: 'Inquiry Not Found' }, status: :not_found
  end
  
end


