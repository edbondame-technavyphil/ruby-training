# config/initializers/firebase.rb
require "google/cloud/firestore"

# Explicitly load .env in development
Dotenv::Rails.load if defined?(Dotenv::Rails)

project_id = ENV["FIREBASE_PROJECT_ID"]
key_path   = Rails.root.join("config", "firebase-key.json")

puts "\n" + "=" * 40
puts "🔥 FIREBASE INIT DEBUG:"
puts "1. FIREBASE_PROJECT_ID: #{project_id.inspect}"
puts "2. Key File Location:  #{key_path}"
puts "3. Key File Exists?:   #{File.exist?(key_path)}"
puts "=" * 40 + "\n"

if project_id.present? && File.exist?(key_path)
  FIRESTORE = Google::Cloud::Firestore.new(
    project_id: project_id,
    credentials: key_path.to_s
  )
  puts "✅ Firebase Firestore connected successfully!\n\n"
else
  FIRESTORE = nil
  puts "❌ Firebase failed to connect! Check project ID or JSON file location.\n\n"
end