Rails.application.routes.draw do
  root "posts#index"

  resources :posts, only: [:index, :show, :new, :create] do
    resources :comments, only: [:create]
  end
end