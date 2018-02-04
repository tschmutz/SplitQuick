Rails.application.routes.draw do

  namespace :api do
    get 'friends/create'
  end

  namespace :api do
    get 'friends/index'
  end

  namespace :api do
    get 'friends/destroy'
  end

  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:new, :create, :destroy]
    resources :users
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
