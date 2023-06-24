class VillasController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    before_action :authorize
    skip_before_action :authorize, only: [:index, :show]

    # GET /villas
    def index
        villas = Villa.all
        render json: villas, include: ['locations.activity_locations']
    end
    # GET /villas/:id
    def show
        villa = find_villa
        render json: villa, status: :ok
    end

    # POST /villas
    def create
        user_admin = find_user_admin
        if authorized_user?(user_admin)
        new_villa = user_admin.villa.create!(villa_params)
        render json: new_villa, status: :created
        else
            render json: { errors: user_admin.errors.full_messages }, status: :unprocessable_entity
        end
    end

    # PATCH /villas/:id
    def update
        villa = find_villa
        if authorized_user?(villa)
            villa.update!(villa_params)
            render json: villa, status: :ok
        else
            render json: { errors: villa.errors.full_messages }, status: :unprocessable_entity
        end
    end

    # DELETE /villas/:id
    def destroy
        villa = find_villa
        if authorized_user?(villa)
            villa.destroy
            head :no_content
        else
            render json: { error: "You are not authorized to delete this post" }, status: :unauthorized
        end
    end

    private

    def villa_params
        params.permit(:name, :highlights, :services, :overview, :features, :amenities, :rate, :capacity, :bedroom, :bathroom, :user_admin_id, :location_id, :image1, :image2, :image3, :image4, :image5, :image6, :image7, :image8, :image9, :image10)
    end

    def find_villa
        Villas.find(params[:id])
    end

    def find_user_admin
        UserAdmin.find(session[:user_admin_id])
    end

    def render_not_found_response
        render json: { error: 'Villa Not Found' }, status: :not_found
    end

    def authorize
        render json: { errors: ['Not Authorized'] }, status: :unauthorized unless session.include? :user_admin_id
    end

    def authorized_user?(villa)
        villa.user_admin_id == session[:user_admin_id]
    end

end
