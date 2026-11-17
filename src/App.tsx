import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Money } from "./pages/Money";
import { Tools } from "./pages/Tools";
import { Build } from "./pages/Build";
import { Approach } from "./pages/Approach";
import { Niche } from "./pages/Niche";
import { Checklist } from "./pages/Checklist";
import { Pitch } from "./pages/Pitch";
import { Tracker } from "./pages/Tracker";
import { Earnings } from "./pages/Earnings";
import { Week } from "./pages/Week";
import { Sources } from "./pages/Sources";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/money" element={<Money />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/build" element={<Build />} />
        <Route path="/approach" element={<Approach />} />
        <Route path="/niche" element={<Niche />} />
        <Route path="/checklist" element={<Checklist />} />
        <Route path="/pitch" element={<Pitch />} />
        <Route path="/tracker" element={<Tracker />} />
        <Route path="/earnings" element={<Earnings />} />
        <Route path="/week" element={<Week />} />
        <Route path="/sources" element={<Sources />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
