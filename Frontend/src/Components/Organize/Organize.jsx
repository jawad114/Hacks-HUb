import React, { useState } from 'react';
import { Input,Button,Select } from '@material-tailwind/react';
import { useSelector} from 'react-redux'; // Import useSelector and useDispatch
import { selectToken } from '../../State/Reducers/tokenSlice';
import { AxiosRequest } from '../Axios/AxiosRequest';
import { toast,ToastContainer } from 'react-toastify';

const Organize = () => {
  const [eventName, setEventName] = useState('');
  const [participants, setParticipants] = useState('');
  const [startdate, setstartDate] = useState('');
  const [enddate, setendDate] = useState('');
  const [timeAllowed, setTimeAllowed] = useState('');
  const [category, setCategory] = useState('');
  const [venue, setVenue] = useState('');
  const [language, setLanguage] = useState('');
  const [prizeAmount, setPrizeAmount] = useState('');
  const [participantLevel, setParticipantLevel] = useState('');
  const storedToken = localStorage.getItem('token');
  const token = useSelector(selectToken) || storedToken;
  


  const categoryOptions = [
    { value: '1', label: 'Summer Hackaton' },
    { value: '2', label: 'Winner Hackaton' },
    { value: '3', label: 'Innovate Hackaton' },
    { value: '4', label: 'Student Hackaton' },
    { value: '5', label: 'Global Hackaton' },
    { value: '6', label: 'Corporate Hackaton' },

  ];

  const handleSubmit = async(e) => {
    e.preventDefault();

console.log("Form submission",eventName,participants,startdate,enddate,timeAllowed,category,venue,language,prizeAmount,participantLevel)
const eventData = {
  event_title: eventName,
  numberOfParticipants: participants,
  start_date: startdate,
  allowed_time: timeAllowed,
  end_date: enddate,
  location: venue,
  preferedLanguage: language,
  prizeAmount: prizeAmount,
  category_id: category,
  levelOfParticipant: participantLevel
};

try {
  console.log("Token",token);
  console.log("Time Allowed",eventData.allowed_time);

  const response = await AxiosRequest.post('/api/events/create-event', eventData, {
    headers: {
      authorization: token // Pass the authorization token in the request headers
    }
  });
  console.log('Event Created Successfully',response.data); // Log the response from the backend
  toast.success('Event Created Successfully');
} catch (error) {
  console.error(error); // Log any errors
  toast.error('Failed To Create Event');

}
  };

  return (
    <>
      <div className="min-h-screen min-w-screen flex items-center justify-center bg-[#14082c] py-12 px-4 sm:px-6 lg:px-8">
       <ToastContainer/> 
      <div className="max-w-md w-screen space-y-8 p-8 bg-white rounded-xl shadow-xl">
          <div>
            <h1 className="text-2xl text-center font-bold mb-4 text-black dark:text-white">Organize Hackathons</h1>
          </div>
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <Input
              type="text"
              label="Event Name"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              size="md"
              color="black"
              className="focus:ring-0"
            />
            <Input
              type="number"
              label="Number of Participants"
              value={participants}
              onChange={(e) => setParticipants(e.target.value)}
              color="black"
              size="md"
              className="focus:ring-0"
            />
            <Input
              type="text"
              label="Time Allowed"
              value={timeAllowed}
              onChange={(e) => setTimeAllowed(e.target.value)}
              color="black"
              size="md"
              className="focus:ring-0"
            />
                <Input
                  type="date"
                  label="Select Start Date"
                  value={startdate}
                  onChange={(e) => setstartDate(e.target.value)}
                  color="black"
                  size="md"
                  className="focus:ring-0"
                />
                <Input
                  type="date"
                  label="Select End Date"
                  value={enddate}
                  onChange={(e) => setendDate(e.target.value)}
                  color="black"
                  size="md"
                  className="focus:ring-0"
                />
            {/* <Input
              type="text"
              label="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              color="black"
              size="md"
              className="focus:ring-0"
            /> */}
<Select
  variant="outlined"
  label="Select Category"
  value={category}
  onChange={(value) => setCategory(value)} // Update the state with the selected value
  size="md"
  className="focus:ring-0"
>
  {categoryOptions.map((option) => (
    <Select.Option key={option.value} value={option.value}>
      {option.label}
    </Select.Option>
  ))}
</Select>
            
            <Input
              type="text"
              label="Venue"
              value={venue}
              onChange={(e) => setVenue(e.target.value)}
              color="black"
              size="md"
              className="focus:ring-0"
            />
            
            <Input
              type="text"
              label="Preferred Language"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              color="black"
              size="md"
              className="focus:ring-0"
            />
            <Input
              type="text"
              label="Prize Amount"
              value={prizeAmount}
              onChange={(e) => setPrizeAmount(e.target.value)}
              color="black"
              size="md"
              className="focus:ring-0"
            />
            <Input
              type="text"
              label="Level of Participant"
              value={participantLevel}
              onChange={(e) => setParticipantLevel(e.target.value)}
              color="black"
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
