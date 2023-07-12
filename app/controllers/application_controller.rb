class ApplicationController < ActionController::API
  # Line 1 is designed for building JSON APIs without the need for cookies or session management.
  #protect_from_forgery with: :null_session

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  rescue_from ActiveRecord::RecordNotFound, with: :render_record_not_found_response 

  # Ensuring that users are authorized to perform the actions they request, prevent unauthorized access.
  before_action :authorize

  private

  def authorize
    @current_user = UserAdmin.find_by(id: session[:user_admin_id])

    render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user
  end

  def render_unprocessable_entity_response(exception)
    render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
  end

  def render_record_not_found_response(invalid)
    render json: { errors: invalid }, status: :not_found 
  end

end
