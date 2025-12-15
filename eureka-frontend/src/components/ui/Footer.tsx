import useStoreData from "@/store/store";

const Footer = () => {
  const isLoggedIn = useStoreData((state) => state.isLoggedIn);

  return (
    <footer
      className={ `${isLoggedIn && 'hidden'} bg-bg-primary border-t-[0.5px] border-gray-600 text-text-primary text-center`}
    >
      Made with 🤍 by Matrix
    </footer>
  );
};

export default Footer;
