import { useContext } from "react";
import { useCurrentUser } from "../features/authentication/useCurrentUser";
import { capitalLiseFirstLetter } from "../utils/helpers";
import { SiderBarContext } from "../contexts/SideBarContext";

function Profile({ type, className }) {
  const { user } = useCurrentUser();
  const isExpanded = useContext(SiderBarContext);
  const userGoogleAvatar = user.user_metadata.avatar_url;
  return (
    <figure
      className={`${type === "sidebar" && isExpanded ? "hidden" : "ml-2 block md:hidden"} flex items-center gap-2 ${className}`}
    >
      {userGoogleAvatar ? (
        <img className="h-10 w-10 rounded-full" src={userGoogleAvatar} />
      ) : (
        <div className="bg-primary-500 flex h-10 w-10 items-center justify-center rounded-full text-xl text-white">
          {capitalLiseFirstLetter(user.email)}
        </div>
      )}

      <span
        className={`${type === "sidebar" ? "hidden" : "font-semibold dark:text-white"} `}
      >
        {user.user_metadata?.full_name || user.email}
      </span>
    </figure>
  );
}

export default Profile;
