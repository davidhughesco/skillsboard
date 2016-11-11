Rails.application.routes.draw do

  resources :courses
  root 'pages#home'

end
