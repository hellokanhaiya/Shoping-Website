import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginPage from "./LoginPage";
import RagisterPgae from "./RagisterPage";
export default function VendorDashboard() {
  return (
    <div className="my-16 vendor-dashboard">
      <main>
        <section>
          <div className="flex flex-wrap ">
            <LoginPage />
            <RagisterPgae />
          </div>
        </section>
      </main>
    </div>
  );
}
