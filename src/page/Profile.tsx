import React, { useState } from 'react';
import './Profile.css';
import profileIconnaruto from '../images/smiling-naruto.jpg';
import profileIcon from '../images/profile-user.png';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'รายการ 1', ชุดข้อมูล1: 4, ชุดข้อมูล2: 7 },
  { name: 'รายการ 2', ชุดข้อมูล1: 8, ชุดข้อมูล2: 10 },
  { name: 'รายการ 3', ชุดข้อมูล1: 6, ชุดข้อมูล2: 15 },
];

const Profile: React.FC = () => {
  // State สำหรับควบคุมการแสดง Sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // ฟังก์ชันสำหรับการเปิด/ปิด Sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  return (
    <div className="Profile-container">
      <div className="Profile-header">
        <div className="Profile-menu-icon" onClick={toggleSidebar}>
          &#9776; {/* Icon เมนู 3 ขีด */}
        </div>
        <h2 className="Profile-header-title">Profile</h2>
        <div className="Profile-id">
          <p>c0001</p>
          <div className="record-icon-profile" onClick={toggleSidebar}>
            <img src={profileIcon} alt="Profile Icon" width={30} height={30} />
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="menu-list">
          <ul>
            <li>Profile</li>
            <li>Settings</li>
            <li>Logout</li>
          </ul>
        </div>
      </div>

      {/* Profile Content */}
      <div className="Profile-content">
        {/* Image and Chart Container */}
        <div className="profile-upper">
          <div className="profile-image">
            < img src={profileIconnaruto} alt="Profile Icon" width={250} height={200} />
            <h3>นางสาว</h3>
          </div>
          
          <div className="profile-chart">
            <h2>ยอดงานรวม</h2>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data}
                layout="vertical"
                className="submount-bar-chart-container"
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" />
                <Tooltip />
                <Legend />
                <Bar dataKey="ชุดข้อมูล1" fill="#82ca9d" />
                <Bar dataKey="ชุดข้อมูล2" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* KPI Table */}
        <div className="kpi-table">
          <table>
            <thead>
              <tr>
                <th>วัน/เดือน/ปี</th>
                <th>01/09/2024</th>
                <th>02/09/2024</th>
                <th>03/09/2024</th>
                <th>04/09/2024</th>
                <th>05/09/2024</th>
                <th>06/09/2024</th>
                <th>07/09/2024</th>
                <th>08/09/2024</th>
                <th>09/09/2024</th>
                <th>10/09/2024</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>KPI</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Total</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Profile;
