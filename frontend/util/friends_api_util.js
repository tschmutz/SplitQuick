export const fetchFriends = () => (
  $.ajax({
    method: 'GET',
    url: 'api/friends',
  })
)
