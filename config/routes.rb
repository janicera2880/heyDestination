Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
 #get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

 resources :user_admins, only: [:index, :show] do
  resources :villas, only: [:index, :update, :destroy]
  resources :activities, only: [:create, :destroy]
  resources :locations, only: [:create, :destroy]
  resources :inquiries, only: [:index, :show]
end


  resources :locations, only: [:index, :show, :create] do
    resources :villas
    resources :activities
  end
  
  resources :villas
  resources :activities, only: [:index, :show, :create]
  resource :activity_locations, only: [:index, :show]
  resources :inquiries, only: [:create]
  
  post "/signup", to: "user_admins#create" # Route to handle the signup request specifically for admin users.
  post "/login", to: "sessions#create" # Route to handle admin user login/authentication.
  get "/admin", to: "user_admins#show" # Route to retrieve the current admin user's information.
  delete "/logout", to: "sessions#destroy" # This route is used to logout user from session.
end