import FindUs from "../FindUs";
import SocialLogin from "../SocialLogin";
import QZone from "../QZone";
import Background from "../Background";
const RightNav = () => {
  return (
    <div className="space-y-5">
      <SocialLogin></SocialLogin>
      <FindUs></FindUs>
      <QZone></QZone>
      <Background></Background>
    </div>
  );
};

export default RightNav;
