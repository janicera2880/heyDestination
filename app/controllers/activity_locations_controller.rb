class ActivityLocationsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    skip_before_action :authorize, only: [:index, :show]


    def index
        activity_locations = ActivityLocation.all
        render json: activity_locations
    end

    def show
        activity_location = ActivityLocation.find(params[:id])  
        render json: activity_location
    end

    private
    def render_not_found_response
        render json: { error: 'Activity Location Not Found' }, status: :not_found
    end

end