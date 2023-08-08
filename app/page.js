"use client";
import ChatLeft from "@/components/homepage/chatleft/ChatLeft";
import ChatRight from "@/components/homepage/chatright/ChatRight";

export default function Home() {
  const isAuth = useSelector((state) => state.authentication.isAuthenticated);

  useEffect(() => {
    if (!isAuth) {
      redirect("/login");
    }
  }, []);
  return (
    <main className="flex items-center justify-between bg-background h-screen overflow-hidden">
      <ChatLeft />
      <ChatRight />
    </main>
  );
}
