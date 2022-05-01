
'use strict';

	
	
class App extends React.Component {

	// Create array of contacts in state  check
	
	
	  constructor(props) {
    super(props);
  
  //image  https://www.pexels.com/search/clothes/
    // This binding is necessary to make `this` work in the callback
  
  }

	state = {
		fashions: []
	}
	
	
	
	 
	
	
 
	componentDidMount() {
	fetch('https://mi-linux.wlv.ac.uk/~2115822/fashion_api/public/index.php/FashionC/index')
		.then(res => res.json())
		.then((data) => {
		  this.setState({ fashions: data.fashion}) 
		})
		.catch(console.log)
	}
	
	

	//design copied from https://www.codeply.com/p/0Co95QlZsH
	
	
	render() {
	console.log(this.state.fashions);
		return (
			
		<div>
<div class="container-fluid">
    <div class="row">
        <div class="col-3 px-1 bg-light position-fixed" id="sticky-sidebar">
            <div class="nav flex-column flex-nowrap vh-100 overflow-auto text-black p-2">
							<h3>Home</h3>

							<form>
							
							<div class="form-group">					
							<input type="text" class="form-control" id="exampleInputEmail1" name="product_name" placeholder="Enter email" required/>		
							</div>

							<div class="form-group">					
							<input type="text" class="form-control" id="exampleInputEmail1" name="image" placeholder="image" required/>		
							</div>		
							
							<div class="form-group">					
							<input type="text" class="form-control" id="exampleInputEmail1" name="price" placeholder="Enter price" required/>		
							</div>

							<div class="form-group">					
							<input type="text" class="form-control" id="exampleInputEmail1" name="contact" placeholder="Enter contact" required/>		
							</div>

							<div class="form-group">					
							<input type="text" class="form-control" id="exampleInputEmail1" name="available" placeholder="Enter available or not" required/>		
							</div>

							<div class="form-group">					
						   <textarea class="form-control" name="description" id="exampleFormControlTextarea1" placeholder="Enter description" rows="3"></textarea>	
							</div>							
			
							<button type="submit" class="btn btn-primary">Add</button>
							</form>	   
		   
            </div>
        </div>
        <div class="col-9 offset-3 row" id="main">
				<div class="col-md-12">
				<h2>Latest fashion </h2>
				</div>
			
				{this.state.fashions.map((item,index)=>
		

			<div class="col-md-3">
					<div class="card" >
					 <img class="card-img-top" src={item.image}  alt="Card image cap"/>
			
					<div class="card-body">
					<h5 class="card-title">{item.product_name} </h5>
						<h4 class="card-title">{item.contact} </h4>
					<p class="card-text">{item.description} </p>
					  	        <button type="button" className="btn btn-outline-success" id={item.id} 
					onClick={this.handleClickDelete}><a href="#">${item.price} --  Buy me  </a></button>
					
					
						        <button style={{float:'right'}} type="button" className="btn btn-outline-danger" id={item.id} 
					onClick={this.handleClickDelete}>Delete</button>
					</div>
					</div>
			</div>			
						)}
				
				

			
			
   
        </div>
    </div>
</div>
			</div>
		);
	}
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


