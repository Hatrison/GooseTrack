export const theme = {
  /* 
    Звертатись до змінних у файлі .styled.jsx через 
    ${({ theme }) => theme.mainBackgroundColor};  
  */
  // ======================================================================================================

  // Стилі для світлої теми
  light: {
    // scrollbar
    scrollbarColor: '#E7E5E5',
    scrollbarBackground: '#F2F2F2',

    // animation
    defaultTransition: 'all 250ms',
    // buttons
    borderAddTask: '2px dashed #3e85f3',
    buttonAddTaskColor: '#171820',
    buttonAddTaskColorHover: '#FFFFFF',
    buttontextColor: '#FFFFFF',
    buttonBackgroundColorAddTask: '#E3F3FF',
    buttonBackgroundColorAddTaskHover: '#3E85F3',
    buttonBackgroundColor: '#3E85F3',
    buttonBackgroundColorHover: '#2B78EF',
    buttonShadow: ' 4px 2px 16px rgba(136, 165, 191, 0.48)',
    buttonPeriodColor: '#FFFFFF',
    // comon colors
    mainBackgroundColor: '#FFFFFF',
    secondaryBackgroundColor: '#F7F6F9',
    accentColor: '#3E85F3',
    mainTextColor: '#111111',

    secondaryTextColor: '#FFFFFF',
    borderColor: 'rgba(255, 255, 255, 0.15)',

    // AsideBar
    asideBarBackground: '#FFFFFF',
    asideBarLogoText: '#3E85F3',
    asideBarTitle: '#34343480',
    asideBarIcon: '#34343480',
    asideBarIconActive: '#3E85F3',
    asideBarLinkText: '#34343480',
    asideBarActiveLinkText: '#3E85F3',
    asideBarActiveLinkBackground: '#E3F3FF',
    asideBarLinkBackgroundHover: 'rgba(120, 165, 191, 0.1)',
    assideBarCloseIconColor: '#343434',

    // Header
    headerBurgerIcon: '#343434',

    // UserProfile
    titleTextColor: '#343434',
    inputText: '#111111',
    labelText: '#111111',
    inputBorder: 'rgba(17, 17, 17, 0.15)',
    placeholderColor: 'rgba(17, 17, 17, 0.15)',

    TextColorUserProfile: '#111111',

    //CalendarHead
    CalendarHead: '#616161',
    CurrentDate: '#FFFFFF',

    //Modal
    modalBorder: '1px solid rgba(220, 227, 229, 0.8)',
    modalCloseIcon: '#111',

    // TaskModal
    taskModalTextColor: '#343434',
    taskModalInputColor: '#F6F6F6',
    taskModalLabelColor: '#5D5D5D',
    taskModalTitleColor: 'rgba(52, 52, 52, 0.8)',
    taskModalBorder: '1px solid rgba(220, 227, 229, 0.8)',

    //WeekCalendar
    weekCalendarText: '#343434',

    //TasksColumn
    tasksColumnBorder: 'rgba(220, 227, 229, 0.80)',

    //TasksColumnCard
    priorTextColor: '#F7F6F9',

    //ChangeTaskDirModal
    changeTaskDirModalBorder: 'transparent',

    //LoginForm
    loginInputColor: '#111111',
    loginInputBorder: '1px solid rgba(17, 17, 17, 0.15)',
    backgroundColorForm: '#FFFFFF',
    errorTagColor: '#E74A3B',
    correctTagColor: '#3CBC81',

    //CalendarToolbar
    periodActiveColor: '#3E85F3',
    periodActiveBackgroundColor: '#CAE8FF',
    periodInactiveColor: '#3E85F3',
    periodInactiveBackgroundColor: '#E3F3FF',
    periodBorder: '1px solid rgba(62, 133, 243, 0.20)',

    //ChoosedMonth
    monthBackgroundColor: '#FFFFFF',
    cellBorder: '1px solid rgba(220, 227, 229, 0.80)',
    monthMainColor: '#343434',
    monthHolidayColor: '#3E85F3',
    tableBorder: '1px solid rgba(220, 227, 229, 0.50)',
    calendarDate: '#343434',

    lowPriorityColor: '#3e85f3',
    mediumPriorityColor: '#f3b249',
    hightPriorityColor: '#ea3d65',

    lowPriorityBackgoundColor: '#ceeefd;',
    mediumPriorityBackgoundColor: '#fcf0d4',
    hightPriorityBackgoundColor: '#ffd2dd',

    //StatisticsSection
    periodColor: '#343434',
    statisticsBorder: '0.8px solid #E3F3FF',
  },

  // Стилі для темної теми
  dark: {
    // scrollbar
    scrollbarColor: '#2D3037',
    scrollbarBackground: '#21222C',

    defaultTransition: 'all 250ms',
    // buttons
    borderAddTask: 'none',
    buttonAddTaskColor: '#FFFFFF',
    buttonAddTaskColorHover: '#111111',
    buttonBackgroundColorAddTask: '#3E85F3',
    buttonBackgroundColorAddTaskHover: '#E3F3FF',
    buttontextColor: '#FFFFFF',
    buttonBackgroundColor: '#3E85F3',
    buttonBackgroundColorHover: '#2B78EF',
    buttonPeriodColor: '#3E85F3',
    buttonShadow: '4px 2px 16px rgba(136, 165, 191, 0.3);',
    // comon colors
    mainBackgroundColor: '#21222C',
    secondaryBackgroundColor: '#171820',
    accentColor: '#3E85F3',
    mainTextColor: '#FFFFFF',

    secondaryTextColor: '#FFFFFF',
    borderColor: 'rgba(255, 255, 255, 0.15)',

    // AsideBar
    asideBarBackground: '#13151A',
    asideBarLogoText: '#FFFFFF',
    asideBarTitle: '#FAFAFA4D',
    asideBarIcon: '#FFFFFF',
    asideBarIconActive: '#FFFFFF',
    asideBarLinkText: '#FFFFFF',
    asideBarActiveLinkText: '#FFFFFF',
    asideBarActiveLinkBackground: '#3E85F3',
    asideBarLinkBackgroundHover: 'rgba(120, 165, 191, 0.1)',
    assideBarCloseIconColor: '#FFFFFF',

    // Header
    headerBurgerIcon: '#FFFFFF',

    // UserProfile
    titleTextColor: '#FFFFFF',
    inputText: '#ffffff',
    labelText: 'rgba(250, 250, 250, 0.3)',
    inputBorder: 'rgba(255, 255, 255, 0.15)',
    TextColorUserProfile: '#111111',
    //CalendarHead
    titleColor: 'rgba(250, 250, 250, 0.3)',
    CalendarHead: '#FFFFFF',
    CurrentDate: '#FFFFFF',

    //Modal
    modalBorder: 'none',
    modalCloseIcon: '#fff',

    // TaskModal
    taskModalTextColor: '#fff',
    taskModalInputColor: '#171820',
    taskModalLabelColor: '#5B5C61',
    taskModalTitleColor: 'rgba(250, 250, 250, 0.30)',

    //WeekCalendar
    weekCalendarText: 'rgba(250, 250, 250, 0.3)',

    //TasksColumn
    tasksColumnBorder: 'rgba(255, 255, 255, 0.15)',

    //TasksColumnCard
    priorTextColor: '#171820',

    //ChangeTaskDirModal
    changeTaskDirModalBorder: 'rgba(255, 255, 255, 0.15)',

    //CalendarToolbar
    periodActiveColor: '#FFFFFF',
    periodActiveBackgroundColor: '#3E85F3',
    periodInactiveColor: '#3E85F3',
    periodInactiveBackgroundColor: '#21222C',
    periodBorder: '1px solid rgba(255, 255, 255, 0.15)',

    //ChoosedMonth
    monthBackgroundColor: '#21222C',
    cellBorder: '1px solid rgba(255, 255, 255, 0.15)',
    monthMainColor: '#FFFFFF',
    monthHolidayColor: '#3E85F3',
    tableBorder: '1px solid rgba(255, 255, 255, 0.15)',
    calendarDate: '#FFFFFF',

    lowPriorityColor: '#3e85f3',
    mediumPriorityColor: '#f3b249',
    hightPriorityColor: '#ea3d65',

    lowPriorityBackgoundColor: '#ceeefd;',
    mediumPriorityBackgoundColor: '#fcf0d4',
    hightPriorityBackgoundColor: '#ffd2dd',

    //StatisticsSection
    periodColor: '#fff',
    statisticsBorder: '0.8px solid #E3F3FF26',
  },

  // TaskModal
  taskModalInputColor: '#171820',
  taskModalLabelColor: '#5B5C61',

  //LoginForm
  loginInputColor: '#FFFFFF',
  loginInputBorder: '#DCEBF7',
  backgroundColorForm: '#111111',
  errorTagColor: '#E74A3B',
  correctTagColor: '#3CBC81',
};
