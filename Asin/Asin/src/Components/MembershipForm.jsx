import React from 'react';

const MembershipForm = () => {
  const membershipTypes = ['Silver', 'Gold', 'Platinum', 'Bronze'];

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-lg bg-white">
      <h2 className="text-2xl font-bold mb-4 text-center">Membership Form</h2>
      
      <form className="space-y-4">
        {/* Membership Type */}
        <div>
          <label htmlFor="membership" className="block text-sm font-medium text-gray-700">Membership Type</label>
          <select
            id="membership"
            name="membership"
            className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="" disabled selected>
              Select Membership
            </option>
            {membershipTypes.map((type) => (
              <option key={type} value={type.toLowerCase()}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* First Name */}
        <div>
          <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">First Name</label>
          <input
            type="text"
            id="first-name"
            name="first-name"
            placeholder="Enter your first name"
            className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Last Name */}
        <div>
          <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Last Name</label>
          <input
            type="text"
            id="last-name"
            name="last-name"
            placeholder="Enter your last name"
            className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Email Address */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email address"
            className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Agree to Conditions */}
        <div className="flex items-center">
          <input
            type="checkbox"
            id="agree"
            name="agree"
            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label htmlFor="agree" className="ml-2 block text-sm text-gray-700">
            I agree to the terms and conditions
          </label>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default MembershipForm;
