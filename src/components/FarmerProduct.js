import {useHistory} from "react-router-dom"
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function Product(){
    const history = useHistory();
    let user = sessionStorage.getItem('authenticatedUser');
    const [product,setProduct] = useState({ farmer:{user_name: user}, crop: '' , quantity:'' ,expected_Price:''});

    
    var handleChange = (e) => {
        e.preventDefault();
        var name = e.target.name;
        var value = e.target.value;
        setProduct({ ...product, [name]: value, });
    };

    function addProduct(e){
        var name = e.target.name;
        var value = e.target.value;

        setProduct({ ...product, [name]: value, })
    }

    function cancelProduct(){
        setProduct( { farmer:{user_name: user}, crop: '' , quantity:'' ,expected_Price:''}) ;
        }
    
    function confirmProduct(){

        axios
        .post("http://localhost:9099/farmer/add-product", {
            farmer:{user_name: user},
             crop: product.crop , 
             quantity: product.quantity ,
             expected_Price: product.expected_Price
        })
        .then((response) => {
          console.log(response.data);
          alert("Product added successfully");
        })
        .catch((error) => {
       console.log(error.response);
         });

        }
    console.log(product);
    return(
        <div>
            
            <div className="d-flex justify-content-end">
                <button type="button" className="btn btn-danger mt-3" ><Link className="dropdown-item" to="/farmer/custom-product">Add Your Product</Link></button>
            </div>


            <div className="d-flex justify-content-end">
                <button type="button" className="btn btn-danger mt-3" onClick={history.goBack}>Back</button>
            </div>

            <div className=" container  d-flex flex-direction: column  justify-content-evenly ">
            <div class="row">

            <div className="col-3 card p-4 mt-4 mb-4 me-4 ms-4" style={{width: "18rem"}}>
            <img src="https://5.imimg.com/data5/PW/AC/MY-38700875/m-p-origin-sarbati-wheat-500x500.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Wheat (गेहूं)</h5>
                <p className="card-text">गेहूँ मध्य पूर्व के लेवांत क्षेत्र से आई एक घास है, जिसकी खेती दुनिया भर में की जाती है।</p>
                
                <button type="button" className="btn btn-danger mt-3"  data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat"  name="crop" value="wheat" onClick={addProduct}>Add Product</button>
            </div>
            </div>

            <div className="col-3 card p-4 mt-4 mb-4 me-4 ms-4" style={{width: "18rem"}}>
            <img src="https://www.apnikheti.com/upload/crops/4929idea993089idea99cottonplant1.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Cotton (कपास)</h5>
                <p className="card-text">भारत में कपास की खेती लगभग 6 मिलियन किसानों को प्रत्यक्ष तौर पर आजीविका प्रदान करता है और 40 से 50 लाख लोग इसके व्यापार या प्रसंस्करण में कार्यरत है। कई लोगो के लिए कपास कमाई का साधन भी है।</p>
                <button type="button" className="btn btn-danger mt-3"  data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat"  name="crop" value="cotton" onClick={addProduct}>Add Product</button>
            </div>
            </div>

            <div className="col-3 card p-4 mt-4 mb-4 me-4 ms-4" style={{width: "18rem"}}>
            <img src="https://www.agrifarming.in/wp-content/uploads/2015/05/Bajra-seed.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
            </div>

            <div className="col-3 card p-4 mt-4 mb-4 me-4 ms-4" style={{width: "18rem"}}>
            <img src="https://www.grainmart.in/news/wp-content/uploads/2019/07/Jowar.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
            </div>

            <div className="col-3 card p-4 mt-4 mb-4 me-4 ms-4" style={{width: "18rem"}}>
            <img src="https://www.world-grain.com/ext/resources/Article-Images/2020/12/GMR_Rice_AdobeStock_64819529_E_Nov.jpg?t=1609338918&width=1080" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
            </div>

            <div className="col-3 card p-4 mt-4 mb-4 me-4 ms-4" style={{width: "18rem"}}>
            <img src="https://gardenerspath.com/wp-content/uploads/2019/09/How-to-Plant-and-Grow-Cabbage-Cover.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
            </div>

            </div>
            </div>

            
            
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Required Input</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                        <div class="mb-3">
                            <label for="recipient-name" class="col-form-label">Quantity You Have:</label>
                            <input type="number" name="quantity" class="form-control" id="recipient-name" value={product.quantity}
                            onChange={handleChange}/>
                        </div>
                        <div class="mb-3">
                            <label for="recipient-name" class="col-form-label">Expected Price:</label>
                            <input type="number" name="expected_Price" class="form-control" id="recipient-name" value={product.expected_price}
                                                  onChange={handleChange}/>
                        </div>
                        
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={cancelProduct}>Cancel</button>
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={confirmProduct}>Confirm</button>
                    </div>
                    </div>
                </div>
                </div>

        </div>
    )
}

export default Product;