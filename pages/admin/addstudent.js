import { useState } from 'react';

export default function AddStudent() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [rank, setRank] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [paid, setPaid] = useState(false);
  const [classType, setClassType] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const studentData = {
      firstName,
      lastName,
      rank,
      startDate,
      endDate,
      paid,
      classType
    };
    // Send the student data to your API
    console.log(studentData);
  };

  const ranks = ['White Belt', 'Yellow Belt', 'Black Belt'];

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={firstName} 
        onChange={(e) => setFirstName(e.target.value)} 
        placeholder="First Name" 
        required 
      />
      <input 
        type="text" 
        value={lastName} 
        onChange={(e) => setLastName(e.target.value)} 
        placeholder="Last Name" 
        required 
      />
      <select value={rank} onChange={(e) => setRank(e.target.value)} required>
        <option value="" disabled>Select Rank</option>
        {ranks.map((rank) => (
          <option key={rank} value={rank}>{rank}</option>
        ))}
      </select>
      <input 
        type="date" 
        value={startDate} 
        onChange={(e) => setStartDate(e.target.value)} 
        placeholder="Start Date" 
        required 
      />
      <input 
        type="date" 
        value={endDate} 
        onChange={(e) => setEndDate(e.target.value)} 
        placeholder="End Date" 
      />
      <label>
        <input 
          type="checkbox" 
          checked={paid} 
          onChange={(e) => setPaid(e.target.checked)} 
        />
        Paid
      </label>
      <select value={classType} onChange={(e) => setClassType(e.target.value)} required>
        <option value="" disabled>Select Class</option>
        <option value="early">Early</option>
        <option value="late">Late</option>
        <option value="children">Children</option>
      </select>
      <button type="submit">Add Student</button>
    </form>
  );
}
