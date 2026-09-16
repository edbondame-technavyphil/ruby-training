## Iteration Techniques

### 1. `for` Loop with Array `.push`
Iterates over an array using traditional `for ... in` syntax and selectively appends elements matching a condition into a new array.

```ruby
fruits = ['Tomato', 'Lettuce', 'Apple', 'Grapes', 'Oranges', 'Banana', 'Mango', 'Pineapple', 'Strawberry', 'Watermelon']
fruit_list = []

for fruit in fruits do
  if fruit != 'Lettuce'
    fruit_list.push(fruit)
  end
end

p fruit_list
# Output: ["Tomato", "Apple", "Grapes", "Oranges", "Banana", "Mango", "Pineapple", "Strawberry", "Watermelon"]
```

---

### 2. Iteration with `.each`
Executes a block for each element in the collection without modifying or building a new structure.

```ruby
fruits = ['Tomato', 'Lettuce', 'Apple', 'Grapes', 'Oranges', 'Banana', 'Mango', 'Pineapple', 'Strawberry', 'Watermelon']

fruits.each { |fruit| puts "I like to eat " + fruit }
```

---

### 3. Transformation with `.map`
Transforms each string in the collection and returns a brand-new array containing the transformed values.

```ruby
fruits = ['Tomato', 'Lettuce', 'Apple', 'Grapes', 'Oranges', 'Banana', 'Mango', 'Pineapple', 'Strawberry', 'Watermelon']

fruit_messages = fruits.map { |fruit| "I like to eat " + fruit }
p fruit_messages
# Output: ["I like to eat Tomato", "I like to eat Lettuce", ...]
```

---

### 4. Hash Selection with `.select`
Filters a key-value hash to keep only entries matching a condition (`color == 'red'`), chaining `.each` to process the resulting filtered hash.

```ruby
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

fruits_color.select { |fruit, color| color == 'red' }.each do |fruit, color|
  puts "I like to eat " + fruit + " which is " + color
end
```

---

### 5. Accumulation with `.reduce`
Folds an array down to a single value by executing a block on an accumulator and each element. Note that an initial seed value of `500` is provided.

```ruby
numbers = [10, 20, 30, 40, 50]

total_sum = numbers.reduce(500) do |accumulator, number|
  accumulator + number
end

puts "Numbers: #{numbers.inspect}"
puts "Total Sum: #{total_sum}"
# Output Total Sum: 650 (500 initial + 150 sum of numbers)
```

---

### 6. Predicate Testing with `.any?` and `.all?`
Evaluates conditions across elements returning boolean answers:
- **`.any?`**: Returns `true` if at least one item satisfies the condition.
- **`.all?`**: Returns `true` only if every item satisfies the condition.

```ruby
scores = [85, 92, 78, 60, 88]

has_failing_student = scores.any? { |score| score < 60 }
all_students_passed = scores.all? { |score| score >= 60 }

puts "Scores: #{scores.inspect}"
puts "Did anyone fail? #{has_failing_student}" # Output: false
puts "Did everyone pass? #{all_students_passed}" # Output: true
```

---

## How to Run

1. Save the iteration script to a file named `enumerate.rb`.
2. Execute the file via the terminal:

```bash
ruby enumerate.rb
```

README.md
