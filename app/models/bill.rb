# == Schema Information
#
# Table name: bills
#
#  id          :integer          not null, primary key
#  creator_id  :integer          not null
#  title       :string           not null
#  description :string
#  amount      :float            not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Bill < ApplicationRecord
  validates :lender_id, presence: true
  validates :lendee_id, presence: true
  validates :title, presence: true
  validates :amount, presence: true

  belongs_to :lender,
    primary_key: :id,
    foreign_key: :lender_id,
    class_name: :User

  belongs_to :lendee,
    primary_key: :id,
    foreign_key: :lendee_id,
    class_name: :User


end
