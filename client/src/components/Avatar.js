import React from 'react';
import { PiUserCircleThin } from "react-icons/pi";

const Avatar = ({ userId, name, imageUrl, width, height }) => {
  let avatarName = "";

  if (name) {
    const splitName = name.split("");
    if (splitName.length > 1) {
      avatarName = splitName[0][0] + splitName[1][0];
    } else {
      avatarName = splitName[0][0];
    }
  }

  const bgColor = [
    'bg-slate-200',
    'bg-teal-200',
    'bg-red-200',
    'bg-green-200',
    'bg-yellow-200',
    'bg-gray-200',
    'bg-cyan-200',
    'bg-sky-200',
    'bg-blue-200'
  ];

  const randomNumber = Math.floor(Math.random() * bgColor.length); // Tạo ngẫu nhiên từ mảng màu nền

  return (
    <div 
      className={`relative overflow-hidden rounded-full`} 
      style={{ width: `${width}px`, height: `${height}px` }} // Sử dụng width và height
    >
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={name}
          className='object-cover w-full h-full rounded-full'
        />
      ) : name ? (
        <div className={`flex justify-center items-center text-lg ${bgColor[randomNumber]}`} style={{ width: `${width}px`, height: `${height}px` }}>
          {avatarName}
        </div>
      ) : (
        <PiUserCircleThin size={Math.min(width, height)} /> // Sử dụng kích thước nhỏ nhất
      )}
    </div>
  );
}

export default Avatar;
