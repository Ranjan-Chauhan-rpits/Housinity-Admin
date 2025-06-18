'use client';

// import Image from 'next/image';
import { useRef, useState } from 'react';
// import { BiSolidDownArrow } from 'react-icons/bi';
import { IoSearchOutline } from 'react-icons/io5';
import { BiDownArrow } from 'react-icons/bi';
// import { CiFilter } from 'react-icons/ci';

interface filter {
  filterName: string;
  filterParam: string;
}

interface searchbarProps {
  handleSearch: (search: string) => void;
  handleFilter: (search: string) => void;
  searchFilter: filter[];
}

const SearchBar = ({
  handleSearch,
  handleFilter,
  searchFilter,
}: searchbarProps) => {
  const [showFilter, setShowFilter] = useState(false);
  const dropdownRef = useRef(null);
  const [filterName, setFilterName] = useState('Name');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [filterParam, setFilterParam] = useState('name');
  const [searchVal, setSearchVal] = useState('');

  interface search {
    filterName: string;
    filterParam: string;
  }

  function changeSearch(search: string) {
    handleSearch(search);
  }

  return (
    <div className='flex flex-row w-full justify-between'>
      <div className='flex flex-row w-full items-center px-3 rounded-[5px] h-12 bg-white border border-[#edf0f3] shadow-md '>
        {/* <Image
          src={searchSvg}
          className='justify-self-end bg-white ml-[2vw] mr-[1vw]'
          alt='svg'
          width='20'
          height='20'
        /> */}

        <input
          type='text'
          id='search'
          value={searchVal}
          className='  w-full items-center focus:border-blue-500 placeholder-slate-600 outline-none'
          placeholder={`Search by ${filterName}`}
          onChange={(e) => {
            changeSearch(e.target.value);
            setSearchVal(e.target.value);
          }}
        />
        <IoSearchOutline size={24} />
      </div>
      <div className='w-full'>
        <div className='ml-3 form-group'>
          <div
            className='flex flex-col relative  bg-white px-[2vw] rounded-[5px] h-12 items-center shadow-md '
            ref={dropdownRef}
          >
            <div
              className='flex flex-row justify-between items-center h-full w-full gap-2.5'
              onClick={() => setShowFilter(!showFilter)}
            >
              <span className='self-center'>Search by {filterName}</span>

              {/* <Image
                src={downArrow}
                className='justify-self-end '
                alt='svg'
                width='20'
                height='20'
              /> */}
              <BiDownArrow />
            </div>
            {showFilter && (
              <div className='flex absolute flex-col m-14 py-3 px-2 w-full justify-self-center bg-white rounded-[5px]'>
                <div className='flex flex-col w-full items-center justify-center gap-2 '>
                  {searchFilter.map((filter: search, key: number) => {
                    return (
                      <button
                        key={key}
                        // placeholder="customer_name"
                        name={filter.filterName}
                        id={filter.filterParam}
                        className={
                          filterName === filter.filterName
                            ? 'bg-blue-500 w-full rounded-[5px] pl-4 py-1 my-1 text-start text-white '
                            : 'bg-blue-200 w-full rounded-[5px] pl-4 py-1 my-1 text-start hover:bg-blue-400'
                        }
                        onClick={() => {
                          setFilterName(filter.filterName);
                          setFilterParam(filter.filterParam);
                          handleFilter(filter.filterParam);
                          setShowFilter(false);
                          setSearchVal('');
                        }}
                      >
                        {filter.filterName}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
