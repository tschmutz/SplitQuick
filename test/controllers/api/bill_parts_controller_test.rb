require 'test_helper'

class Api::BillPartsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_bill_parts_create_url
    assert_response :success
  end

  test "should get update" do
    get api_bill_parts_update_url
    assert_response :success
  end

  test "should get show" do
    get api_bill_parts_show_url
    assert_response :success
  end

  test "should get index" do
    get api_bill_parts_index_url
    assert_response :success
  end

  test "should get destroy" do
    get api_bill_parts_destroy_url
    assert_response :success
  end

end
