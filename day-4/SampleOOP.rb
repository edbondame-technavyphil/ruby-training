class UserProfile
    attr_accessor :username, :role

    def initialize(username, role)
      @username = username
      @role = role
    end

    def greetings
      "Hello, #{@username}! Your role is #{@role}."
    end
end

username_list = []

3.times do |i|
  puts "\n--- User Profile ##{i + 1} ---"
  print "Username: "
  input_username = gets.chomp
  
  print "Role: "
  input_role = gets.chomp

  username_list << UserProfile.new(input_username, input_role)
end

puts "\n=== USER PROFILES ==="
username_list.each do |user|
  puts user.greetings
end 