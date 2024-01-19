import Link from "next/link";
import Image from "next/image";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const ProductCard = ({ data }) => {
  let { image, title, description, price } = data;
  if (description.length > 120) {
    description = description.substring(0, 100).concat('...')
  }
   return (
    <div  className="group P-4 flex flex-col justify-evenly">
      <div class="img img-contain flex justify-center items-center">
        <Image
          src={image}
          alt={title}
          width={245}
          height={245}
          className="object-cover object-center group-hover:opacity-75"
          title="yash"
        />
      </div>
      <h2 className="mt-4 text-lg font-bold text-gray-700">{title}</h2>
      <h4 className="mt-4 text-sm text-gray-700">{description}</h4>
      <div class="flex flex-col md:flex-row justify-between items-center text-gray-900">
        <p class="font-bold text-xl">{price} $</p>
        <button
          class="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">Add
          to cart</button>
      </div>
      <ToastContainer />
    </div>
  )
}
export default ProductCard;