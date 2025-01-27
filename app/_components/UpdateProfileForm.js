"use client";

import Image from "next/image";
import { updateProfile } from "../_lib/actions";
import { useFormStatus } from "react-dom";
import SubmitButton from "./SubmitButton";

function UpdateProfileForm({ children, guest }) {
  const { fullName, email, nationality, nationalID, countryFlag } = guest;

  return (
    <form className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col" action={updateProfile}>
      <div className="space-y-2">
        <label>Full name</label>
        <input
          disabled
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
          defaultValue={fullName}
          name="fullName"
        />
      </div>

      <div className="space-y-2">
        <label>Email address</label>
        <input
          disabled
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
          defaultValue={email}
          name="email"
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label htmlFor="nationality">Where are you from?</label>
          {countryFlag ? (
            <img src={countryFlag} alt="Country flag" className="h-5 rounded-sm" />
          ) : (
            ""
          )}
        </div>

        {/* WE USED CHILDREN BECAUSE SELECTCOUNTRY IS A SERVER COMPONENT AND WE CANT USE SERVER COMPONENT IN A CLIENT COMPONENT WITHOUT PASSING IT AS A PROP //NOTE */}
        {children}
      </div>

      <div className="space-y-2">
        <label htmlFor="nationalID">National ID number</label>
        <input
          name="nationalID"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
          defaultValue={nationalID}
        />
      </div>

      <div className="flex justify-end items-center gap-6">
        <SubmitButton pendingText="Updating...">Update profile</SubmitButton>
      </div>
    </form>
  );
}

export default UpdateProfileForm;
