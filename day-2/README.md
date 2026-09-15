## Project Structure & Included Scripts

### 1. FizzBuzz & Conditionals (`fizz_buzz`)
* **File/Snippet:** `fizz_buzz`
* **Description:** A classic programming exercise that prompts the user for a number between 1 and 100, evaluates it using `if`, `elsif`, and `else` statements, and checks for divisibility factors (FizzBuzz for multiples of 15, Fizz for 3, Buzz for 5, or flags odd/non-matching numbers).

### 2. String Manipulation & Interpolation (`greet_user`)
* **File/Snippet:** `greet_user`
* **Description:** Collects user inputs for first and last names via `gets.chomp`, concatenates and downcases the full name, and outputs a personalized greeting using string interpolation.

### 3. Basic Method Definition & Parameters (`add_numbers`)
* **File/Snippet:** `add_numbers`
* **Description:** Demonstrates how to define reusable methods that accept arguments (`a`, `b`) to perform arithmetic operations and format the output neatly.

### 4. Interactive Loops (`magic_letter`)
* **File/Snippet:** `while` loop example
* **Description:** Implements interactive command-line loops (`while`) to repeatedly prompt a user until a specific condition or "magic letter" (`"q"`) is entered, utilizing `break` statements for flow control.

### 5. Advanced Basketball Analytics Suite (`parbs_calc`, `mvp_points`, `mvp_result`)
* **Description:** A multi-method modular application designed to calculate complex performance metrics for basketball players:
  * **`parbs_calc`**: Prompts for game stats (points, rebounds, assists, steals, blocks, and turnovers), calculates total PARDs, and explicitly returns the result.
  * **`mvp_points`**: Collects minutes played and won games, computes overall MVP point contributions, and returns the total.
  * **`mvp_result(parbs, mvp_points)`**: Combines the outputs of the previous two methods, applies float casting (`.to_f`) to prevent integer division truncation, rounds the score to 2 decimal places, and displays the final calculated MVP score.
