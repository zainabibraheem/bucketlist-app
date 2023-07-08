import React, {useState} from 'react'

const Menu = () => {

  const bucketListIdeas = [
    "Jet Skiing",
   "Go on a blind date",
   "Ride on a hot air ballon", 
   "Swim with dolphins", 
   "Swim with Sharks", 
   "Get a tattoo", 
   "Scuba Diving", 
   "Jump off a cliff", 
   "Sky-diving", 
   "Mountain Climbing", 
   "Surfing", 
   "Parasailing", 
   "Camp in the desert", ]

 const [bucketlist, setBucketList] = useState(bucketListIdeas)
 const [personalBucketList, setPersonalBucketList] = useState([])

function addPersonalBucketList (idea){
  console.log('yes')
   setPersonalBucketList([...personalBucketList, idea ])
   console.log(personalBucketList)

   
}

//const myPersonalBucketList = personalBucketList.map((idea) => {return <li key={idea}>{idea}</li>})

const bucketListItems = bucketlist.map((idea) => {return <li className='' key= {idea}>{idea} 
<span><button className='button' onClick = {()=>addPersonalBucketList(idea)}>Add</button></span> </li>
 
})


  return (
    <div className='menu-ideas'>
      <div className='general-bucketlist'>
        <h2>Bucketlist Ideas</h2>
        <ul className='main-list'>
        {bucketListItems}
        </ul>
          
      </div>

      
      <div className='personal-bucketlist'>
        <h2>My Bucketlist</h2>
        <ul className='main-list'>
          {personalBucketList.map((idea) => {return <li key={idea}>{idea}</li>})
}
        </ul>
          
      </div>
    </div>
  )
}

export default Menu
