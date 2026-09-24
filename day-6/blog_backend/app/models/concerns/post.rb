# app/models/post.rb
#
# This is a Mongoid document, not an ActiveRecord model — the difference matters:
#  - `field` declares each attribute + its type (Mongo has no schema of its own,
#    so Mongoid enforces one at the application level).
#  - There's no migration file; MongoDB creates the "posts" collection on first insert.
#  - `_id` is a Mongo ObjectId (a 24-char hex string) instead of an auto-incrementing integer.

class Post
  include Mongoid::Document
  include Mongoid::Timestamps # adds and maintains created_at / updated_at

  field :title,   type: String
  field :author,  type: String
  field :content, type: String

  validates :title, presence: true, length: { maximum: 150 }
  validates :author, presence: true
  validates :content, presence: true

  # Newest posts first by default.
  default_scope -> { order(created_at: :desc) }
end
