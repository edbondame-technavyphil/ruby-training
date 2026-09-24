# config/initializers/cors.rb
# Without this, the browser blocks requests from the React dev server
# (http://localhost:5173) to the Rails API (http://localhost:3000).

Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins "http://localhost:5173" # Vite's default dev server address

    resource "*",
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end