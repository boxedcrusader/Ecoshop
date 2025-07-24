import PropTypes from "prop-types";
import { CiSearch } from "react-icons/ci";

function Shop({ items }) {
    return (
        <div className="w-full flex">
            {items.map((item, index) => (
                <div key={index} className="flex-1 h-full border border-gray-200 relative flex flex-col items-center justify-between overflow-hidden group">
                    <img src={item.img} alt={item.title} className="w-full h-2/3 object-cover transition-transform duration-300" />
                    
                    {/* Overlay for hover effect */}
                    <div className="absolute inset-0 bg-yellow-400 bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                        <h3 className="text-gray-700 text-lg font-bold absolute top-2 right-2">$299</h3>
                        <button className="bg-gray-700 rounded-full w-12 h-12 flex items-center justify-center shadow-md hover:bg-white">
                            <CiSearch />
                        </button>
                    </div>
                    
                    {/* Title and Description */}
                    <div className="text-center p-7">
                        <h3 className="font-bold text-lg text-gray-600">{item.title}</h3>
                        <p className="text-gray-700">{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

Shop.propTypes = {
    items: PropTypes.array.isRequired
}

export default Shop;
