class VillasController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    before_action :authorize
    skip_before_action :authorize, only: [:index, :show, :search]
  
    # GET /villas
    def index
      if params[:user_admin_id]
        user_admin = find_user_admin
        render json: user_admin.villas.order(id: :desc).includes(:location), status: :ok
      else
        render json: Villa.order(id: :desc).includes(:location), status: :ok
      end
    end
  
    # GET /villas/:id
    def show
      villa = find_villa
      render json: villa, include: :location, status: :ok
    end

     # GET /villas/search/:term
    def search
    term = params[:term].downcase
    villas = Villa.where("lower(name) LIKE ?", "%#{term}%")
    render json: villas, status: :ok
    end
    
    # POST /villas
    def create
      user_admin = find_user_admin
      if authorized_user?(user_admin)
        new_villa = user_admin.villas.create!(villa_params)
        render json: new_villa, status: :created
      else
        render json: { errors: user_admin.errors.full_messages }, status: :unprocessable_entity
      end
    end
  
    # PATCH /villas/:id
    def update
      villa = find_villa
      if authorized_user?(villa.user_admin)
        villa.update!(update_villa_params)
        render json: villa, status: :ok
      else
        render json: { errors: villa.errors.full_messages }, status: :unprocessable_entity
      end
    end
  
    # DELETE /villas/:id
    def destroy
      villa = find_villa
      if authorized_user?(villa.user_admin)
        villa.destroy
        head :no_content
      else
        render json: { error: "You are not logged in" }, status: :unauthorized
      end
    end
    
  
    private
  
    def villa_params
      params.permit(:name, :highlights, :services, :overview, :features, :amenities, :rate, :capacity, :bedroom, :bathroom, :user_admin_id, :location_id, :image1, :image2, :image3, :image4, :image5, :image6, :image7, :image8, :image9, :image10)
    end
  
    def find_villa
      Villa.find_by(id: params[:id]) || render_not_found_response
    end
    
    def update_villa_params
      params.require(:villa).permit(:name, :rate, :services)
    end
    
    def find_user_admin
      UserAdmin.find(session[:user_admin_id])
    end
  
    def render_not_found_response
      render json: { error: 'Villa Not Found' }, status: :not_found
    end
  
    def authorize
      render json: { errors: ['Not Authorized'] }, status: :unauthorized unless session.include?(:user_admin_id)
    end
  
    def authorized_user?(user_admin)
      user_admin && user_admin.id == session[:user_admin_id]
    end
  end
  