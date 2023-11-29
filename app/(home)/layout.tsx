import Navbar from "@/components/navbar";
import { getCurrentUser } from "../actions/get-current-user";

const HomeLayout = async ({ children }: { children: React.ReactNode }) => {
  const currentUser = await getCurrentUser();
  
  return (
    <div className="max-w-7xl mx-auto pt-2 px-5">
      <Navbar
        currentUser={
          currentUser
            ? {
                name: currentUser?.name!,
                image: currentUser?.image!,
              }
            : null
        }
      />
      <main className="py-10 flex">{children}</main>
    </div>
  );
};

export default HomeLayout;
