// app/page.tsx
// import { Metadata } from "next";
// import { useRouter } from "next/navigation";
// import { useAuth } from "@/context/UserContext";
// import AuthenticationForm from "@/components/authenticationForm";
// import MasygModal from "@/tool/Modal";
// import { useModal } from "@/hooks/useModal";
import FeatureCard from "@/components/FeatureCard";
import Slideshow from "@/components/Slideshow";
import Link from 'next/link';
// export const metadata: Metadata = {
//   title: "Smart Invoice & Data Processor",
//   description: "Convert invoices and receipts into structured data seamlessly.",
// };

export default function HomePage() {
  // const { state } = useAuth();
  // const router = useRouter();

  // const {
  //   isOpen: isOpenLoginModal,
  //   closeModal: closeLoginModal,
  //   openModal: openLoginModal,
  // } = useModal();

  return (
    <div className="w-screen">
      <section className="bg-gradient-to-b from-green-50 to-gray-100 py-16 px-6 sm:py-24 sm:px-12 lg:px-20">
        {/* <MasygModal handler={() => {}} isOpen={isOpenLoginModal} closeModal={closeLoginModal}>
          <AuthenticationForm closeModal={closeLoginModal} />
        </MasygModal> */}
        {/* Hero Section */}
        <div className="rounded-full max-w-5xl bg-red-100 p-10 mx-auto text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800">
            Smart Invoice, Receipt & Data Processor
          </h1>
          <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            Seamlessly convert your invoices and receipts into structured data. Analyze, export
            to Excel or CSV, and integrate with QuickBooks, Xero, Service Titan and more—all while
            ensuring the highest standards of security and privacy.
          </p>
          <div className="mt-8">
            <Link href={`${process.env.NEXT_PUBLIC_VITE_CLIENT_URL}/login`}
              // onClick={() => {
              //   if (state.isAuthenticated) {
              //     router.push("/data/dashboard");
              //   } else {
              //     openModal();
              //   }
              // }}
              className="inline-block bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-medium text-lg px-10 py-4 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>
        </div>
        <Slideshow />
        {/* Features Grid */}
        <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            title="Advanced GPT Parsing"
            description="Harness AI to accurately extract quantities, amounts, vendor names, and more, minimizing manual errors."
            icon="🔎"
          />
          <FeatureCard
            title="QuickBooks Integration"
            description="Send data seamlessly to QuickBooks for real-time accounting."
            icon="💼"
          />
          <FeatureCard
            title="Excel & CSV Exports"
            description="Export your data as a simple CSV or a fully formatted Excel file."
            icon="📊"
          />
          <FeatureCard
            title="Secure & Private"
            description="Our stringent security protocols ensure your data remains safe and confidential."
            icon="🔒"
          />
          <FeatureCard
            title="Xero Integration"
            description="Connect with Xero for comprehensive accounting and financial management."
            icon="🧾"
          />
          <FeatureCard
            title="Service Titan Integration"
            description="Manage service operations efficiently with seamless Service Titan integration."
            icon="🔧"
          />
          <FeatureCard
            title="Excel File Merge"
            description="Easily combine Excel files with an intuitive drag-and-drop interface to override and merge columns."
            icon="🔀"
          />
        </div>
      </section>
    </div>
  );
}
