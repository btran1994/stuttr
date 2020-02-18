Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show] do
      resources :photos, only: [:index]
    end
    resources :photos, only: [:create, :show, :index, :destroy] do
      resources :comments, only: [:create]
    end
    resources :comments, only: [:index, :show, :destroy, :update]
    resource :session, only: [:create, :destroy]
  end

  root "static_pages#root"
end
