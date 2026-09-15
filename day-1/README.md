# day-1
Created a simple script made in Ruby using puts

Used the ff to create multiple iterations of put:

This program is written in Ruby and uses Object-Oriented Programming (OOP) to create a customized greeting.

Here is a detailed explanation of each part:

class HelloTechNavy — This creates a new class or "blueprint" named HelloTechNavy. All related data and behaviors are encapsulated inside it.

def initialize(coder) — This is the constructor method that automatically runs whenever you create a new object from this class. It accepts an argument or value called coder.

@coder = coder.capitalize — @coder is an instance variable (accessible throughout the class). It is assigned the value coming from coder, but applied with the .capitalize method—which makes the first letter of the entire string uppercase and turns the rest lowercase.

def helloTechNavy — A custom method or function inside the class that prints a message when called.

puts "Hello, #{@coder}!" — This displays the text on the screen along with the value of the @coder variable.

greet = HelloTechNavy.new('Ed, welcome to Tech Navy!') — This creates the actual object (called instantiation) and passes the string 'Ed, welcome to Tech Navy!' into initialize.

greet.helloTechNavy — This calls the method to output the result in the terminal.
