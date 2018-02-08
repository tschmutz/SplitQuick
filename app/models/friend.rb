# == Schema Information
#
# Table name: friends
#
#  id          :integer          not null, primary key
#  friender_id :integer          not null
#  friendee_id :integer          not null
#  status      :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Friend < ApplicationRecord
  validates :friendee_id, presence: true
  validates :friender_id, presence: true
  validates :status, presence: true

  belongs_to :friender,
    primary_key: :id,
    foreign_key: :friender_id,
    class_name: :User

  belongs_to :friendee,
    primary_key: :id,
    foreign_key: :friendee_id,
    class_name: :User
end
