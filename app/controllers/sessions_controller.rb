class SessionsController < ApplicationController
    skip_before_action :authorize, only: :create

    # POST action Create Session
    def create

        # Find the user admin based on the provided email
        user_admin = UserAdmin.find_by(email: params[:email])

        # If the user admin exists and the password is authenticated
        if user_admin&.authenticate(params[:password])
          session[:user_admin_id] = user_admin.id
          render json: user_admin, status: :ok
        else
        # Render error message if email or password is invalid
          render json: { error: ["Invalid Email or Password"] }, status: :unauthorized
        end
      end
      
      # DELETE action Logout User
      def destroy
        session.delete :user_admin_id
        head :no_content
      end
  end
end
