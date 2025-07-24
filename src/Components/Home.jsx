import SliderHook from "../Hooks/ImageChanger.jsx";
import NewArrivals from "./NewArrivals.jsx";
import Shop from "./Shop.jsx";
import PopularProducts from "./PopularProducts.jsx";
import KnowledgeShare from "./KnowledgeShare.jsx";
import JohnSmith from "./JohnSmith.jsx";
import About from "./About.jsx";
import Newsletter from "./Newsletter.jsx";

function Home() {
    const images = [
        { url: '/slide-bg-1.jpg' },
        { url: 'slide-bg-2.jpg' }
    ];

    const texts = [
        {
            title: "The Latest Product from ecoshop",
            priceText: "$299",
            description: "FEATURED CYCLE",
            buttonText: "SHOP NOW",
            textStyle: "text-white bg-opacity-70 top-0 right-0",
            buttonStyle: "bg-gray-700 hover:bg-white",
        },
        {
            title: "The Latest Product from ecoshop",
            priceText: "$299",
            description: "LOOK BEAUTIFUL THIS SEASON",
            buttonText: "BUY NOW",
            textStyle: "text-white bg-opacity-80 inset-0 flex flex-col justify-center items-center text-center",
            buttonStyle: "bg-gray-700 hover:bg-white"
        }
    ];

    // Array of shop items to pass to Shop component
    const shopItems = [
        { img: '/item-img-1-1.jpg', title: 'WOODEN CHAIR', description: 'Lorem ipsum dolor sit amet' },
        { img: '/item-img-1-2.jpg', title: 'MINIMALIST WOO TOYS', description: 'Lorem ipsum dolor sit amet' },
        { img: '/item-img-1-3.jpg', title: 'CONCRETE SHAVING STICK', description: 'Lorem ipsum dolor sit amet' },
        { img: '/item-img-1-4.jpg', title: 'PARAGON PENDANT', description: 'Lorem ipsum dolor sit amet' },
    ];

    const shopItemsTwo = [
        { img: '/item-img-1-5.jpg', title: 'CREATIVE LAMP', description: 'Lorem ipsum dolor sit amet' },
        { img: '/item-img-1-6.jpg', title: 'ECO FRIENDLY', description: 'Lorem ipsum dolor sit amet' },
        { img: '/item-img-1-7.jpg', title: 'GEOMETRY STOOL', description: 'Lorem ipsum dolor sit amet' },
        { img: '/item-img-1-8.jpg', title: 'CERAMIC STONE VASE', description: 'Lorem ipsum dolor sit amet' },
    ]



    return (
        <div>
            <SliderHook
                images={images}
                texts={texts}
                transitionTime={7000}
            />
            <NewArrivals texts={texts} />
            <Shop items={shopItems} /> {/* Passing shopItems as props */}
            <Shop items={shopItemsTwo} />
            <PopularProducts />
            <KnowledgeShare />
            <JohnSmith />
            <About />
            <Newsletter />
        </div>
    );
}

export default Home;
