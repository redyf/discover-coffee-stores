import { useRouter } from "next/navigation";
import Link from "next/link";

const CoffeeStore = () => {
  const router = useRouter();
  console.log("router", router);
  return (
    <div>
      Coffe Store Page {router.query}
      <Link id="link" href="/">
        Back to home
      </Link>
      <Link id="link" href="/coffee-store/dynamic">
        Go to page dynamic
      </Link>
    </div>
  );
};

export default CoffeeStore;
