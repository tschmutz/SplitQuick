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

export const deleteBill = (billId) => (
  $.ajax({
    method: 'DELETE',
    url: `api/bills/${billId}`
  })
)
