# first method and if statement

puts 'Hello, Tech Navy Ed!'

def fizz_buzz
  puts "Input number between 1 and 100:"
  number = gets.chomp.to_i

  if number % 15 == 0
    puts "FizzBuzz"
  elsif number % 3 == 0
    puts "Fizz"
  elsif number % 5 == 0
    puts "Buzz"
  else
    puts "That is an odd number."
  end
end

fizz_buzz 


# refactoring the code to use variables

def greet_user
  puts "Input your first name:"
  first_name = gets.chomp
  puts "Input your last name:"
  last_name = gets.chomp
  full_name = first_name + " " + last_name
  full_name = full_name.downcase


  puts "Hello, #{full_name}! Welcome to Tech Navy!"
end

greet_user

# addition

x = 5
y = 10

def add_numbers(a, b)
  sum = a + b
  puts "The sum of #{a} and #{b} is: #{sum}"
end

add_numbers(x, y)

# while loop examples

puts "What is the magic letter?"
magic_letter = gets.chomp

while magic_letter != "q"
  puts "That's not the magic letter!"
  puts "What is the magic letter?"
  magic_letter = gets.chomp
  break if magic_letter == "q"
end
