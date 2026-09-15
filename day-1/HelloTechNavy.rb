puts 'Hello, Tech Navy Ed!'

# second iteration

coder_name = "Ed"
puts "Hello, #{coder_name}! Welcome to Tech Navy!"


# third iteration with class

class HelloTechNavy
  def initialize(coder)
    @coder=coder.capitalize
  end
  def helloTechNavy
    puts "Hello, #{@coder}!"
  end
end

greet=HelloTechNavy.new('Ed, Welcome to Tech Navy!')
greet.helloTechNavy


class Aso
  def initialize(pangalan, lahi)
    @pangalan = pangalan
    @lahi = lahi
  end

  def tahol
    puts "#{@pangalan} ay tumatahol: Woof! Woof!"
  end
end

# Paglikha ng bagong object mula sa klase
aking_aso = Aso.new("Bantay", "Asong Pinoy")

# Paggamit sa method ng class
aking_aso.tahol


class Aso
  def initialize(pangalan, lahi)
    @pangalan = pangalan
    @lahi = lahi
  end

  def pakilala
    puts "Si #{@pangalan} ay isang #{@lahi}!"
  end

  def tahol
    puts "#{@pangalan} ay tumatahol: Woof! Woof!"
  end
end

aking_aso = Aso.new("Bantay", "Asong Pinoy")
aking_aso.pakilala # Dito ginamit ang @lahi
aking_aso.tahol

