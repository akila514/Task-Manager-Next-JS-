"use client";

import axios from "axios";
import React, { useState } from "react";

const CreateTaskPage = () => {
  const [enteredTask, setEnteredTask] = useState("");

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(enteredTask);

    await axios.post("api/tasks", { task: enteredTask });
  };
  return (
    <div className="text-sm w-full flex items-center justify-center h-[400px]">
      <form className="space-y-8" onSubmit={submitHandler}>
        <div>
          <p className="text-2xl font-medium text-center">Create a New Task</p>
          <p className="text-center text-[#afafaf]">
            Create a new task and add it to your list.
          </p>
        </div>

        <div className="flex flex-col md:flow-row space-y-6 w-auto md:w-[500px]">
          <input
            onChange={(e) => {
              setEnteredTask(e.target.value);
            }}
            type="text"
            name="title"
            id="title"
            placeholder="Enter Task"
            className="opacity-70 bg-black bg-opacity-10 border border-[#eeeeee] border-opacity-10 rounded-md p-2 w-full mb-2"
          />
          <button
            type="submit"
            className="p-2 rounded-md text-black bg-[#eeeeee] w-full"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTaskPage;
