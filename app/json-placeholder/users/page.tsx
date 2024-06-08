import JsonUserCards from "@/components/json-placeholder-components/json-user-cards";
import TopBar from "@/components/topbar";
import { UserData } from "@/types";
import axios from "axios";
import React from "react";

export default async function JsonUsersPage() {
  const userList = await axios.get(
    `https://jsonplaceholder.typicode.com/users`
  );

  if (!userList) {
    return <div>loading</div>;
  }

  const renderUsers = userList.data.map((item: UserData, index: number) => {
    return (
      <JsonUserCards key={`${index}${Math.random()}`} data={item} ind={index} />
    );
  });

  return (
    <main className="flex flex-col h-dvh w-full">
      <TopBar />
      <div className="grow grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5">
        {renderUsers}
      </div>
    </main>
  );
}
