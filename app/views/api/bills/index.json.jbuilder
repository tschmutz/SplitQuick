@bills_owed.each do |bill|
  json.set! bill.id do
    json.id bill.id
    json.title bill.title
    json.amount bill.amount
    json.lender bill.lender_id
    json.lender_username bill.lender.username
    json.lendee bill.lendee_id
    json.lendee_username bill.lendee.username
    json.day bill.created_at.strftime("%d")
    json.month bill.created_at.strftime("%b")
    json.settled bill.settled
  end
end

@bills_lent.each do |bill|
  json.set! bill.id do
    json.id bill.id
    json.title bill.title
    json.amount bill.amount
    json.lender bill.lender_id
    json.lender_username bill.lender.username
    json.lendee bill.lendee_id
    json.lendee_username bill.lendee.username
    json.day bill.created_at.strftime("%d")
    json.month bill.created_at.strftime("%b")
    json.settled bill.settled
  end
end
