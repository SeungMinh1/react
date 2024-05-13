function FilterableProductTable(props){

    return (
        <div>
            <SearchBar/>
            <ProductTable products={props.products}/>
        
        
      </div>
    )
}

function SearchBar(){
    return (<form>
                <input type="text" placeholder="Search..."></input>
                <label><input type="checkbox"></input></label>
            </form>)

}

function ProductTable(props){
    const lis = [];
    let lastCategory = null;
    
    props.products.forEach(product => {
        console.log('111', product);
        if(product.category !== lastCategory){
            lis.push(<ProductCategoryRow category={product.category} />);
        }
        lis.push(<ProductRow key={product.name} product={product}></ProductRow>)
        lastCategory = product.category;
        })
        
        

    return ( <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
        
        {lis}
     
    </tbody>
  </table> )
    
}

function ProductCategoryRow({category}){
    return (<tr>
                <th colspan="2">{category}</th>
            </tr>)
}

function ProductRow({product}){
    console.log('pp', product)
    let name = product.stocked ? product.name : <span style={{ color: 'red' }}>{product.name}</span>;

    return ( <tr>
                <td>{name}</td>
                <td>{product.price}</td>
            </tr>)


}

export default FilterableProductTable;