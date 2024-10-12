type BaseThemeVars = {
  // Color Palette
  black?: string;
  white?: string;
  gray1?: string;
  gray2?: string;
  gray3?: string;
  gray4?: string;
  gray5?: string;
  gray6?: string;
  gray7?: string;
  gray8?: string;
  red?: string;
  blue?: string;
  orange?: string;
  orangeDark?: string;
  orangeLight?: string;
  green?: string;

  // Gradient Colors
  gradientRed?: string;
  gradientOrange?: string;

  // Component Colors
  primaryColor?: string;
  successColor?: string;
  dangerColor?: string;
  warningColor?: string;
  textColor?: string;
  textColor2?: string;
  textColor3?: string;
  activeColor?: string;
  activeOpacity?: number;
  disabledOpacity?: number;
  background?: string;
  background2?: string;

  // Padding
  paddingBase?: string;
  paddingXs?: string;
  paddingSm?: string;
  paddingMd?: string;
  paddingLg?: string;
  paddingXl?: string;

  // Font
  fontSizeXs?: string;
  fontSizeSm?: string;
  fontSizeMd?: string;
  fontSizeLg?: string;
  fontBold?: number;
  lineHeightXs?: string;
  lineHeightSm?: string;
  lineHeightMd?: string;
  lineHeightLg?: string;
  baseFont?: string;
  priceFont?: string;

  // Animation
  durationBase?: string;
  durationFast?: string;
  easeOut?: string;
  easeIn?: string;

  // Border
  borderColor?: string;
  borderWidth?: string;
  radiusSm?: string;
  radiusMd?: string;
  radiusLg?: string;
  radiusMax?: string;
};

export type ConfigProviderThemeVars = BaseThemeVars &
  import('../action-bar').ActionBarThemeVars &
  import('../action-bar-button').ActionBarButtonThemeVars &
  import('../action-bar-icon').ActionBarIconThemeVars &
  import('../action-sheet').ActionSheetThemeVars &
  // import('../address-edit').AddressEditThemeVars &
  // import('../address-list').AddressListThemeVars &
  import('../back-top').BackTopThemeVars &
  import('../badge').BadgeThemeVars &
  import('../barrage').BarrageThemeVars &
  import('../button').ButtonThemeVars &
  import('../calendar').CalendarThemeVars &
  // import('../card').CardThemeVars &
  import('../cascader').CascaderThemeVars &
  import('../cell').CellThemeVars &
  import('../cell-group').CellGroupThemeVars &
  import('../checkbox').CheckboxThemeVars &
  import('../circle').CircleThemeVars &
  import('../collapse-item').CollapseItemThemeVars &
  // import('../contact-card').ContactCardThemeVars &
  // import('../contact-edit').ContactEditThemeVars &
  // import('../contact-list').ContactListThemeVars &
  import('../count-down').CountDownThemeVars &
  // import('../coupon').CouponThemeVars &
  // import('../coupon-cell').CouponCellThemeVars &
  // import('../coupon-list').CouponListThemeVars &
  import('../dialog').DialogThemeVars &
  import('../divider').DividerThemeVars &
  import('../dropdown-item').DropdownItemThemeVars &
  import('../dropdown-menu').DropdownMenuThemeVars &
  import('../empty').EmptyThemeVars &
  import('../highlight').HighlightThemeVars &
  import('../field').FieldThemeVars &
  import('../floating-bubble').FloatingBubbleThemeVars &
  import('../floating-panel').FloatingPanelThemeVars &
  import('../grid-item').GridItemThemeVars &
  import('../image').ImageThemeVars &
  import('../image-preview').ImagePreviewThemeVars &
  import('../index-anchor').IndexAnchorThemeVars &
  import('../index-bar').IndexBarThemeVars &
  import('../list').ListThemeVars &
  import('../loading').LoadingThemeVars &
  import('../nav-bar').NavBarThemeVars &
  import('../notice-bar').NoticeBarThemeVars &
  import('../notify').NotifyThemeVars &
  import('../number-keyboard').NumberKeyboardThemeVars &
  import('../overlay').OverlayThemeVars &
  import('../pagination').PaginationThemeVars &
  import('../password-input').PasswordInputThemeVars &
  import('../picker').PickerThemeVars &
  import('../picker-group').PickerGroupThemeVars &
  import('../popover').PopoverThemeVars &
  import('../popup').PopupThemeVars &
  import('../progress').ProgressThemeVars &
  import('../pull-refresh').PullRefreshThemeVars &
  import('../radio').RadioThemeVars &
  import('../rate').RateThemeVars &
  import('../rolling-text').RollingTextThemeVars &
  import('../search').SearchThemeVars &
  import('../share-sheet').ShareSheetThemeVars &
  import('../sidebar').SidebarThemeVars &
  import('../sidebar-item').SidebarItemThemeVars &
  import('../signature').SignatureThemeVars &
  import('../skeleton').SkeletonThemeVars &
  import('../slider').SliderThemeVars &
  import('../step').StepThemeVars &
  import('../stepper').StepperThemeVars &
  import('../steps').StepsThemeVars &
  import('../sticky').StickyThemeVars &
  // import('../submit-bar').SubmitBarThemeVars &
  import('../swipe').SwipeThemeVars &
  import('../switch').SwitchThemeVars &
  import('../tabbar').TabbarThemeVars &
  import('../tabbar-item').TabbarItemThemeVars &
  import('../tabs').TabsThemeVars &
  import('../tag').TagThemeVars &
  import('../toast').ToastThemeVars &
  import('../tree-select').TreeSelectThemeVars &
  import('../uploader').UploaderThemeVars &
  import('../watermark').WatermarkThemeVars;
