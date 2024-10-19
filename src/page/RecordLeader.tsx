import React, { useState } from 'react';
import './RecordLeader.css';
import profileIcon from '../images/profile-user.png';

const RecordLeader: React.FC = () => {
    const data = { date: "DD/MM/YY", name: "ชื่ออ" };
  // State สำหรับควบคุมการแสดง Sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // ฟังก์ชันสำหรับการเปิด/ปิด Sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="recordL-container">
     <div className="recordL-header">
        {/* ปุ่มเมนู 3 ขีด */}
        <div className=" recordL-menu-icon" onClick={toggleSidebar}>
            &#9776; {/* Icon เมนู 3 ขีด */}
        </div>
        <h2 className="recordL-header-title">DAILY WORK RECORD (LEADER)</h2>
        <div className="recordL-id">
          <p>c0001</p>
          <div className="recordL-icon-profile" onClick={toggleSidebar}>
          <img src={profileIcon} alt="Profile Icon" width={30} height={30} />
          </div>
        </div>
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
      <div className="recordL-content">
        <div className="recordL-form-section">
            <div className="recordL-input-groupAll">
                <div className="recordL-input-group1">
                    <select className="recordL-dropdown">
                    <option value="">เลือก พนักงาน</option>
                    <option value="process1">Process 1</option>
                    <option value="process2">Process 2</option>
                    <option value="process3">Process 3</option>
                    </select>
                </div>
                <div className="recordL-input-group2">
                    <label>{data.date}</label>
                    <label>{data.name}</label>
                </div>

            </div>
            <div className="recordL-input-group">
                <label className='recordL-textinput'>Working min/Day เวลาการทำงาน นาที/วัน</label>
                <input type="text" />
            </div>
            <div className="recordL-input-group">
                <label className='recordL-textinput'>Pre-work inspection time เวลาตรวจสอบก่อนการทำงาน</label>
                <input type="text"/>
            </div>
            <div className="recordL-input-group">
                <label  className='recordL-textinput'>Attendance Score คะแนนการเข้างาน</label>
                <input type="text"/>
            </div>
            <div className="recordL-input-group">
                <label  className='recordL-textinput'>discipline ระเบียบวินัย</label>
                <input type="text"/>
            </div>
            <div className="recordL-input-group">
                <label  className='recordL-textinput'>5S</label>
                <input type="text"/>
            </div>
            <div className="recordL-input-group">
                <label  className='recordL-textinput'>Quality inspection การตรวจสอบคุณภาพ</label>
                <input type="text"/>
            </div>
            <div className="recordL-input-group">
                <label  className='recordL-textinput'>product ผลผลิต</label>
                <input type="text"/>
            </div>
            <div className="recordL-input-group">
                <label  className='recordL-textinput'>Giving opinions การเสนอความคิดเห็น</label>
                <input type="text"/>
            </div>
        </div>
      </div>
  </div>
  );
};

export default RecordLeader;
