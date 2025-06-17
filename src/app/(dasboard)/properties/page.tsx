'use client';

import { getAllProperty } from '@/api/api_handler';
import SearchBar from '@/components/SearchBar';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface PropertyType {
  id: string;
  name: string;
  location: string;
  price: number;
  builder_id: string;
  flat_types: string;
  carpet_area: string;
  region_name: string;
  rera_ids: string;
}

export default function Property() {
  const router = useRouter();
  const [properties, setProperties] = useState<PropertyType[]>([]);

  const fetchProperties = async () => {
    try {
      const response = await getAllProperty();

      if (response?.status === 200) {
        setProperties(response.data?.data || []);
        console.log(response.data?.data);
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  const handleSearch = () => {};
  const handleFilter = () => {};
  const searchFilter = [
    { filterName: 'Name', filterParam: 'name' },
    { filterName: 'Builder', filterParam: 'id' },
    { filterName: 'location', filterParam: 'location' },
  ];

  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='flex justify-end items-end m-10'>
        {/* <div className='flex justify-center items-center p-1 border border-gray-500'>
          <input className='w-96' />
          <IoSearchOutline />
        </div> */}

        <SearchBar
          handleSearch={handleSearch}
          handleFilter={handleFilter}
          searchFilter={searchFilter}
        />
      </div>

      <table className='w-full  border border-collapse border-[#f9fafb]  rounded-lg '>
        <thead className='uppercase h-[40px]  bg-[#edf0f3] text-slate-600'>
          <tr>
            <th className='px-2 text-center w-[150px]'>Project Name</th>
            {/* <th className='px-2 text-center w-[120px]'>Location</th> */}
            <th className='px-2 text-center w-[100px]'>Price</th>
            <th className='px-2 text-center w-[120px]'>Builder</th>
            <th className='px-2 text-center w-[100px]'>Flat Type</th>
            <th className='px-2 text-center w-[120px]'>Carpet Area</th>
            <th className='px-2 text-center w-[140px]'>Region Name</th>
            <th className='px-2 text-center w-[120px]'>Rera Id</th>
          </tr>
        </thead>
        <tbody className='bg-white text-left rtl:text-right '>
          {properties.slice(0, 10).map((property) => {
            return (
              <tr
                key={property.id}
                className='h-[60px] border border-b border-[#ebedee]  hover:bg-sky-100 cursor-pointer'
                onClick={() => router.push(`/property/${property.id}`)}
              >
                <td className='pl-4 font-[500]'>{property.name}</td>
                {/* <td className='text-center '>{property.location}</td> */}
                <td className='text-center '>
                  ₹{Number(property.price).toLocaleString('en-IN')}
                </td>
                <td className='text-center'>{}</td>
                <td className='text-center'>{property.flat_types} </td>
                <td className='text-center'>{property.carpet_area}</td>
                <td className='text-center'>{property.region_name} </td>
                <td className='text-center'>{property.rera_ids}</td>
                {/* <td className='text-center'>${property.budget}</td> */}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
