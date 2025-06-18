'use client';

import { getAllProperty } from '@/api/api_handler';
import SearchBar from '@/components/SearchBar';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { LiaEdit } from 'react-icons/lia';
import { MdDeleteOutline } from 'react-icons/md';

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

  const handleSearch = () => {
    // if (inputValue) return router.push(`/?q=${inputValue}`);
    // if (!inputValue) return router.push('/');
  };
  const handleFilter = () => {};

  const searchFilter = [
    { filterName: 'Name', filterParam: 'name' },
    { filterName: 'Builder', filterParam: 'id' },
    { filterName: 'location', filterParam: 'location' },
  ];

  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='w-full flex justify-between items-center m-10'>
        <button
          onClick={() => {
            router.push('/property/add-property');
          }}
          className='w-1/6 ml-4 text-center px-3 rounded-[5px] h-12 bg-white border border-[#edf0f3] shadow-md '
        >
          Add Property
        </button>

        <div className='mr-4'>
          <SearchBar
            handleSearch={handleSearch}
            handleFilter={handleFilter}
            searchFilter={searchFilter}
          />
        </div>
      </div>

      <table className='w-full  border border-collapse border-[#f9fafb]  rounded-lg '>
        <thead className='uppercase h-[40px]  bg-[#edf0f3] text-slate-600 text-base'>
          <tr>
            <th className='px-2 text-center w-[150px]'>Project Name</th>
            {/* <th className='px-2 text-center w-[120px]'>Location</th> */}
            <th className='px-2 text-center w-[100px]'>Price</th>
            <th className='px-2 text-center w-[120px]'>Builder</th>
            <th className='px-2 text-center w-[100px]'>Flat Type</th>
            <th className='px-2 text-center w-[120px]'>Carpet Area</th>
            <th className='px-2 text-center w-[140px]'>Region</th>
            <th className='px-2 text-center w-[120px]'>Rera Id</th>
            <th className='px-2 text-center w-[80px]'>Actions</th>
          </tr>
        </thead>
        <tbody className='bg-white text-left rtl:text-right '>
          {properties.slice(0, 10).map((property) => {
            return (
              <tr
                key={property.id}
                className='h-[60px] border border-b border-[#ebedee]  hover:bg-sky-100 cursor-pointer text-sm'
                onClick={() => router.push(`/property/${property.id}`)}
              >
                <td className='pl-6 font-[500]'>{property.name}</td>
                {/* <td className='text-center '>{property.location}</td> */}
                <td className='text-center '>
                  ₹{Number(property.price).toLocaleString('en-IN')}
                </td>
                <td className='text-center'>{}</td>
                <td className='text-center '>{property.flat_types} </td>
                <td className='text-center '>{property.carpet_area}</td>
                <td className='text-center '>{property.region_name} </td>
                <td className='text-center '>{property.rera_ids}</td>
                <td className='text-center '>
                  <div className='flex justify-center items-center gap-4'>
                    <LiaEdit color='green' size={20} />
                    <MdDeleteOutline color='red' size={20} />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
