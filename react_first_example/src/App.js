import {useState} from "react"

function Header(props){
  console.log('props', props)
  return (       <header>
                    <h1>
                      <a href="/" onClick={e =>{
                        e.preventDefault();
                        props.onChangeMode()}}>{props.title}</a>
                    </h1>
                  </header>)
}
function Navigation(props){
  const lis = [];
  for(let i=0; i<props.topics.length; i++){
    let t = props.topics[i];
    lis.push(<li key={t.id}><a id={t.id} href={'/read/'+t.id} onClick={e=>{
      e.preventDefault();
      props.onChangeMode(e.target.id) }}>{t.body}</a></li>)
  }
  return (       <nav>
                    <ol>
                      {lis}
                    </ol>
                  </nav>)
}
function Article(props){
  return (      <article>
                  <h2>{props.title}</h2>
                  {props.body}
                </article>)
}


function App() {
  const [mode, modeSet] = useState("welcome");
  const topics = [{id:'1', title:'html', body:'html is'},
                  {id:'2', title:'css', body:'css is'},
                  {id:'3', title:'javascript', body:'javascript is'}]
  let content = null; 
  const [id, Setid] = useState(1);
  if(mode === 'welcome'){
    content = <Article title="Welcome" body="Hello, WEB"/>
  }else{
    let title, body = null;
    for(let i=0; i<topics.length; i++){
      if(topics[i].id == id){
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}/>
  }
  return (
    <div>
      
      <Header title="REACT" onChangeMode={()=>{
        modeSet("welcome");
      }}/>
      <Navigation topics={topics} onChangeMode={(id)=>{
        Setid(id);
        modeSet("read");
      }}/>
     {content}

      
    </div>
  );
}

export default App;


