import Single from "../../components/single/Single"
import { singleUser } from "../../data"
import "./user.scss"
const Product = () => {
  return (
    <div className="product">  
      <Single {...singleUser}/>
    </div>
  )
}

export default Product
