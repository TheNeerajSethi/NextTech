// components/Category.js

const Category = () => {
    const categories = [
        { name: 'Artificial Intelligence', icon: '/img.png' },
        { name: 'Internet of Things', icon: '/img_1.png' },
        { name: 'Cybersecurity', icon: '/img_2.png' },
        { name: 'Cloud Computing', icon: '/img_3.png' },
        { name: 'Blockchain & Cryptocurrency', icon: '/img_4.png' },
        { name: 'Augmented & Virtual Reality', icon: '/img_5.png' },
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Categories</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                {categories.map((category, index) => (
                    <div key={index} className="flex flex-col items-center justify-center bg-white rounded-lg shadow-md p-6 hover:bg-gray-100 transition duration-300">
                        <img src={category.icon} alt={category.name} className="w-16 h-16 mb-4" />
                        <h3 className="text-lg font-semibold text-center">{category.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;
