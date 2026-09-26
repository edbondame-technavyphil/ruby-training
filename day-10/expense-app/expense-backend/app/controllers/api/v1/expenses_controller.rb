# app/controllers/api/v1/expenses_controller.rb
module Api
  module V1
    class ExpensesController < ApplicationController
      before_action :ensure_firestore_initialized

      # GET /api/v1/expenses
      def index
        expenses_ref = FIRESTORE.col("expenses")
        expenses = expenses_ref.get.map do |doc|
          doc.data.transform_keys(&:to_s).merge("id" => doc.document_id)
        end

        render json: expenses, status: :ok
      rescue StandardError => e
        render json: { error: e.message }, status: :internal_server_error
      end

      # POST /api/v1/expenses
      def create
        expense_data = {
          subject: params[:subject],
          employee: params[:employee],
          team: params[:team],
          category: params[:category],
          amount: params[:amount].to_f,
          date: params[:date] || Time.now.strftime("%Y-%m-%d"),
          status: params[:status] || "Pending",
          createdAt: Time.now.utc.iso8601
        }

        doc_ref = FIRESTORE.col("expenses").add(expense_data)
        created_doc = doc_ref.get

        render json: created_doc.data.transform_keys(&:to_s).merge("id" => doc_ref.document_id), status: :created
      rescue StandardError => e
        render json: { error: e.message }, status: :unprocessable_entity
      end

      # DELETE /api/v1/expenses/:id
      def destroy
        FIRESTORE.col("expenses").doc(params[:id]).delete
        head :no_content
      rescue StandardError => e
        render json: { error: e.message }, status: :unprocessable_entity
      end

      private

      def ensure_firestore_initialized
        unless defined?(FIRESTORE) && FIRESTORE.present?
          render json: { 
            error: "Firebase Firestore is not initialized. Please verify config/firebase-key.json and FIREBASE_PROJECT_ID in .env" 
          }, status: :service_unavailable
        end
      end
    end
  end
end