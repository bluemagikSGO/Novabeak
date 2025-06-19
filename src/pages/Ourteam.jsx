import React from "react";
import NavBar from "../components/NavBar";
import { Mail, Phone } from "lucide-react";
import staffimg from "../assets/bitcoin.png";
import Footer from "../components/Footer";

const staffCard = [
  {
    staffImage:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQs4g2psfLyDUJMEvCyYnLm8xVk1DNitae9XYBXSR3tOKTqIrdhWZ-9lYgXipo9yKRYRyOp5vjY9Hw2x3mYLtvNCg",
    staffImageAlt: "Noah Hicks",
    staffName: "Noah Hicks",
    staffDept: "Structural Remote Manager",
    staffEmail: "NoahHick2020@gmail.com",
    staffPhone: "+12324437789",
  },
  {
    staffImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREmiJXW0hNii9sdFZh1WnUcVwzGDw1JEV9Rg&s",
    staffImageAlt: "Philip Ray",
    staffName: "Philip Ray",
    staffDept: "Fullstack Developer",
    staffEmail: "philreee33@gmail.com",
    staffPhone: "+12094437219",
  },
  {
    staffImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSomxIQJhJgP79BgILUN-aUlj7Xp_WkAHRcjQ&s",
    staffImageAlt: "Sarah Kate",
    staffName: "Sarah Kate",
    staffDept: "Digital Marketer",
    staffEmail: "Sarahkkk112@gmail.com",
    staffPhone: "+12713490789",
  },
  {
    staffImage:
      "https://0.academia-photos.com/39774037/10921584/12188218/s200_linda.price.jpg",
    staffImageAlt: "Linda Batowski",
    staffName: "Linda Batowski",
    staffDept: "Client Relation Manager",
    staffEmail: "LindaLinda2000@gmail.com",
    staffPhone: "+15678857789",
  },
];

const Ourteam = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow pb-13">
        <h1 className="text-3xl sm:text-4xl text-center font-bold pt-10 mb-8">
          The Team
        </h1>
        <div className="container mx-auto px-4">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {staffCard.map((sc, i) => (
              <div
                key={i}
                className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <img
                  className="w-20 h-20 object-cover bg-blue-100 rounded-full mb-4"
                  src={sc.staffImage}
                  alt={sc.staffImageAlt}
                />
                <h2 className="text-xl font-semibold text-blue-600 mb-1">
                  {sc.staffName}
                </h2>
                <p className="text-sm text-gray-500 mb-2">{sc.staffDept}</p>
                <div className="flex items-center text-gray-600 text-sm mb-1">
                  <Mail className="w-4 h-4 mr-2" />
                  <span className="break-all">{sc.staffEmail}</span>
                </div>
                <div className="flex items-center text-gray-600 text-sm">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>{sc.staffPhone}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Ourteam;
