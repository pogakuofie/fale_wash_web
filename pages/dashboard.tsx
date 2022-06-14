import type { NextPage } from "next";

// components
import { StyledText } from "../components/common/basic";
import PageContainer from "../components/common/page";

// hooks
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Dashboard: NextPage = () => {
  const { user, isLoggedIn, logout } = useAuth();

  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/login");
    }
  }, [isLoggedIn, router]);

  return (
    <PageContainer>
      <StyledText>Hi, Dashboard</StyledText>
      <StyledText>Your uid is {user?.uid ? user?.uid : "unknown"}.</StyledText>
      <button
        onClick={() => {
          logout();
        }}
      >
        Logout
      </button>
    </PageContainer>
  );
};

export default Dashboard;
