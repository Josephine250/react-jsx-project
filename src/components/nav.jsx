export default function Nav(){
        return(
                <header className="border-b-2">
                        <h2> react jsx</h2>
                        <nav>
                                <ul>
                                        <navItem.map(item,index) => (
                                                <li key ={index}>{item}</li>
                                                )
                                </ul>
                                </nav> 
                </header>      )
}