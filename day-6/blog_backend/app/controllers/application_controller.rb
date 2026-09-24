# app/controllers/application_controller.rb
class ApplicationController < ActionController::API
  # ActionController::API (not ::Base) skips view rendering / cookies / sessions —
  # this app only ever returns JSON, so we don't need that overhead.
end