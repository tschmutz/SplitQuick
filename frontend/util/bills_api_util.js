export const fetchAllBills = () => (
  $.ajax({
    method: 'GET',
    url: 'api/bills'
  })
)

export const createBill = ( bill ) => (
  $.ajax({
    method: 'POST',
    url: 'api/bills',
    data: { bill }
  })
)
