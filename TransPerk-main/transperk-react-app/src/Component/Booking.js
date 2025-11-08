import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './styles/Booking.css';

// Constants for dropdown options
const INDIAN_CITIES = [
  'Delhi', 'Mumbai', 'Kolkata', 'Chennai', 'Bangalore', 'Hyderabad', 'Pune', 'Ahmedabad',
  'Jaipur', 'Surat', 'Lucknow', 'Kanpur', 'Nagpur', 'Indore', 'Thane', 'Bhopal',
  'Visakhapatnam', 'Pimpri-Chinchwad', 'Patna', 'Vadodara', 'Ghaziabad', 'Ludhiana',
  'Agra', 'Nashik', 'Faridabad', 'Meerut', 'Rajkot', 'Kalyan-Dombivli', 'Vasai-Virar',
  'Varanasi', 'Srinagar', 'Aurangabad', 'Dhanbad', 'Amritsar', 'Navi Mumbai', 'Allahabad',
  'Ranchi', 'Howrah', 'Coimbatore', 'Jabalpur', 'Gwalior', 'Vijayawada', 'Jodhpur',
  'Madurai', 'Raipur', 'Kota', 'Guwahati', 'Chandigarh', 'Solapur', 'Hubballi-Dharwad',
  'Tiruchirappalli', 'Bareilly', 'Moradabad', 'Mysore', 'Tiruppur', 'Gurgaon', 'Aligarh',
  'Jalandhar', 'Bhubaneswar', 'Salem', 'Mira-Bhayandar', 'Warangal', 'Thiruvananthapuram',
  'Guntur', 'Bhiwandi', 'Saharanpur', 'Gorakhpur', 'Bikaner', 'Amravati', 'Noida',
  'Jamshedpur', 'Bhilai', 'Cuttack', 'Firozabad', 'Kochi', 'Nellore', 'Bhavnagar',
  'Dehradun', 'Durgapur', 'Asansol', 'Rourkela', 'Nanded', 'Kolhapur', 'Ajmer',
  'Akola', 'Gulbarga', 'Jamnagar', 'Ujjain', 'Loni', 'Siliguri', 'Jhansi', 'Ulhasnagar',
  'Jammu', 'Sangli-Miraj & Kupwad', 'Mangalore', 'Erode', 'Belgaum', 'Ambattur',
  'Tirunelveli', 'Malegaon', 'Gaya', 'Tirupati', 'Davanagere', 'Kozhikode', 'Akbarpur',
  'Kurnool', 'Rajpur Sonarpur', 'Bokaro Steel City', 'South Dumdum', 'Bellary',
  'Patiala', 'Gopalpur', 'Agartala', 'Bhagalpur', 'Muzaffarnagar', 'Bathinda',
  'Rampur', 'Shivamogga', 'Chandrapur', 'Junagadh', 'Thrissur', 'Alwar', 'Bardhaman',
  'Kulti', 'Kakinada', 'Nizamabad', 'Parbhani', 'Tumkur', 'Khammam', 'Ozhukarai',
  'Bihar Sharif', 'Panipat', 'Darbhanga', 'Bally', 'Aizawl', 'Dewas', 'Ichalkaranji',
  'Karnal', 'Bathinda', 'Jalna', 'Eluru', 'Kirari Suleman Nagar', 'Barasat',
  'Purnia', 'Satna', 'Mau', 'Sonipat', 'Farrukhabad', 'Sagar', 'Rourkela', 'Durg',
  'Imphal', 'Ratlam', 'Hapur', 'Arrah', 'Karimnagar', 'Anantapur', 'Etawah', 'Ambernath',
  'North Dumdum', 'Bharatpur', 'Begusarai', 'New Delhi', 'Gandhidham', 'Baranagar',
  'Tiruvottiyur', 'Pondicherry', 'Sikar', 'Thoothukudi', 'Rewa', 'Mirzapur', 'Raichur',
  'Pali', 'Ramagundam', 'Haridwar', 'Vijayanagaram', 'Katihar', 'Hardwar', 'Sri Ganganagar',
  'Srinagar', 'Karawal Nagar', 'Mango', 'Thanjavur', 'Bulandshahr', 'Uluberia',
  'Murwara', 'Sambhal', 'Singrauli', 'Nadiad', 'Secunderabad', 'Naihati', 'Yamunanagar',
  'Bidhan Nagar', 'Pallavaram', 'Bidar', 'Munger', 'Panchkula', 'Burhanpur', 'Raurkela',
  'Kharagpur', 'Dindigul', 'Gandhinagar', 'Hospet', 'Nangloi Jat', 'Malda', 'Ongole',
  'Deoghar', 'Chapra', 'Haldia', 'Khandwa', 'Nandyal', 'Morena', 'Amroha', 'Anand',
  'Bhind', 'Bhalswa Jahangir Pur', 'Madhyamgram', 'Bhiwani', 'Visnagar', 'Ajmer',
  'Bahraich', 'Ambala', 'Avadi', 'Fatehpur', 'Bhusawal', 'Morvi', 'Orai', 'Bahjoi',
  'Vellore', 'Mehsana', 'Raiganj', 'Sirsa', 'Danapur', 'Serampore', 'Sultan Pur Majra',
  'Guna', 'Jaunpur', 'Panvel', 'Shivpuri', 'Surendranagar Dudhrej', 'Unnao', 'Chinsurah',
  'Alappuzha', 'Kottayam', 'Machilipatnam', 'Shimla', 'Adoni', 'Udupi', 'Keshod',
  'Robertsonpet', 'Udgir', 'Sindhanur', 'Makrana', 'Hassan', 'Vijayapura', 'Latur',
  'Narasaraopet', 'Chittoor', 'Palwal', 'Nagaon', 'Ranibennur', 'Siddipet', 'Madanapalle',
  'Mandya', 'Sopore', 'Bagaha', 'Raebareli', 'Pilibhit', 'Osmanabad', 'Chittur-Thathamangalam',
  'Vandavasi', 'Neyveli', 'Taliparamba', 'Kollam', 'Sriperumbudur', 'Ottappalam',
  'Dhamtari', 'Balaghat', 'Sivakasi', 'Thiruvalla', 'Satara', 'Virudhachalam', 'Kanhangad',
  'Narkatiaganj', 'Kamarhati', 'Srivilliputhur', 'Darbhanga', 'Chalakudy', 'Bapatla',
  'Kadapa', 'Tinsukia', 'Itanagar', 'Kohima', 'Gangtok', 'Port Blair', 'Daman', 'Silvassa'
];

