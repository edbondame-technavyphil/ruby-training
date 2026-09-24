# app/controllers/api/posts_controller.rb
module Api
  class PostsController < ApplicationController
    before_action :set_post, only: [:show, :update, :destroy]

    # GET /api/posts
    def index
      posts = Post.all
      render json: posts.as_json(only: [:id, :title, :author, :content, :created_at, :updated_at])
    end

    # GET /api/posts/:id
    def show
      render json: @post
    end

    # POST /api/posts
    def create
      post = Post.new(post_params)

      if post.save
        render json: post, status: :created
      else
        render json: { errors: post.errors.full_messages }, status: :unprocessable_entity
      end
    end

    # PATCH /api/posts/:id
    def update
      if @post.update(post_params)
        render json: @post
      else
        render json: { errors: @post.errors.full_messages }, status: :unprocessable_entity
      end
    end

    # DELETE /api/posts/:id
    def destroy
      @post.destroy
      head :no_content
    end

    private

    def set_post
      # Mongo ids are ObjectId strings, e.g. "65f2a1c9e4b0a1234abcd567".
      @post = Post.find(params[:id])
    rescue Mongoid::Errors::DocumentNotFound
      render json: { error: "Post not found" }, status: :not_found
    end

    def post_params
      params.require(:post).permit(:title, :author, :content)
    end
  end
end
