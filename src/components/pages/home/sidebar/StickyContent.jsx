import React from "react";
import { Icon } from "@iconify/react";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import { APP_ROUTER } from "utils/constants";
import ScaffoldLayout from "components/shared/layouts/ScaffoldLayout";

const stickyContentLinkItems = [
  {
    title: "Groups",
    link: APP_ROUTER.GROUPS,
    icon: "",
  },
  {
    title: "Events",
    link: APP_ROUTER.EVENTS,
    icon: "ant-design:plus-outlined",
  },
  {
    title: "Followed Hashtags",
    link: APP_ROUTER.FOLLOWED_HASHTAGS,
  },
];
const StickyContent = () => {
  return (
    <ScaffoldLayout
      sx={{
        position: "sticky",
        top: "70px",
      }}
    >
      <nav className="py-1">
        <ul>
          {stickyContentLinkItems.map((item, index) => (
            <li
              key={index}
              className="px-3 text-xs font-medium text-blue-700 hover:underline"
            >
              <Link
                to={item.link}
                className="flex justify-between h-8 items-center"
              >
                <p>{item.title}</p>
                {item.icon && (
                  <Icon icon={item.icon} className="h-4 w-4 text-black-600" />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Box className="border-t border-solid border-black-100 p-3 text-black-600 font-semibold hover:bg-black-200">
        <Link className="text-center" href={APP_ROUTER.DISCOVER_HUB}>
          <h4>Discover more</h4>
        </Link>
      </Box>
    </ScaffoldLayout>
  );
};

export default StickyContent;
