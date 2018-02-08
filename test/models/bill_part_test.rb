# == Schema Information
#
# Table name: bill_parts
#
#  id         :integer          not null, primary key
#  bill_id    :integer          not null
#  user_id    :integer          not null
#  amount     :float            not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class BillPartTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
