import ChatLeft from "@/components/homepage/chatleft/ChatLeft";
import ChatRight from "@/components/homepage/chatright/ChatRight";

export default function Home() {
  return (
    <main className="flex items-center justify-between bg-background h-screen overflow-hidden">
      <ChatLeft />
      <ChatRight />
    </main>
  );
}
