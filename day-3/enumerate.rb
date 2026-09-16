# 1st iteration using for loop and push method

fruits = ['Tomato', 'Lettuce', 'Apple', 'Grapes', 'Oranges', 'Banana', 'Mango', 'Pineapple', 'Strawberry', 'Watermelon']
fruit_list = []

for fruit in fruits do
  if fruit != 'Lettuce'
    fruit_list.push(fruit)
  end
end

p fruit_list

# 2nd iteration using each method

fruits = ['Tomato', 'Lettuce', 'Apple', 'Grapes', 'Oranges', 'Banana', 'Mango', 'Pineapple', 'Strawberry', 'Watermelon']

fruits.each { |fruit| puts "I like to eat " + fruit }

# 3nd iteration using #map method

fruits = ['Tomato', 'Lettuce', 'Apple', 'Grapes', 'Oranges', 'Banana', 'Mango', 'Pineapple', 'Strawberry', 'Watermelon']

fruit_messages = fruits.map { |fruit| "I like to eat " + fruit }
p fruit_messages


# 4th iteration using #select method
fruits_color = {
  'Tomato' => 'red',
  'Lettuce' => 'green',
  'Apple' => 'red',
  'Grapes' => 'purple',
  'Oranges' => 'orange',
  'Banana' => 'yellow',
  'Mango' => 'orange',
  'Pineapple' => 'yellow',
  'Strawberry' => 'red',
  'Watermelon' => 'green'
}

fruits_color.select { |fruit, color| color == 'red' }.each { |fruit, color| puts "I like to eat " + fruit + " which is " + color }

# 5th iteration using #reduce method
numbers = [10, 20, 30, 40, 50]

total_sum = numbers.reduce(500) do |accumulator, number|
  accumulator + number
end

puts "Numbers: #{numbers.inspect}"
puts "Total Sum: #{total_sum}"


#6th iteration using .any? and .all? method

# Array of student test scores
scores = [85, 92, 78, 60, 88]

has_failing_student = scores.any? { |score| score < 60 }

all_students_passed = scores.all? { |score| score >= 60 }

puts "Scores: #{scores.inspect}"
puts "Did anyone fail? #{has_failing_student}"
puts "Did everyone pass? #{all_students_passed}"