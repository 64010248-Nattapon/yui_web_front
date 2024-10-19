import React, { useState } from 'react';
import './YieldDaily.css';
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

// Data for good work (Yield)
const dataGood = [
  { name: 'รายการ 1', ชุดข้อมูล1: 4, ชุดข้อมูล2: 7},
  { name: 'รายการ 2', ชุดข้อมูล1: 8, ชุดข้อมูล2: 10},
  { name: 'รายการ 3', ชุดข้อมูล1: 6, ชุดข้อมูล2: 15 },
  { name: 'รายการ 4', ชุดข้อมูล1: 10, ชุดข้อมูล2: 12 },
];

// Data for NG (defective work)
const dataNG = [
  { name: 'รายการ 1', ชุดข้อมูล1: 2, ชุดข้อมูล2: 3 },
  { name: 'รายการ 2', ชุดข้อมูล1: 1, ชุดข้อมูล2: 4 },
  { name: 'รายการ 3', ชุดข้อมูล1: 3, ชุดข้อมูล2: 10 },
  { name: 'รายการ 4', ชุดข้อมูล1: 5, ชุดข้อมูล2: 2 },
];

const YieldDaily: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="background">
      {/* Header */}
      <div className="YieldDaily-header">
        {/* ปุ่มเมนู 3 ขีด */}
        <div className=" YieldDaily-menu-icon" onClick={toggleSidebar}>
            &#9776; {/* Icon เมนู 3 ขีด */}
        </div>
        <h2 className="YieldDaily-header-title">YIELD DAILY</h2>
        <div className="YieldDaily-date">MM/DD/YY</div>
      </div>
        {/* Sidebar */}
        <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
          <div className="profile-icon">
            <i className="fa fa-user-circle"></i>
          </div>
          <div className="menu-list">
            <ul>
              <li>Profile</li>
              <li>Settings</li>
              <li>Logout</li>
            </ul>
          </div>
        </div>

        {/* Content */}
        <div className="YieldDaily-content">
          <div className="YieldDaily-chart-section">

            {/* Good Work Chart */}
            <div className="YieldDaily-chart">
              <h2>400G</h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={dataGood}
                  className="YieldDaily-bar-chart-container"
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[0, 50]}/>
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="ชุดข้อมูล1" fill="#82ca9d" stackId="a" />
                  <Bar dataKey="ชุดข้อมูล2" fill="#8884d8" stackId="a" />
                 
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Defective Work Chart */}
            <div className="YieldDaily-chart">
              <h2>DR4</h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={dataNG}
                  className="YieldDaily-bar-chart-container"
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[0, 50]}/>
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="ชุดข้อมูล1" fill="#82ca9d" stackId="a" />
                  <Bar dataKey="ชุดข้อมูล2" fill="#8884d8" stackId="a" />
                 
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Another chart section for 800G */}
            <div className="YieldDaily-chart">
              <h2>800G</h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={dataGood} // Assuming same data for simplicity
                  className="YieldDaily-bar-chart-container"
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[0, 50]}/>
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="ชุดข้อมูล1" fill="#82ca9d" stackId="a" />
                  <Bar dataKey="ชุดข้อมูล2" fill="#8884d8" stackId="a" />
                
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
  );
};

export default YieldDaily;
