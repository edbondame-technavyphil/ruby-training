require_relative '../lib/user_profile'

RSpec.describe UserProfile do
  let(:user) { UserProfile.new("Alice", "Admin") }

  describe "#initialize" do
    it "assigns the username and role correctly" do
      expect(user.username).to eq("Alice")
      expect(user.role).to eq("Admin")
    end
  end

  describe "#greetings" do
    it "returns a formatted greeting string using the username and role" do
      expect(user.greetings).to eq("Hello, Alice! Your role is Admin.")
    end
  end
end