const GOODS_TYPES = [
  { category: 'Fruits', items: ['Apple', 'Banana', 'Orange', 'Mango', 'Grapes', 'Pineapple', 'Papaya', 'Watermelon', 'Kiwi', 'Strawberry'] },
  { category: 'Vegetables', items: ['Potato', 'Tomato', 'Onion', 'Carrot', 'Cabbage', 'Cauliflower', 'Spinach', 'Broccoli', 'Capsicum', 'Brinjal'] },
  { category: 'Crockery', items: ['Plates', 'Bowls', 'Cups', 'Glasses', 'Spoons', 'Forks', 'Knives', 'Pans', 'Pots', 'Trays'] }
];

const Booking = () => {
  const history = useHistory();
  const [customer, setCustomer] = useState(null);
  const [vendors, setVendors] = useState([]);
  const [selectedVendor, setSelectedVendor] = useState(null);
  const [city, setCity] = useState('');
  const [pickUp, setPickUp] = useState('');
  const [destination, setDestination] = useState('');
  const [truckType, setTruckType] = useState('');
  const [goodsType, setGoodsType] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Check if customer is logged in
    const customerData = sessionStorage.getItem('customer');
    if (!customerData) {
      alert('Please login to book a service');
      history.push('/signin');
      return;
    }
    const parsedCustomer = JSON.parse(customerData);
    setCustomer(parsedCustomer);
    setCity(parsedCustomer.city);
    getVendors(parsedCustomer.city);
  }, [history]);

  const getVendors = (cityName) => {
    if (!cityName) return;
    setLoading(true);
    const cityUpper = cityName.toUpperCase();
    axios.get(`http://localhost:8080/customer/vendor_by_city/${cityUpper}`)
      .then((response) => {
        const result = response.data;
        if (result) {
          setVendors(result);
        } else {
          alert('No vendors found in your city');
        }
      })
      .catch((error) => {
        alert('Error occurred while fetching vendors. Please try again.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleCityChange = (e) => {
    const newCity = e.target.value;
    setCity(newCity);
    getVendors(newCity);
  };

  const selectVendor = (vendor) => {
    setSelectedVendor(vendor);
  };

  const placeRequest = () => {
    if (!selectedVendor) {
      alert('Please select a vendor');
      return;
    }
    if (!pickUp || !destination || !truckType || !goodsType) {
      alert('Please fill all required fields');
      return;
    }

    const body = {
      pickUp: pickUp,
      destination: destination,
      requestStatus: "REQUESTED",
      truckType: truckType,
      goodsType: goodsType
    };

    const customerId = sessionStorage.getItem('customerId');
    const vendorId = selectedVendor.id;

    setLoading(true);
    axios.post(`http://localhost:8080/customer/send_request/${customerId}/${vendorId}`, body)
      .then(response => {
        const result = response.data;
        if (result) {
          alert('Request placed successfully!');
          sessionStorage.setItem('request', JSON.stringify(result));
          history.push('/customer');
        } else {
          alert('Error placing request');
        }
      })
      .catch(err => {
        console.error('Error:', err);
        alert('Error placing request: ' + err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (!customer) {
    return <div className="text-center mt-5">Loading...</div>;
  }

  return (
    <div className="booking-container">
      <div className="container">
        <h1 className="booking-title">Book Your Transport Service</h1>

        {/* City Selection */}
        <div className="booking-section">
          <h3>Select Your City</h3>
          <div className="city-selection">
            <input
              type="text"
              className="city-input"
              placeholder="Enter city"
              value={city}
              onChange={handleCityChange}
            />
          </div>
        </div>

        {/* Vendor Selection */}
        <div className="booking-section">
          <h3>Available Vendors</h3>
          {loading ? (
            <div className="text-center">Loading vendors...</div>
          ) : (
            <div className="vendor-list">
              {vendors.length === 0 ? (
                <p>No vendors available in this city.</p>
              ) : (
                vendors.map((vendor) => (
                  <div
                    key={vendor.id}
                    className={`vendor-card ${selectedVendor && selectedVendor.id === vendor.id ? 'selected' : ''}`}
                    onClick={() => selectVendor(vendor)}
                  >
                    <h4>{vendor.name}</h4>
                    <p><strong>Email:</strong> {vendor.email}</p>
                    <p><strong>Phone:</strong> {vendor.phoneNo}</p>
                    <p><strong>Address:</strong> {vendor.address}, {vendor.city}, {vendor.state} - {vendor.postalCode}</p>
                  </div>
                ))
              )}
            </div>
          )}
        </div>

        {/* Request Form */}
        {selectedVendor && (
          <div className="booking-section request-form">
            <h3>Request Details</h3>
            <div className="selected-vendor">
              <h4>Selected Vendor: {selectedVendor.name}</h4>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Pick Up Location:</label>
                <select
                  className="form-control"
                  value={pickUp}
                  onChange={(e) => setPickUp(e.target.value)}
                >
                  <option value="">Select pick up city</option>
                  {INDIAN_CITIES.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>Destination:</label>
                <select
                  className="form-control"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                >
                  <option value="">Select destination city</option>
                  {INDIAN_CITIES.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Goods Type:</label>
                <select
                  className="form-control"
                  value={goodsType}
                  onChange={(e) => setGoodsType(e.target.value)}
                >
                  <option value="">Select goods type</option>
                  {GOODS_TYPES.map((category) => (
                    <optgroup key={category.category} label={category.category}>
                      {category.items.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>Truck Type:</label>
                <select
                  className="form-control"
                  value={truckType}
                  onChange={(e) => setTruckType(e.target.value)}
                >
                  <option value="">Select truck type</option>
                  <option value="MINI407_2000KG">MINI407 (2000KG)</option>
                  <option value="MEDIUM709_3800KG">MEDIUM709 (3800KG)</option>
                  <option value="LARGE1109_8320KG">LARGE1109 (8320KG)</option>
                </select>
              </div>
            </div>

            <button
              onClick={placeRequest}
              className="btn-success"
              disabled={loading}
            >
              {loading ? 'Placing Request...' : 'Place Request'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Booking;
