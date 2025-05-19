"user client"

const list = [
    "Woman's Fashion",
    "Men's Fashion",
    "Electronics",
    "Home & Lifestyle",
    "Medicine",
    "Sports & Outdoor",
    "Baby's & Toys",
    "Groceries & Pets",
    "Health & Beauty"
]

export default function CategoryList() {

    return (
        <div className="flex flex-col md:flex-row ">
            <div className="md:w-1/5 flex md:flex-col justify-center md:items-center">
                <ul>
                    {list.map((category) => (
                        <li key={category} className="px-8 py-2">{category}</li>
                    ))}
                </ul>
            </div>
            <div className="md:w-4/5 flex items-center ">
                <img src="/next.config.jpeg" alt="image_promo" className="max-h-90 object-contain px-8 py-4 border-l border-gray-200"/>
            </div>
        </div>
    )
}