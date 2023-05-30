import GlobalStyle from "./assets/styles/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import FrontPage from "./pages/frontpage/FrontPage";
import SignupPage from "./pages/signuppage/SignupPage";
import SigninPage from "./pages/loginpage/SigninPage";
import UploadPage from "./pages/uploadpage/UploadPage";
import PostPage from "./pages/postpage/PostPage";

function App(): JSX.Element {
  const queryClient = new QueryClient()

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<FrontPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/signin" element={<SigninPage />} />
            <Route path="/sendpost" element={<UploadPage />} />
            <Route path="/post/:id" element={<PostPage />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
};

export default App;
