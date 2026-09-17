class SecretNumber
  attr_reader :max_range

  def initialize(max_range = 100)
    @max_range = max_range
    @number = rand(1..@max_range)
  end

  def evaluate(guess)
    return :correct if guess == @number
    guess > @number ? :too_high : :too_low
  end
end

class Player
  attr_reader :name, :attempts

  def initialize(name)
    @name = name
    @attempts = 0
  end

  def get_guess(max_range)
    loop do
      print "Enter your guess (1-#{max_range}): "
      input = gets.chomp
      
      if input.match?(/^\d+$/) && input.to_i.between?(1, max_range)
        @attempts += 1
        return input.to_i
      end

      puts "Invalid input! Please enter a number between 1 and #{max_range}."
    end
  end
end

class Game
  MAX_ATTEMPTS = 7

  def initialize(max_range = 100)
    @secret_number = SecretNumber.new(max_range)
  end

  def start
    setup_player
    puts "\nWelcome, #{@player.name}! I'm thinking of a number between 1 and #{@secret_number.max_range}."
    puts "You have #{MAX_ATTEMPTS} attempts to guess it.\n\n"

    play_loop
  end

  private

  def setup_player
    print "Enter your player name: "
    name = gets.chomp
    name = "Player 1" if name.strip.empty?
    @player = Player.new(name)
  end

  def play_loop
    loop do
      remaining = MAX_ATTEMPTS - @player.attempts
      puts "Remaining attempts: #{remaining}"

      guess = @player.get_guess(@secret_number.max_range)
      result = @secret_number.evaluate(guess)

      if result == :correct
        puts "\n🎉 Congratulations, #{@player.name}! You guessed the number in #{@player.attempts} attempts!"
        break
      elsif @player.attempts >= MAX_ATTEMPTS
        puts "\n💥 Game Over! You ran out of attempts."
        break
      else
        puts result == :too_high ? "📈 Too high!\n\n" : "📉 Too low!\n\n"
      end
    end
  end
end

game = Game.new(100)
game.start