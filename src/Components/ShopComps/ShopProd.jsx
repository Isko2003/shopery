import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import ShopProdCard from './ShopProdCard';
import '../../Styles/shop.css';
import { IoIosClose } from 'react-icons/io';
import supabase from '../../../supabaseClient';
import Pagination from './Pagination';

const ShopProd = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const page = parseInt(searchParams.get('page'), 10) || 1;

    const fetchProducts = async (filters, page = 1, limit = 5) => { 
        let query = supabase.from('Shopery_Data').select('*', { count: 'exact' });

        if (filters.category) {
            query = query.eq('category', filters.category);
        }

        if (filters.price) {
            const priceRange = filters.price.match(/Min \$(\d+) - Max \$(\d+)/);
            if (priceRange) {
                const minPrice = parseInt(priceRange[1]);
                const maxPrice = parseInt(priceRange[2]);
                query = query.gte('price', minPrice).lte('price', maxPrice);
                //gte - greater than or equal to
                //lte - less than or equal to
                
            }
        }

        const offset = (page - 1) * limit;
        const { data, error, count } = await query.range(offset, offset + limit - 1);

        if (error) {
            console.error(error.message);
        }

        return { data, count };
    };

    const [selectedValues, setSelectedValues] = useState({
        select1: '',
        select2: '',
        select3: '',
        select4: '',
    });

    const { select1, select2, select3, select4 } = selectedValues;

    const { data, isLoading, error } = useQuery({
        queryKey: ['Shopery_Data', selectedValues, page],
        queryFn: () =>
            fetchProducts({
                category: select1,
                price: select2,
                rating: select3,
                sortBy: select4,
            }, page, 5),
        select: (data) => ({
            data: data.data,
            count: data.count
        })
    });

    useEffect(() => {
        setSearchParams({ page });
    }, [selectedValues, page, setSearchParams]);

    const handleSelectChange = (e) => {
        const { name, value } = e.target;
        setSelectedValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
        setSearchParams({ page: 1 });
    };

    const handlePageChange = (newPage) => {
        setSearchParams({ page: newPage });
    };

    return (
        <div className='section'>
            <div className='shop-filters pb-9 flex justify-between'>
                <div className='flex gap-5'>
                    <div className='category'>
                        <select name="select1" id="categories" className='cursor-pointer' onChange={handleSelectChange}>
                            <option value="">Select Category</option>
                            <option value="Wing Chair">Wing Chair</option>
                            <option value="Vegetables">Vegetables</option>
                            <option value="Health & Beauties">Health & Beauties</option>
                            <option value="Medicine">Medicine</option>
                        </select>
                    </div>
                    <div className='category'>
                        <select name="select2" id="categories" className='cursor-pointer' onChange={handleSelectChange}>
                            <option value="">Select Price</option>
                            <option value="Min $15 - Max $300">Min &#36;15 - Max &#36;300</option>
                            <option value="Min $30 - Max $600">Min &#36;30 - Max &#36;600</option>
                            <option value="Min $60 - Max $1200">Min &#36;60 - Max &#36;1200</option>
                        </select>
                    </div>
                    <div className='category'>
                        <select name="select3" id="categories" className='cursor-pointer' onChange={handleSelectChange}>
                            <option value="">Select Rating</option>
                            <option value="⭐⭐⭐⭐⭐">⭐⭐⭐⭐⭐</option>
                            <option value="⭐⭐⭐⭐">⭐⭐⭐⭐</option>
                            <option value="⭐⭐⭐">⭐⭐⭐</option>
                            <option value="⭐⭐">⭐⭐</option>
                            <option value="⭐">⭐</option>
                        </select>
                    </div>
                </div>
                <div className='flex gap-4'>
                    <div className='category'>
                        <select name="select4" id="categories" className='cursor-pointer' onChange={handleSelectChange}>
                            <option value="Latest">Sort By: Latest</option>
                            <option value="Oldest">Sort By: Oldest</option>
                            <option value="Trending">Sort By: Trending</option>
                        </select>
                    </div>
                    <div className='category'>
                        <select name="select5" id="categories" className='cursor-pointer' onChange={handleSelectChange}>
                            <option value="">Show: 16</option>
                            <option value="">Show: 01</option>
                            <option value="">Show: 02</option>
                            <option value="">Show: 03</option>
                            <option value="">Show: 04</option>
                            <option value="">Show: 05</option>
                            <option value="">Show: 06</option>
                            <option value="">Show: 07</option>
                            <option value="">Show: 08</option>
                            <option value="">Show: 09</option>
                            <option value="">Show: 10</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className='active-filters'>
                <hr />
                <div className='flex justify-between'>
                    <div className='flex gap-6'>
                        <p>Active Filters:</p>
                        {select1 && <div className='filter flexCenter'> <span>{select1}</span> <IoIosClose onClick={() => setSelectedValues({ ...selectedValues, select1: '' })} /></div>}
                        {select2 && <div className='filter flexCenter'> <span>{select2}</span> <IoIosClose onClick={() => setSelectedValues({ ...selectedValues, select2: '' })} /></div>}
                        {select3 && <div className='filter flexCenter'> <span>{select3}</span> <IoIosClose onClick={() => setSelectedValues({ ...selectedValues, select3: '' })} /></div>}
                        {select4 && <div className='filter flexCenter'> <span>{select4}</span> <IoIosClose onClick={() => setSelectedValues({ ...selectedValues, select4: '' })} /></div>}
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6 pt-6'>
                {isLoading && <p>Loading...</p>}
                {error && <p>Error fetching products: {error.message}</p>}
                {data?.data && data.data.map((item, index) => (
                    <ShopProdCard product={item} key={index} />
                ))}
            </div>
            <div className='my-5 flexCenter'>
                <Pagination
                    handlePageChange={handlePageChange}
                    page={page}
                    totalItems={data?.count || 0}
                    itemsPerPage={5}
                />
            </div>
        </div>
    );
};

export default ShopProd;
