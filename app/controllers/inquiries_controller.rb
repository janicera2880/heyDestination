class InquiriesController < ApplicationController

    def create
        inquiry = Inquiry.new(inquiry_params)
        if inquiry.save
          render json: inquiry, status: :created
        else
          render json: { errors: inquiry.errors.full_messages }, status: :unprocessable_entity
        end
    end
    
      private
    
      def inquiry_params
        params.require(:inquiry).permit(:arrival, :departure, :guests, :full_name, :email, :phone, :message)
      end
end
