export const fetchFriends = () => (
  $.ajax({
    method: 'GET',
    url: 'api/friends',
  })
)


export const createFriendship = (data) => (
  $.ajax({
    method: 'POST',
    url: 'api/friends',
    data:  data 
  })
)
