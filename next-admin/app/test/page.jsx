import React from "react";

const Page = () => {
  const handleForm = async (formData) => {
    "use server";
    const username = formData.get("username");
    console.log("hello ", username);
  };
  return (
    <div>
      <form action={handleForm}>
        <input type="text" name="username" id="" />
        <button>Send</button>
      </form>
    </div>
  );
};

export default Page;
