export const fetchFriends = () => (
  $.ajax({
    method: 'GET',
    url: 'api/friends',
  })
)


export const createFriendship = (friend) => (
  $.ajax({
    method: 'POST',
    url: 'api/friends',
    data:  { friend }
  })
)
