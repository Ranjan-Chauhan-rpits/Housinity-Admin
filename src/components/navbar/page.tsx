'use client';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center shadow-lg px-10 bg-gray-200 border-b border-slate-800'>
      <div className=''>
        <h1 className='text-slate-800'>Navbar</h1>
      </div>
      <div className='flex justify-between gap-4 m-2 px-6 items-center rounded border border-gray-500'>
        <img
          src='https://t3.ftcdn.net/jpg/10/38/39/80/360_F_1038398002_hFF48VZ86M8WsHxRfrU2xCTWhOqSJOTC.jpg'
          alt=''
          className='w-12 h-12 rounded-full overflow-hidden'
        />

        <p className='text-slate-800'>Name</p>
      </div>
    </div>
  );
};

export default Navbar;

// const Navbar = () => {
//   return (
//     <header className='w-full bg-white shadow px-6 py-4'>
//       <h1 className='text-lg font-semibold text-gray-800'>
//         Welcome to Dashboard
//       </h1>
//     </header>
//   );
// };

// export default Navbar;
