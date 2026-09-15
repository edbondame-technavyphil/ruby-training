def parbs_calc
  puts "Input number of points:"
  points = gets.chomp.to_i
  puts "Total Points: #{points}"

  puts "Input number of rebounds:"
  rebounds = gets.chomp.to_i
  puts "Total Rebounds: #{rebounds}"

  puts "Input number of assists:"
  assists = gets.chomp.to_i
  puts "Total Assists: #{assists}"

  puts "Input number of steals:"
  steals = gets.chomp.to_i
  puts "Total Steals: #{steals}"

  puts "Input number of blocks:"
  blocks = gets.chomp.to_i
  puts "Total Blocks: #{blocks}"

  puts "Input number of turnovers:"
  turnovers = gets.chomp.to_i
  puts "Total Turnovers: #{turnovers}"

  parbs = points + rebounds + assists + steals + blocks - turnovers
  puts "The PARDs for the player is: #{parbs}"
  
  parbs
end

def mvp_points
  puts "Input number of minutes played:"
  minutes_played = gets.chomp.to_i
  puts "Total Minutes Played: #{minutes_played}"
  
  puts "Input number of won games:"
  won_games = gets.chomp.to_i
  puts "Total Won Games: #{won_games}"

  mvp_pts = minutes_played + won_games
  puts "The MVP points for the player is: #{mvp_pts}"
  
  mvp_pts
end

def mvp_result(parbs, mvp_points)
  # Use .to_f to prevent integer division truncation
  total_mvp_score = (parbs.to_f / mvp_points) * 100
  puts "The total MVP score for the player is: #{total_mvp_score.round(2)}"
end

calculated_parbs = parbs_calc
calculated_mvp_points = mvp_points

mvp_result(calculated_parbs, calculated_mvp_points)