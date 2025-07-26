import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./features/authentication/LoginForm";
import SignupForm from "./features/authentication/SignupForm";
import Test from "./pages/Test";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import Dashboard from "./pages/Dashboard";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<LoginForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<SignupForm />} />
          <Route path="/test" element={<Test />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
