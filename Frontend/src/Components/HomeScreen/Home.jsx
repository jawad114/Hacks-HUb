// import React from 'react';
// import { Card, CardBody } from '@material-tailwind/react';

// const events = [
//   {
//     id: 1,
//     title: 'Event 1',
//     startDate: '2024-11-12',
//     endDate: '2024-03-12',
//     daysLeft: 255,
//     status: 'Active',
//     location: 'Location 1',
//     prizeAmount: '1000',
//     participants: 50,
//     category: 'Category 1',
//   },
//   {
//     id: 2,
//     title: 'Event 2',
//     startDate: '2024-12-01',
//     endDate: '2025-01-01',
//     daysLeft: 303,
//     status: 'Inactive',
//     location: 'Location 2',
//     prizeAmount: '500',
//     participants: 30,
//     category: 'Category 2',
//   },
//   {
//     id: 3,
//     title: 'Event 3',
//     startDate: '2024-09-15',
//     endDate: '2024-09-20',
//     daysLeft: 196,
//     status: 'Active',
//     location: 'Location 3',
//     prizeAmount: '2000',
//     participants: 100,
//     category: 'Category 3',
//   },
// ];

// const formatDate = (dateString) => {
//   const date = new Date(dateString);
//   const day = date.getDate();
//   const month = date.getMonth() + 1;
//   const year = date.getFullYear();
//   return `${day < 10 ? '0' + day : day}-${month < 10 ? '0' + month : month}-${year}`;
// };

// const Home = () => {
//   return (
//     <div className="min-h-screen min-w-screen container bg-black mx-auto px-4">
//       <div className="flex flex-col items-center justify-center">
//         {events.map((event) => (
//           <div key={event.id} className="w-full md:w-2/3 lg:w-1/2 mt-4">
//             <Card>
//               <CardBody className="flex flex-col items-center">
//                 <h2 className="text-lg font-bold mb-4">{event.title}</h2>
//                 <div className="mb-4">
//                   <p className="text-sm text-gray-500">
//                     {formatDate(event.startDate)} to {formatDate(event.endDate)}
//                   </p>
//                 </div>
//                 <div className="mb-4">
//                   <p className="text-sm text-gray-500">
//                     Days Left: {event.daysLeft} | Status: {event.status} | Location: {event.location}
//                   </p>
//                 </div>
//                 <div className="mb-4">
//                   <p className="text-sm text-gray-500">
//                     Prize Amount: {event.prizeAmount} | Participants: {event.participants} | Category: {event.category}
//                   </p>
//                 </div>
//               </CardBody>
//             </Card>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;

import React from 'react';
import { Card, CardBody } from '@material-tailwind/react';
import { MdDateRange, MdAccessTime, MdLocationOn, MdAttachMoney, MdPeople, MdCategory } from 'react-icons/md';
import { HiCalendar, HiClock, HiLocationMarker, HiCurrencyDollar, HiUserGroup, HiViewBoards,HiBadgeCheck } from 'react-icons/hi';

const events = [
  {
    id: 1,
    title: 'Event 1',
    startDate: '2024-11-12',
    endDate: '2024-03-12',
    daysLeft: 255,
    status: 'Active',
    location: 'Location 1',
    prizeAmount: '1000',
    participants: 50,
    category: 'Category 1',
  },
  {
    id: 2,
    title: 'Event 2',
    startDate: '2024-12-01',
    endDate: '2025-01-01',
    daysLeft: 303,
    status: 'Inactive',
    location: 'Location 2',
    prizeAmount: '500',
    participants: 30,
    category: 'Category 2',
  },
  {
    id: 3,
    title: 'Event 3',
    startDate: '2024-09-15',
    endDate: '2024-09-20',
    daysLeft: 196,
    status: 'Active',
    location: 'Location 3',
    prizeAmount: '2000',
    participants: 100,
    category: 'Category 3',
  },
];

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day < 10 ? '0' + day : day}-${month < 10 ? '0' + month : month}-${year}`;
};

const Home = () => {
  return (
    <div className="min-h-screen min-w-screen container bg-[#14082c] mx-auto px-4">
      <div className="flex flex-col items-center justify-center">
        {events.map((event) => (
          <div key={event.id} className="w-full md:w-2/3 lg:w-1/2 mt-4">
            <Card className='flex items-center justify-center rounded-2xl  hover:shadow-black hover:shadow-2xl transition-transform  hover:-translate-y-1'>
            <h2 className="text-lg font-bold text-black mt-2">{event.title}</h2>
              <CardBody className="flex flex-col items-start">
                <div className="flex items-center">
                  <MdDateRange size={20} color='black'/>
                  <div className="ml-2">
                    <p className="text-sm font-bold text-black">
                      {formatDate(event.startDate)} to {formatDate(event.endDate)}
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MdAccessTime size={20} color='black'/>
                  <div className="ml-2">
                    <p className="text-sm font-bold text-black">
                      Days Left: {event.daysLeft}
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                {event.status === 'Active' ? <HiBadgeCheck color="green" size={20} /> : <HiBadgeCheck color="gray" size={20} />}                  <div className="ml-2">
                    <p className="text-sm font-bold text-black">
                      Status: {event.status}
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MdLocationOn size={20} color='black'/>
                  <div className="ml-2">
                    <p className="text-sm font-bold text-black">
                      Location: {event.location}
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MdAttachMoney size={20} color='black'/>
                  <div className="ml-2">
                    <p className="text-sm font-bold text-black">
                      Prize Amount: {event.prizeAmount}
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MdPeople size={20} color='black'/>
                  <div className="ml-2">
                    <p className="text-sm font-bold text-black">
                      Participants: {event.participants}
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <HiViewBoards size={20} color='black' />
                  <div className="ml-2">
                    <p className="text-sm font-bold text-black">
                      Category: {event.category}
                    </p>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
