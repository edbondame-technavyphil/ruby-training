orders = [
  { id: 101, customer: "Linus", items: ["Laptop"], total: 1200, status: "completed" },
  { id: 102, customer: "Michael",   items: ["Mouse", "Keyboard"], total: 75, status: "completed" },
  { id: 103, customer: "Joshua",  items: ["Monitor"], total: 300, status: "cancelled" },
  { id: 104, customer: "Alex",  items: ["Headphones", "Microphone"], total: 250, status: "completed" },
  { id: 105, customer: "Sam",   items: ["Desk", "Chair"], total: 850, status: "pending" }
]

puts "=== 1. FILTERING (select & reject) ==="

completed_orders = orders.select { |order| order[:status] == "completed" }

active_orders = orders.reject { |order| order[:status] == "cancelled" }

puts "Completed Orders Count: #{completed_orders.length}"
puts "Active Orders Count:    #{active_orders.length}"

puts "\n=== 2. TRANSFORMING DATA (map) ==="

receipt_summaries = completed_orders.map do |order|
  "Order ##{order[:id]} for #{order[:customer]} -> $#{order[:total]}"
end

puts "Receipt Summaries:"
puts receipt_summaries

puts "\n=== 3. AGGREGATING (reduce) ==="

total_revenue = completed_orders.reduce(0) do |sum, order|
  sum + order[:total]
end

puts "Total Revenue from Completed Orders: $#{total_revenue}"

puts "\n=== 4. BOOLEAN CHECKS (any? & all?) ==="

has_pending_orders = orders.any? { |order| order[:status] == "pending" }

high_value_completed = completed_orders.all? { |order| order[:total] > 50 }

puts "Are there any pending orders?          #{has_pending_orders}"
puts "Are all completed orders over $50?     #{high_value_completed}"