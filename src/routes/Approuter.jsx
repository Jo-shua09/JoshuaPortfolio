import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "../pages";
import AppLayout from "./../layouts/AppLayout";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Index />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
