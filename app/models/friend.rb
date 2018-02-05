class Friend < ApplicationRecord
  validates :friendee_id, presence: true
  validates :friender_id, presence: true
  validates :status, presence: true


end
