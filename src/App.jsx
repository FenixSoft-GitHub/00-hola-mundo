import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        userName: 'midudev',
        name: 'Miguel Angel Duran',
        isFollowing: true
    },
    {
        userName: 'carlosazaustre',
        name: 'Carlo𝕏 Azaustre',
        isFollowing: false
    },
    {
        userName:'OrtizSis',
        name: 'Alberto Ortiz',
        isFollowing: true
    },
    {
        userName:'elonmusk', 
        name: 'Elon Musk',
        isFollowing: false
    },
    {
        userName:'platzi', 
        name: 'Platzi',
        isFollowing: true
    }

]

function App() {
  return (
    <>
        <section className='App'>
            {
                users.map(({userName, name, isFollowing}) => (
                    
                        <TwitterFollowCard 
                            key={userName}
                            userName={userName}
                            name={name}
                            initialIsFollowing={isFollowing}>
                        </TwitterFollowCard>
                    
                ))
            }
        </section>
        
    </>
  )
}
// function App() {
//   return (
//     <>
//         <div className='App'>
//             <TwitterFollowCard userName='midudev' name='Miguel Angel Duran'/>
//             <TwitterFollowCard userName='carlosazaustre' name='Carlo𝕏 Azaustre'/>
//             <TwitterFollowCard userName='OrtizSis' name='Alberto Ortiz' initialIsFollowing={true}/>
//             <TwitterFollowCard userName='elonmusk' name='Elon Musk'/>
//         </div>
        
//     </>
//   )
// }

export { App }
