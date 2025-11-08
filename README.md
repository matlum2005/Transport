# TransPerk - Transport Management System

A comprehensive full-stack transport management system built with React (frontend) and Spring Boot (backend) that connects customers with transportation vendors for seamless logistics services.

## 🚀 Features

### Customer Features
- **User Registration & Authentication**: Secure signup and login functionality
- **City-Based Vendor Discovery**: Find transportation vendors in your city
- **Service Booking**: Book transport services with multiple truck types and goods categories
- **Request Management**: Track and manage transport requests
- **Profile Management**: Update personal information and view booking history

### Vendor Features
- **Vendor Registration**: Register as a transportation service provider
- **Service Management**: Manage available services and pricing
- **Request Handling**: Accept/reject customer transport requests
- **Profile Management**: Update business information and contact details

### System Features
- **Dark/Light Mode**: Modern UI with theme switching capability
- **Responsive Design**: Mobile-friendly interface
- **Real-time Updates**: Live status updates for transport requests
- **Secure API**: RESTful API with proper authentication and validation

## 🛠️ Technology Stack

### Frontend
- **React 17.0.2**: Modern JavaScript library for building user interfaces
- **React Router DOM**: Declarative routing for React applications
- **Axios**: HTTP client for API communication
- **CSS3**: Custom styling with dark/light mode support
- **Reactstrap**: Bootstrap components for React

### Backend
- **Spring Boot 2.5.4**: Java framework for building REST APIs
- **Spring Data JPA**: ORM for database operations
- **MySQL**: Relational database for data persistence
- **Spring Security**: Authentication and authorization
- **Maven**: Dependency management and build tool

## 📁 Project Structure

```
TransPerk-main/
├── transperk-backend/          # Spring Boot backend
│   ├── src/main/java/com/app/
│   │   ├── controller/         # REST API controllers
│   │   ├── dao/               # Data Access Objects
│   │   ├── dto/               # Data Transfer Objects
│   │   ├── pojo/              # Entity classes
│   │   ├── service/           # Business logic services
│   │   └── custom_exception/  # Custom exception handling
│   ├── src/main/resources/
│   │   └── application.properties  # Database configuration
│   └── pom.xml                # Maven dependencies
│
├── transperk-react-app/        # React frontend
│   ├── public/                 # Static assets
│   ├── src/
│   │   ├── Component/          # React components
│   │   │   ├── styles/         # Component-specific CSS
│   │   │   └── img/            # Component images
│   │   ├── CustomerScreens/    # Customer-specific screens
│   │   ├── VendorScreens/      # Vendor-specific screens
│   │   ├── common/             # Shared utilities
│   │   ├── App.js              # Main application component
│   │   └── index.js            # Application entry point
│   ├── package.json            # NPM dependencies
│   └── README.md               # Frontend documentation
│
└── README.md                   # Project documentation
```

## 🗄️ Database Schema

### Key Entities
- **Users**: Customer and vendor authentication data
- **Customers**: Customer profile information
- **Vendors**: Vendor business information
- **TransportRequests**: Booking requests with details
- **Cities**: Supported city locations

## 🔧 Installation & Setup

### Prerequisites
- **Java 11** or higher
- **Node.js 14+** and npm
- **MySQL 8.0+**
- **Maven 3.6+**

### Backend Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/matlum2005/Transport.git
   cd TransPerk-main/transperk-backend
   ```

2. **Configure Database**
   - Create MySQL database: `transperk`
   - Update `src/main/resources/application.properties` with your database credentials

3. **Build and Run**
   ```bash
   mvn clean install
   mvn spring-boot:run
   ```
   Backend will start on `http://localhost:8080`

### Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd ../transperk-react-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```
   Frontend will start on `http://localhost:3000`

## 🚀 Usage

1. **Access the application** at `http://localhost:3000`
2. **Register** as a customer or vendor
3. **Login** with your credentials
4. **Customers**: Browse vendors in your city and book transport services
5. **Vendors**: Manage your services and handle customer requests

## 🔐 API Endpoints

### Authentication
- `POST /auth/login` - User login
- `POST /auth/register` - User registration

### Customer APIs
- `GET /customer/vendor_by_city/{city}` - Get vendors by city
- `POST /customer/send_request/{customerId}/{vendorId}` - Send transport request

### Vendor APIs
- `GET /vendor/requests/{vendorId}` - Get vendor requests
- `PUT /vendor/update_request/{requestId}` - Update request status

## 🎨 UI Features

- **Modern Design**: Glassmorphism effects and gradient backgrounds
- **Dark Mode**: Complete theme switching with localStorage persistence
- **Responsive Layout**: Mobile-first design approach
- **Interactive Elements**: Hover effects and smooth animations
- **Form Validation**: Client-side validation with error handling

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **matlum2005** - *Initial work* - [GitHub](https://github.com/matlum2005)

## 🙏 Acknowledgments

- React community for excellent documentation
- Spring Boot team for robust framework
- Open source contributors

---

**Note**: This is a full-stack web application for educational and demonstration purposes. For production use, additional security measures and optimizations would be required.
