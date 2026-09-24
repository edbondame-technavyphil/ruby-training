
require_string = File.expand_path('../lib/user_profile', __dir__)

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
