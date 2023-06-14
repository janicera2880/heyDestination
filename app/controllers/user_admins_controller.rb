class UserAdminsController < ApplicationController
  before_action :authorize, except: [:create]
  #skip_before_action :authorize, only: [:create, :index], raise: false

  # GET /user_admins
  def index
    user_admins = UserAdmin.includes(inquiries: :villa)
    render json: user_admins, include: { inquiries: { include: :villa } }
  end

  # GET /user_admins/:id
  def show
    user_admin = find_user_admin
    if user_admin
      render json: user_admin, status: :ok
    else
      render json: { error: "Admin Not Found" }, status: :not_found
    end
  end

  # POST /user_admins
  def create
    user_admin = UserAdmin.create!(user_admin_params)
    session[:user_admin_id] = user_admin.id
    if user_admin.valid?
      render json: user_admin, status: :created
    else
      render json: { errors: user_admin.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  # Strong parameters for creating a new user admin
  def user_admin_params
    params.permit(:first_name, :last_name, :password, :password_confirmation, :email, :phone, :admin, :profile_pic)
  end

  # Find a user admin by ID
  def find_user_admin
    UserAdmin.find_by(params[:id])
  end

  # Check if the user is authorized
  def authorize
    unless session[:user_admin_id]
      render json: { error: 'Unauthorized' }, status: :unauthorized
    end
  end
end