export const fetchAllBills = () => (
  $.ajax({
    method: 'GET',
    url: 'api/bills'
  })
)
