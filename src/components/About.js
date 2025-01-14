import React, { Component } from 'react'
import UserClass from './UserClass';
import { Component } from 'react';

class About extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-pink-600 mb-4">About Us</h1>
          <p className="text-lg text-gray-600">
            Discover who we are, our mission, and why we're passionate about bringing delicious meals right to your door.
          </p>
        </div>
  
        {/* Mission Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-pink-500 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-700">
            At <span className="font-bold text-pink-600">FoodDelivery</span>, our mission is simple: to bring quality, affordable food from your favorite local restaurants directly to your doorstep.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            We believe in providing fast and reliable delivery, ensuring that you can enjoy fresh, delicious meals no matter where you are. Whether it's a busy workday or a cozy weekend at home, we're here to satisfy your cravings with just a few taps.
          </p>
        </div>
  
        {/* Values Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-pink-500 mb-6">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-xl font-semibold text-pink-600 mb-4">Quality</h3>
              <p className="text-gray-700">
                We partner with local restaurants that serve fresh, high-quality food. Every meal delivered is made with love and care.
              </p>
            </div>
  
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-xl font-semibold text-pink-600 mb-4">Reliability</h3>
              <p className="text-gray-700">
                With real-time tracking and reliable delivery partners, we ensure your order arrives on time, every time.
              </p>
            </div>
  
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-xl font-semibold text-pink-600 mb-4">Customer Focus</h3>
              <p className="text-gray-700">
                Your satisfaction is our top priority. We strive to make every experience smooth, easy, and enjoyable from start to finish.
              </p>
            </div>
          </div>
        </div>
  
        {/* Our Story Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-pink-500 mb-6">Our Story</h2>
          <p className="text-lg text-gray-700">
            <span className="font-bold text-pink-600">FoodDelivery</span> was founded by a group of passionate food lovers who wanted to make it easier for people to enjoy delicious meals without leaving the comfort of their homes. After experiencing the challenges of ordering food online, we set out to create a service that was faster, more reliable, and focused on quality.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            Since then, we’ve been delivering great food to happy customers every day. We are proud to serve our community, support local restaurants, and be part of the growing food delivery movement.
          </p>
        </div>
  
        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-pink-500 mb-4">Join Us Today</h2>
          <p className="text-lg text-gray-700 mb-6">
            Ready to enjoy delicious food delivered right to your door? Join <span className="font-bold text-pink-600">FoodDelivery</span> today and experience the convenience of hassle-free food delivery.
          </p>
        </div>
      </div>
    );
  }
}

export default About;