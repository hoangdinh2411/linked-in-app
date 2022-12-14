const color = {
  black_90: '#000000e6',
  black_60: '#666666',
  black_30: '#b2b2b2',
  black_20: '#ebebeb',
  black_10: '#f3f2ef',
  blue_70: '#0a66c2',
  blue_50: '#e2f0fe',
  gray_20: '#eef3f8',
  red: '#cc1016',
  amber_70: '#915907',
  amber_80: '#5d3b09',
  white: '#FFFFFF',
}

const widthOnDesktop = '1128px'
const heightNavbar = '52px'
const theme = {
  primary_background: color.black_10,
  loading_background:color.blue_50,
  loading_line_background:color.blue_70,
  like_background: color.blue_70,
  link: color.blue_70,
  link_hover: color.blue_50,
  premium_link: color.amber_70,
  premium_link_hover: color.amber_80,

  underline_hover: color.blue_70,

  text: color.black_90,
  text_blue: color.blue_70,
  text_hover: color.blue_70,
  text_low_emphasis: color.black_60,

  label: color.black_30,
  label_focus_hover: color.black_90,

  border: color.black_20,
  border_active: color.black_90,
  border_navbar_bottom: color.black_10,

  button_border: color.black_30,
  button_border_hover: color.black_90,
  button_text: color.black_60,
  button_outline_text: color.blue_70,
  button_outline_text_hover_focus: color.blue_50,
  button_text_hover_focus: color.black_90,
  button_contained_background: '#0073b1',
  button_contained_background_hover: '#004182 ',

  background_hover: color.black_10,
  background_search_input: color.gray_20,

  nav_item: color.black_60,
  nav_item_hover: color.black_90,
  nav_item_selected_active: color.black_90,

  action_text: color.blue_70,
  action_border: color.blue_70,
  action_background_hover: color.blue_50,

  unread_notification: color.red,

  //parameter ex: width, height, border-radius....
  widthOnDesktop,
  heightNavbar,

  // other color:
  white: color.white,
}

export default theme
