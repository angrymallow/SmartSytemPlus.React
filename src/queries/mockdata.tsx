export const activities = [
   {
      id: 0,
      name: 'Created Pineapple Uniform',
      time: '1 hour ago'
    },
    {
      id: 1,
      name: 'Updated IVSI Form',
      time: '5 minutes ago'
    },
    {
      id: 2,
      name: 'Added new Address Binding',
      time: '1 hour ago'
    },
    {
      id: 3,
      name: 'Application Started',
      time: '2 hours ago'
    }
]

export const announcements = [
  {
    id: 1,
    name: 'John Doe',
    avatar: 'lemon',
    activity: 'Created Address Binding for DAL'
  },
  {
    id: 2,
    name: 'Jane Doe',
    avatar: 'orange',
    activity: 'Uploaded new T- Kun data'
  },
  {
    id: 3,
    name: 'Jason Farmer',
    avatar: 'coconut',
    activity: 'Jason recently joined the team, hooray!'
  },    
  {
    id: 4,
    name: 'Promdi Boy',
    avatar: 'pear',
    activity: 'Created Strawberry'
  },    
]

export function getLogs() {
  return new Promise((resolve, reject) => 
    setTimeout( () => {
      resolve({status: 200, data: { activities, announcements }})
    },1500)
  )
}