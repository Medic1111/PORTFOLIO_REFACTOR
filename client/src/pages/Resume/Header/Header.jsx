const Header = () => {
  return (
    <>
      <p className="text-5xl uppercase">aryse pagano</p>
      <p className="pb-3 border-b-2 text-3xl mb-2">software engineer</p>
      <address className="pb-3 border-b-2  mt-2 mb-2">
        754-367-0607 | paganowebdev@gmail.com |{" "}
        <a target="_blank" href="https://www.pagano.dev/">
          www.pagano.dev
        </a>{" "}
        | Miami Beach, FL
      </address>
    </>
  );
};

export default Header;
