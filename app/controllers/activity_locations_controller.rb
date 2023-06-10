class ActivityLocationsController < ApplicationController


    def index
        activity_locations = ActivityLocation.all
        render json: activity_locations
    end

    def show
        activity_location = ActivityLocation.find(params[:id])
        render json: activity_location
    end

end