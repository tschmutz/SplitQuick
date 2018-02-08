@bills_owed.each do |bill|
  json.set! bill.id do
    json.title bill.title
    json.amount bill.amount
    json.lender bill.lender_id
    json.lendee bill.lendee_id
    json.day bill.created_at.strftime("%d")
    json.month bill.created_at.strftime("%b")
    json.settled bill.settled
  end
end

@bills_lent.each do |bill|
  json.set! bill.id do
    json.title bill.title
    json.amount bill.amount
    json.lender bill.lender_id
    json.lendee bill.lendee_id
    json.day bill.created_at.strftime("%d")
    json.month bill.created_at.strftime("%b")
    json.settled bill.settled
  end
end
