class ActivitiesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    skip_before_action :authorize, only: [:index, :show]
  
    # GET /activities
    def index
      activities = Activity.includes(:locations).order(id: :asc)
      render json: activities, status: :ok
    end
    
  
    # GET /activities/:id
    def show
      activity = Activity.find(params[:id])
      render json: activity
    end
  
    # POST /activities
    def create
      activity = Activity.create!(activity_params)
      render json: activity, status: :created
    end
  
    private
  
    def activity_params
      params.permit(:name, :highlights, :image, :details, :categories)
    end
  
    def render_not_found_response
      render json: { error: "Activity not found" }, status: :not_found
    end
  end
  