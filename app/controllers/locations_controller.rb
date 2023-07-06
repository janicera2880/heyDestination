class LocationsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    skip_before_action :authorize, only: [:index, :show]

    # Fetch all locations from the database and order them by ID.
    def index
        locations = Location.all.order(id: :desc)
        render json: locations, include: ['villas', 'inquiries', 'activity_locations', 'activities'], status: :ok
    end

    # Find the specific location based on the ID provided in the request parameters.
    def show
        location = find_location
        render json: location
    end

    # Create a new location using the provided location parameters.
    def create
        location = Location.create!(location_params)
        render json: location, status: :created
    end

    private

    # Permit only specific parameters for security.
    def location_params
        params.permit(:city, :country, :image, :description)
    end

    # Find a location based on the ID provided in the request parameters.
    def find_location
        Location.find(params[:id])
    end

    # Render a JSON response with an error message when a location is not found.
    def render_not_found_response
        render json: { error: 'Location Not Found' }, status: :not_found
    end
end
