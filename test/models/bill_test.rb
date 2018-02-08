# == Schema Information
#
# Table name: bills
#
#  id          :integer          not null, primary key
#  lender_id   :integer          not null
#  lendee_id   :integer          not null
#  title       :string           not null
#  description :string
#  amount      :float            not null
#  settled     :boolean          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class BillTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
