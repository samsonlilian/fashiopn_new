
'use strict';

	  //image  https://www.pexels.com/search/clothes/
	
class App extends React.Component {

	// Create array of contacts in state  check
	
	
	  constructor(props) {
    super(props);
	   this.state = { 
	   fashions: [],
	   product_name:'',
	   price:'',
	   image:'',
	   description:'',
	   contact:''   
	   
	   };
  
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	this.handleDelete = this.handleDelete.bind(this);
	
		this.handleBuyMe = this.handleBuyMe.bind(this);
  

    // This binding is necessary to make `this` work in the callback
  
  }
  handleChange(event) {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  }

  handleSubmit(event) {

    event.preventDefault();

    const recipeUrl =
      "'https://mi-linux.wlv.ac.uk/~2115822/fashion_api/public/index.php/FashionC/saveFashionData";
  

    let formData = new FormData();
    formData.append("product_name", this.state.product_name);
    formData.append("price", this.state.price);
	   formData.append("image", this.state.image);
    formData.append("description", this.state.description);
	   formData.append("contact", this.state.contact);
   

    fetch('https://mi-linux.wlv.ac.uk/~2115822/fashion_api/public/index.php/FashionC/saveFashionData', {
      method: "POST",
      body: formData,
    }).then(res => res.json())
		.then((data) => {
	console.log(data)
		})
		.catch(console.log);
		
		
		fetch('https://mi-linux.wlv.ac.uk/~2115822/fashion_api/public/index.php/FashionC/index')
		.then(res => res.json())
		.then((data) => {
		  this.setState({ fashions: data.fashion}) 
		})
		.catch(console.log)

    
  }
  handleBuyMe(e){
	  let id=e.target.id;		
	const recipeUrl = 'https://mi-linux.wlv.ac.uk/~2115822/fashion_api/public/index.php/FashionC/buyme/'+ id;
    const requestMetadata = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    };
	
	 fetch(recipeUrl, requestMetadata)
        .then(res => res.json())
        .then(recipes => {
            console.log(recipes);
		
			
		  });
	  
  }
  
    handleDelete(e) {

	let id=e.target.id;		
	const recipeUrl = 'https://mi-linux.wlv.ac.uk/~2115822/fashion_api/public/index.php/FashionC/deleteFashionData/'+ id;
    const requestMetadata = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    };
    fetch(recipeUrl, requestMetadata)
        .then(res => res.json())
        .then(recipes => {
            console.log(recipes);
		
			
		  });
		 
		 
		 
		 fetch('https://mi-linux.wlv.ac.uk/~2115822/fashion_api/public/index.php/FashionC/index')
		.then(res => res.json())
		.then((data) => {
		  this.setState({ fashions: data.fashion}) 
		})
		.catch(console.log)
		 
    };
	
	
	
 
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
        <div class="col-3 col-sm-4 col-md-2 px-1 bg-light position-fixed" id="sticky-sidebar">
            <div class="nav flex-column flex-nowrap vh-100 overflow-auto text-black p-2">
							<h3>Home</h3>

							<form onSubmit={this.handleSubmit}>
							
							<div class="form-group">					
							<input type="text" class="form-control" value={this.state.product_name}  name="product_name"  onChange={this.handleChange} placeholder="Enter product name" required/>		
							</div>

							<div class="form-group">					
							<input type="text" class="form-control"  value={this.state.image}  name="image" onChange={this.handleChange} placeholder="image" required/>		
							</div>		
							
							<div class="form-group">					
							<input type="text" class="form-control" value={this.state.price}  name="price"  onChange={this.handleChange} placeholder="Enter price" required/>		
							</div>

							<div class="form-group">					
							<input type="text" class="form-control"  value={this.state.contact}  name="contact"  onChange={this.handleChange} placeholder="Enter contact" required/>		
							</div>

							

							<div class="form-group">					
						   <textarea class="form-control" value={this.state.description}  name="description" id="exampleFormControlTextarea1"  onChange={this.handleChange} placeholder="Enter description" rows="3"></textarea>	
							</div>							
			
							<button type="submit" class="btn btn-primary">Add product</button>
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
					onClick={this.handleBuyMe}>${item.price} --  Buy me </button>
					
					
						        <button style={{float:'right'}} type="button" className="btn btn-outline-danger" id={item.id} 
					onClick={this.handleDelete}>Delete</button>
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


