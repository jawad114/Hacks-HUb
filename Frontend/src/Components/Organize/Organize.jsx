import React, { useState } from 'react';
import Header from '../Header/Header';
import { Input, Popover, PopoverHandler, PopoverContent,Button } from '@material-tailwind/react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';

const Organize = () => {
  const [eventName, setEventName] = useState('');
  const [participants, setParticipants] = useState('');
  const [startdate, setstartDate] = useState();
  const [enddate, setendDate] = useState();
  const [timeAllowed, setTimeAllowed] = useState('');
  const [category, setCategory] = useState('');
  const [venue, setVenue] = useState('');
  const [language, setLanguage] = useState('');
  const [prizeAmount, setPrizeAmount] = useState('');
  const [participantLevel, setParticipantLevel] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
console.log("Form submission",eventName,participants,startdate,enddate,timeAllowed,category,venue,language,prizeAmount,participantLevel)
  };

  return (
    <>
      <Header />
      <div className="min-h-screen w-screen flex items-center justify-center bg-[#14082c] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-screen space-y-8 p-8 rounded-xl ">
          <div>
            <h1 className="text-2xl text-center font-bold mb-4 text-white dark:text-white">Organize Hackathons</h1>
          </div>
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <Input
              type="text"
              label="Event Name"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              size="md"
              color="white"
              className="focus:ring-0"
            />
            <Input
              type="number"
              label="Number of Participants"
              value={participants}
              onChange={(e) => setParticipants(e.target.value)}
              color="white"
              size="md"
              className="focus:ring-0"
            />
            <Input
              type="text"
              label="Time Allowed"
              value={timeAllowed}
              onChange={(e) => setTimeAllowed(e.target.value)}
              color="white"
              size="md"
              className="focus:ring-0"
            />
             <Popover placement="bottom">
              <PopoverHandler>
                <Input
                  type="text"
                  label="Select Start Date"
                  value={startdate ? format(startdate, 'PPP') : ''}
                  readOnly
                  color="white"
                  size="md"
                  className="focus:ring-0"
                />
              </PopoverHandler>
              <PopoverContent>
                <DayPicker
                  mode="single"
                  selected={startdate}
                  onSelect={setstartDate}
                  showOutsideDays
                  className="border-0"
                  classNames={{
                    caption: 'flex justify-center py-2  mb-4 relative items-center',
                    caption_label: 'text-sm font-medium text-gray-900',
                    nav: 'flex items-center',
                    nav_button: 'h-6 w-6 bg-transparent hover:bg-blue-gray-50 p-1 rounded-md transition-colors duration-300',
                    nav_button_previous: 'absolute left-1.5',
                    nav_button_next: 'absolute right-1.5',
                    table: 'w-full border-collapse',
                    head_row: 'flex font-medium text-gray-900',
                    head_cell: 'm-0.5 w-9 font-normal text-sm',
                    row: 'flex w-full mt-2',
                    cell: 'text-gray-600 rounded-md h-9 w-9 text-center text-sm p-0 m-0.5 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-gray-900/20 [&:has([aria-selected].day-outside)]:text-white [&:has([aria-selected])]:bg-gray-900/50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20',
                    day: 'h-9 w-9 p-0 font-normal',
                    day_range_end: 'day-range-end',
                    day_selected: 'rounded-md bg-gray-900 text-white hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white',
                    day_today: 'rounded-md bg-gray-200 text-gray-900',
                    day_outside: 'day-outside text-gray-500 opacity-50 aria-selected:bg-gray-500 aria-selected:text-gray-900 aria-selected:bg-opacity-10',
                    day_disabled: 'text-gray-500 opacity-50',
                    day_hidden: 'invisible',
                  }}
                  components={{
                    IconLeft: ({ ...props }) => (
                      <ChevronLeftIcon {...props} className="h-4 w-4 stroke-2" />
                    ),
                    IconRight: ({ ...props }) => (
                      <ChevronRightIcon {...props} className="h-4 w-4 stroke-2" />
                    ),
                  }}
                />
              </PopoverContent>
            </Popover>
            <Popover placement="bottom">
              <PopoverHandler>
                <Input
                  type="text"
                  label="Select End Date"
                  value={enddate ? format(enddate, 'PPP') : ''}
                  readOnly
                  color="white"
                  size="md"
                  className="focus:ring-0"
                />
              </PopoverHandler>
              <PopoverContent>
                <DayPicker
                  mode="single"
                  selected={enddate}
                  onSelect={setendDate}
                  showOutsideDays
                  className="border-0"
                  classNames={{
                    caption: 'flex justify-center py-2  mb-4 relative items-center',
                    caption_label: 'text-sm font-medium text-gray-900',
                    nav: 'flex items-center',
                    nav_button: 'h-6 w-6 bg-transparent hover:bg-blue-gray-50 p-1 rounded-md transition-colors duration-300',
                    nav_button_previous: 'absolute left-1.5',
                    nav_button_next: 'absolute right-1.5',
                    table: 'w-full border-collapse',
                    head_row: 'flex font-medium text-gray-900',
                    head_cell: 'm-0.5 w-9 font-normal text-sm',
                    row: 'flex w-full mt-2',
                    cell: 'text-gray-600 rounded-md h-9 w-9 text-center text-sm p-0 m-0.5 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-gray-900/20 [&:has([aria-selected].day-outside)]:text-white [&:has([aria-selected])]:bg-gray-900/50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20',
                    day: 'h-9 w-9 p-0 font-normal',
                    day_range_end: 'day-range-end',
                    day_selected: 'rounded-md bg-gray-900 text-white hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white',
                    day_today: 'rounded-md bg-gray-200 text-gray-900',
                    day_outside: 'day-outside text-gray-500 opacity-50 aria-selected:bg-gray-500 aria-selected:text-gray-900 aria-selected:bg-opacity-10',
                    day_disabled: 'text-gray-500 opacity-50',
                    day_hidden: 'invisible',
                  }}
                  components={{
                    IconLeft: ({ ...props }) => (
                      <ChevronLeftIcon {...props} className="h-4 w-4 stroke-2" />
                    ),
                    IconRight: ({ ...props }) => (
                      <ChevronRightIcon {...props} className="h-4 w-4 stroke-2" />
                    ),
                  }}
                />
              </PopoverContent>
            </Popover>
            <Input
              type="text"
              label="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              color="white"
              size="md"
              className="focus:ring-0"
            />
            
            <Input
              type="text"
              label="Venue"
              value={venue}
              onChange={(e) => setVenue(e.target.value)}
              color="white"
              size="md"
              className="focus:ring-0"
            />
            
            <Input
              type="text"
              label="Preferred Language"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              color="white"
              size="md"
              className="focus:ring-0"
            />
            <Input
              type="text"
              label="Prize Amount"
              value={prizeAmount}
              onChange={(e) => setPrizeAmount(e.target.value)}
              color="white"
              size="md"
              className="focus:ring-0"
            />
            <Input
              type="text"
              label="Level of Participant"
              value={participantLevel}
              onChange={(e) => setParticipantLevel(e.target.value)}
              color="white"
              size="md"
              className="focus:ring-0"
            />
            <div className='flex justify-center items-center'>
              <Button
                type="submit"
                color="black"
                size="md"
                className='bg-black'
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Organize;
