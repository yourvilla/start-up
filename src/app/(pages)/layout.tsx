import Footer from "../_components/shared/Footer";
import Header from "../_components/shared/Header";



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
  <>
    <Header />
     {children}
      <Footer />
  </>
    
 
  );
}
