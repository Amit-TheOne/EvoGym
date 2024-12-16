import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 pt-3 pb-12 md:py-12">
      <div className="mx-auto w-5/6 gap-24 md:flex ">
        <div className="mt-8 basis-2/3 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5 md:pr-52">
            Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
            purus et arcu massa dictum condimentum. Augue scelerisque iaculis
            orci ut habitant laoreet. Iaculis tristique.
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>

        <div className="mt-8 basis-1/4 md:mt-0 justify-end">
          <h4 className="font-bold">Contact Us</h4>
          <p className="mt-5">Tempus metus mattis risus volutpat egestas Tempus metus.</p>
          <p>(333)425-6825</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;