import FilterableProductTable from "./product"
function Header(props){
  console.log('props', props)
  return (       <header>
                    <h1>
                      <a href="/">{props.title}</a>
                    </h1>
                  </header>)
}
function Navigation(props){
  const lis = [];
  for(let i=0; i<props.topics.length; i++){
    let t = props.topics[i];
    lis.push(<li key={t.id}><a href={'/read/'+t.id}>{t.body}</a></li>)
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
function Gallery(props){
  const divs =[];
  /*
  let aa = props.images.map(p =>
    divs.push(<div className="col-3 m-2"><img src={p["image-url"]} alt={p.description} width="200px" height="200px"style={{display:"inline-block"}} ></img></div>)
  )*/
  for(let i=0; i<props.content.length; i++){
    let t = props.content[i];
    divs.push(<div className="col-3">
      <img src={t["image-url"]} alt={t.description} className="img-thumbnail" ></img>
      </div>)
  }
  return (
    <div className="container">
      <div className="row">
        {divs}
      </div>
    </div>
  )
}


function App() {
  const topics = [{id:'1', title:'html', body:'html is'},
                  {id:'2', title:'css', body:'css is'},
                  {id:'3', title:'javascript', body:'javascript is'}]
  const content =[
              {"description": "Lady with a Teddy",
                "image-url": "https://images.pexels.com/photos/3348748/pexels-photo-3348748.jpeg"
              },
              {
                "description": "Girl with camera",
                "image-url": "https://images.pexels.com/photos/3812944/pexels-photo-3812944.jpeg"
              },
              {
                "description": "Beautiful Girl with Glasses",
                "image-url": "https://images.pexels.com/photos/2100063/pexels-photo-2100063.jpeg"
              },
              {
                "description": "Redhead with frackles",
                "image-url": "https://images.pexels.com/photos/3228213/pexels-photo-3228213.jpeg"
              },
              {
                "description": "Girl in black dress",
                "image-url": "https://images.pexels.com/photos/1385472/pexels-photo-1385472.jpeg"
              },
              {
                "description": "Girl Sitting on Chair",
                "image-url": "https://images.pexels.com/photos/4725133/pexels-photo-4725133.jpeg"
              }
  ]
  const PRODUCTS = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
  ]
  return (
    <div>
      <FilterableProductTable products={PRODUCTS}></FilterableProductTable>
      <Header title="REACT"/>
      <Header title="WEB" />
      <Header title="HOME"/>
      <Navigation topics={topics} />
      <Article title="Welcome" body="Hello, WEB"/>
      <Article title="nononono" body="no, WEB"/>
      <Gallery content={content}/>
    </div>
  );
}

export default App;


