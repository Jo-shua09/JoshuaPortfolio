import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./../layouts/AppLayout";
import Index from "./../pages/Index";

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
